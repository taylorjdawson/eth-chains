
### Usage
```js
import chains, { NetworkId, NetworkName } from 'eth-chains'

chains.getById(NetworkId.EthereumMainnet)
chains.getByName(NetworkName.EthereumMainnet)
chains.get() // pass in a networkId or a networkName

console.log(NetworkId.Ethereum.Mainnet) // 1
console.log(NetworkId.BinanceSmartChain.Mainnet) // 56

console.log(NetworkName.Ethereum.Mainnet) // "Ethereum Mainnet"
```


TODO:
- [ ] Add webhook that watches the chains repo and triggers an update to this package whenever that repo gets updated
    - [ ] Add check in the deploy script to make sure that the types are correct before publishing
- [ ] Add Tests
    - [ ] Once quicktype is added, test with different chains.json objects to make sure it can handle new types
- [ ] Use [quicktype](https://github.com/quicktype/quicktype) to autogen type from json
- [ ] Autogen Chain Id enum
- [x] Autogen Chain Name enum