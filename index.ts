// import chains, { NetworkName } from './src'
import jsonToTs from 'json-to-ts';
import chains from './chains.json'
console.log(jsonToTs(chains[0]))
// console.log(chains.get(NetworkName['Ether-1']))