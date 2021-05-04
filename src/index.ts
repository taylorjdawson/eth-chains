import { Chain } from './types'
import { chains } from './chains'

export { NetworkName } from './enums'
export { chains }

const getById = (id: number): Chain | {} => chains[id] || {}

const getByName = (name: string): Chain | {} =>
  Object.values(chains).find(chain => chain.name === name) || {}

const get = (idOrName: string | number): Chain | {} =>
  typeof idOrName === 'number' ? getById(idOrName) : getByName(idOrName)

export default {
  getById,
  getByName,
  get
}
