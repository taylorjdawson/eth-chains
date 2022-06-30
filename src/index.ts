import { Chain, Chains } from './types'
import { chains } from './chains'
import { ChainId } from './enums'
export { NativeCurrency, Explorer, Parent } from './types'
export { ChainName, ChainId } from './enums'
export { chains, Chain, Chains }

/**
 * Get a chain by its `id`.
 * @param id - The `id` of the chain
 * @returns The `Chain` object associated with the chain `id`
 */
const getById = (id: number): Chain | undefined => chains[id]

/**
 * Get a chain by its `name`.
 * @param name - The `name` of the chain
 * @returns The `Chain` object associated with the chain `name`
 */
const getByName = (name: string): Chain | undefined =>
  Object.values(chains).find(chain => chain.name === name) || {}

/**
 * Get a chain by its `id` or by its `name`.
 * @param idOrName - The name or id of the chain
 * @returns The `Chain` object associated with the `id` or `name`
 */
const get = (idOrName: string | number): Chain | undefined =>
  typeof idOrName === 'number' ? getById(idOrName) : getByName(idOrName)

/**
 * Gets the entire `chains` object
 * @returns An object containing all chains
 */
const all = (): Chains => chains

/**
 * Helper to make accessing the most popular chains easier
 */
export const chain = {
  ethereum: {
    mainnet: chains[ChainId.EthereumMainnet],
    rinkeby: chains[ChainId.Rinkeby],
    ropsten: chains[ChainId.Ropsten],
    kovan: chains[ChainId.Kovan],
    goerli: chains[ChainId.Goerli]
  },
  polygon: {
    mainnet: chains[ChainId.PolygonMainnet],
    mumbai: chains[ChainId.Mumbai]
  },
  arbitrum: {
    mainnet: chains[ChainId.ArbitrumOne],
    rinkeby: chains[ChainId.ArbitrumRinkeby]
  },
  optimism: {
    mainnet: chains[ChainId.Optimism],
    kovan: chains[ChainId.OptimismKovan]
  }
}

export default {
  getById,
  getByName,
  get,
  all,
  chain
}
