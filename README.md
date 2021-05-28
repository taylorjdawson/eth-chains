
### Usage
```js
import chains, { ChainId, ChainName } from 'eth-chains'

chains.getById(ChainId.EthereumMainnet) // returns Ethereum Mainnet object
chains.getByName(ChainName.EthereumMainnet)
chains.get() // pass in a networkId or a networkName

console.log(ChainId.EthereumMainnet) // 1
console.log(ChainId.BinanceSmartChainMainnet) // 56

console.log(ChainName.EthereumMainnet) // "Ethereum Mainnet"
```

TODO:
- [ ] Add webhook that watches the chains repo and triggers an update to this package whenever that repo gets updated
    - [ ] Add check in the deploy script to make sure that the types are correct before publishing
- [ ] Add Tests
    - [ ] Once quicktype is added, test with different chains.json objects to make sure it can handle new types
- [ ] Use [quicktype](https://github.com/quicktype/quicktype) to autogen types from json
- [x] Autogen Chain Id enum
- [x] Autogen Chain Name enum