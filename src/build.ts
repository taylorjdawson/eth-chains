import got from 'got'
import { promises as fs } from 'fs'
import { inspect } from 'util'
import { format } from 'prettier'
import { Options } from 'prettier'

import { Chain } from './types'
import { capitalize } from './helpers'
import prettierOptions from '../.prettierrc.json'

const formatterOptions = {
  ...(prettierOptions as Options),
  parser: 'typescript'
}

const getEnum = (chainName: string) => {
  let enumKey = capitalize(chainName.replace(/\s/g, ''))
  // If the key starts with a number or contains ',' or '.' then wrap it in quotes
  enumKey = !!chainName.match(/^\d|[\-\.]/) ? `'${enumKey}'` : enumKey
  return `${enumKey} = '${chainName}'`
}

const generateEnumFile = async (chains: Chain[]) => {
  fs.writeFile(
    './src/enums.ts',
    format(
      `export enum NetworkName {${chains
        .map(chain => `${getEnum(chain.name)}`)
        .join(',\n')}}`,
      { ...(prettierOptions as Options), parser: 'typescript' }
    )
  )
}

const generateChainsFile = async () => {
  const chains: Chain[] = await got(
    'https://chainid.network/chains.json'
  ).json()

  //await generateEnumFile(chains)

  const chainsJs = chains
    .map(chain => `${chain.chainId}: ${inspect(chain)}`)
    .join(',\n')

  fs.writeFile(
    './src/chains.ts',
    format(
      `import { Chains } from "./types"\nexport const chains: Chains = {\n${chainsJs}\n}`,
      formatterOptions
    )
  )
}

generateChainsFile()
