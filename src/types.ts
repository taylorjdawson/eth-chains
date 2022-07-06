export interface Chain {
  name: string
  title?: string
  chainId: number
  shortName: string
  chain: string
  network?: string
  networkId: number
  nativeCurrency: NativeCurrency
  rpc: string[]
  explorers?: Explorer[]
  faucets: string[]
  infoURL: string
  icon?: string
  slip44?: number
  parent?: Parent
  ens?: { registry: string }
  status?: 'deprecated'
}

export interface NativeCurrency {
  name: string
  symbol: string
  decimals: number
}

export interface Explorer {
  name: string
  url: string
  icon?: string
  standard: string
}

export interface Parent {
  chain: string
  type: 'L2' | 'shard'
  bridges?: [{ url: string }]
}

export interface Chains {
  [key: number]: Chain
}
