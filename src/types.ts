export interface Chain {
  name: string
  chainId: number
  shortName: string
  chain: string
  network: string
  networkId: number
  nativeCurrency: NativeCurrency
  rpc: string[]
  explorers: Explorer[]
  faucets: string[]
  infoURL: string
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

export interface Chains {
  [key: number]: Chain
}
