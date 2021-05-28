[![Publish](https://github.com/taylorjdawson/eth-chains/actions/workflows/main.yml/badge.svg)](https://github.com/taylorjdawson/eth-chains/actions/workflows/main.yml)

# Eth Chains
Helper module for getting Ethereum chains info from [chainid.network](https://chainid.network/).

## Install
```
yarn add eth-chains
```

```
npm install eth-chains
```

## Usage
Import `chains` methods and enums:
```ts
import chains, { ChainId, ChainName } from 'eth-chains'
```
### Chain names and ids via Enums:
```ts
console.log(ChainId.EthereumMainnet) // 1
console.log(ChainId.BinanceSmartChainMainnet) // 56
console.log(ChainName.EthereumMainnet) // "Ethereum Mainnet"
```

### Chain by ID:
```ts
chains.getById(ChainId.EthereumMainnet) // { name: "Ethereum Mainnet", ..., "infoURL": "https://ethereum.org" }
// Equivalent
chains.getById(1) 
```

### Chain by Name:
```ts
chains.getByName(ChainName.EthereumMainnet) // { name: "Ethereum Mainnet", ..., "infoURL": "https://ethereum.org" }
// Equivalent
chains.getByName('Ethereum Mainnet')
```

### Typescript Types:
```ts
import { Chain, NativeCurrency, Explorer } from 'eth-chains'
const ethereum: Chain = chains.getById(ChainId.EthereumMainnet)
ethereum.chain // 'ETH'
```

---

TODO:
- [ ] Add webhook that watches the chains repo and triggers an update to this package whenever that repo gets updated
    - [ ] Add check in the deploy script to make sure that the types are correct before publishing
- [ ] Add Tests
    - [ ] Once quicktype is added, test with different chains.json objects to make sure it can handle new types
- [ ] Use [quicktype](https://github.com/quicktype/quicktype) to autogen types from json
- [x] Autogen Chain Id enum
- [x] Autogen Chain Name enum
