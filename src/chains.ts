import { Chains } from './types'
export const chains: Chains = {
  1: {
    name: 'Ethereum Mainnet',
    chainId: 1,
    shortName: 'eth',
    chain: 'ETH',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpc: [
      'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
      'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
      'https://api.mycryptoapi.com/eth',
      'https://cloudflare-eth.com'
    ],
    faucets: [],
    explorers: [
      {
        name: 'etherscan',
        url: 'https://etherscan.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://ethereum.org'
  },
  10: {
    name: 'Optimistic Ethereum',
    chainId: 10,
    shortName: 'oeth',
    chain: 'ETH',
    network: 'mainnet',
    networkId: 10,
    nativeCurrency: { name: 'Ether', symbol: 'OETH', decimals: 18 },
    rpc: ['https://mainnet.optimism.io/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://optimism.io'
  },
  100: {
    name: 'xDAI Chain',
    chainId: 100,
    shortName: 'xdai',
    chain: 'XDAI',
    network: 'mainnet',
    networkId: 100,
    nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
    rpc: [
      'https://rpc.xdaichain.com',
      'https://xdai.poanetwork.dev',
      'wss://rpc.xdaichain.com/wss',
      'wss://xdai.poanetwork.dev/wss',
      'http://xdai.poanetwork.dev',
      'https://dai.poa.network',
      'ws://xdai.poanetwork.dev:8546'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://forum.poa.network/c/xdai-chain'
  },
  10000: {
    name: 'Smart Bitcoin Cash',
    chainId: 10000,
    shortName: 'smartbch',
    chain: 'smartBCH',
    network: 'mainnet',
    networkId: 10000,
    nativeCurrency: { name: 'Bitcoin Cash', symbol: 'BCH', decimals: 18 },
    rpc: ['https://rpc-mainnet.smartbch.org'],
    faucets: [],
    explorers: [],
    infoURL: 'http://smartbch.org/'
  },
  10001: {
    name: 'Smart Bitcoin Cash Testnet',
    chainId: 10001,
    shortName: 'smartbchtest',
    chain: 'smartBCHTest',
    network: 'testnet',
    networkId: 10001,
    nativeCurrency: {
      name: 'Bitcoin Cash Test Token',
      symbol: 'BCHT',
      decimals: 18
    },
    rpc: ['https://rpc-testnet.smartbch.org'],
    faucets: [],
    explorers: [],
    infoURL: 'http://smartbch.org/'
  },
  1001: {
    name: 'Klaytn Testnet Baobab',
    chainId: 1001,
    shortName: 'Baobab',
    chain: 'KLAY',
    network: 'baobab',
    networkId: 1001,
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    rpc: ['https://node-api.klaytnapi.com/v1/klaytn'],
    faucets: ['https://baobab.wallet.klaytn.com/access?next=faucet'],
    explorers: [],
    infoURL: 'https://www.klaytn.com/'
  },
  1007: {
    name: 'Newton Testnet',
    chainId: 1007,
    shortName: 'tnew',
    chain: 'NEW',
    network: 'testnet',
    networkId: 1007,
    nativeCurrency: { name: 'Newton', symbol: 'NEW', decimals: 18 },
    rpc: ['https://rpc1.newchain.newtonproject.org'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.newtonproject.org/'
  },
  101: {
    name: 'EtherInc',
    chainId: 101,
    shortName: 'eti',
    chain: 'ETI',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: { name: 'EtherInc Ether', symbol: 'ETI', decimals: 18 },
    rpc: ['https://api.einc.io/jsonrpc/mainnet'],
    faucets: [],
    explorers: [],
    infoURL: 'https://einc.io'
  },
  1010: {
    name: 'Evrice Network',
    chainId: 1010,
    shortName: 'EVC',
    chain: 'EVC',
    network: 'Evrice',
    networkId: 1010,
    nativeCurrency: { name: 'Evrice', symbol: 'EVC', decimals: 18 },
    rpc: ['https://meta.evrice.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://evrice.com'
  },
  10101: {
    name: 'Blockchain Genesis Mainnet',
    chainId: 10101,
    shortName: 'GEN',
    chain: 'GEN',
    network: 'mainnet',
    networkId: 10101,
    nativeCurrency: { name: 'GEN', symbol: 'GEN', decimals: 18 },
    rpc: [
      'https://eu.mainnet.xixoio.com',
      'https://us.mainnet.xixoio.com',
      'https://asia.mainnet.xixoio.com'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.xixoio.com/'
  },
  1012: {
    name: 'Newton',
    chainId: 1012,
    shortName: 'new',
    chain: 'NEW',
    network: 'mainnet',
    networkId: 1012,
    nativeCurrency: { name: 'Newton', symbol: 'NEW', decimals: 18 },
    rpc: ['https://global.rpc.mainnet.newtonproject.org'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.newtonproject.org/'
  },
  102: {
    name: 'Web3Games Testnet',
    chainId: 102,
    shortName: 'w3g',
    chain: 'Web3Games',
    network: 'testnet',
    networkId: 102,
    nativeCurrency: { name: 'Web3Games', symbol: 'W3G', decimals: 18 },
    rpc: ['https://substrate.org.cn'],
    faucets: [],
    explorers: [],
    infoURL: 'https://web3games.org/'
  },
  1022: {
    name: 'Sakura',
    chainId: 1022,
    shortName: 'sku',
    chain: 'Sakura',
    network: 'sakura',
    networkId: 1022,
    nativeCurrency: { name: 'Sakura', symbol: 'SKU', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://clover.finance/sakura'
  },
  1023: {
    name: 'Clover Testnet',
    chainId: 1023,
    shortName: 'tclv',
    chain: 'Clover',
    network: 'clover testnet',
    networkId: 1023,
    nativeCurrency: { name: 'Clover', symbol: 'CLV', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://clover.finance'
  },
  1024: {
    name: 'Clover Mainnet',
    chainId: 1024,
    shortName: 'clv',
    chain: 'Clover',
    network: 'clover mainnet',
    networkId: 1024,
    nativeCurrency: { name: 'Clover', symbol: 'CLV', decimals: 18 },
    rpc: [
      'https://rpc-ivy.clover.finance',
      'https://rpc-ivy-2.clover.finance',
      'https://rpc-ivy-3.clover.finance'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://clover.finance'
  },
  108: {
    name: 'ThunderCore Mainnet',
    chainId: 108,
    shortName: 'TT',
    chain: 'TT',
    network: 'mainnet',
    networkId: 108,
    nativeCurrency: {
      name: 'ThunderCore Mainnet Ether',
      symbol: 'TT',
      decimals: 18
    },
    rpc: ['https://mainnet-rpc.thundercore.com'],
    faucets: ['https://faucet.thundercore.com'],
    explorers: [],
    infoURL: 'https://thundercore.com'
  },
  11: {
    name: 'Metadium Mainnet',
    chainId: 11,
    shortName: 'meta',
    chain: 'META',
    network: 'mainnet',
    networkId: 11,
    nativeCurrency: {
      name: 'Metadium Mainnet Ether',
      symbol: 'META',
      decimals: 18
    },
    rpc: ['https://api.metadium.com/prod'],
    faucets: [],
    explorers: [],
    infoURL: 'https://metadium.com'
  },
  110: {
    name: 'Proton Testnet',
    chainId: 110,
    shortName: 'xpr',
    chain: 'XPR',
    network: 'testnet',
    networkId: 110,
    nativeCurrency: { name: 'Proton', symbol: 'XPR', decimals: 4 },
    rpc: ['https://protontestnet.greymass.com/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://protonchain.com'
  },
  111: {
    name: 'EtherLite Chain',
    chainId: 111,
    shortName: 'ETL',
    chain: 'ETL',
    network: 'mainnet',
    networkId: 111,
    nativeCurrency: { name: 'EtherLite', symbol: 'ETL', decimals: 18 },
    rpc: ['https://rpc.etherlite.org'],
    faucets: ['https://etherlite.org/faucets'],
    explorers: [],
    infoURL: 'https://etherlite.org'
  },
  1122334455: {
    name: 'IPOS Network',
    chainId: 1122334455,
    shortName: 'ipos',
    chain: 'IPOS',
    network: 'mainnet',
    networkId: 1122334455,
    nativeCurrency: {
      name: 'IPOS Network Ether',
      symbol: 'IPOS',
      decimals: 18
    },
    rpc: ['https://rpc.iposlab.com', 'https://rpc2.iposlab.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://iposlab.com'
  },
  1139: {
    name: 'MathChain',
    chainId: 1139,
    shortName: 'MATH',
    chain: 'MATH',
    network: 'mainnet',
    networkId: 1139,
    nativeCurrency: { name: 'MathChain', symbol: 'MATH', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://mathchain.org'
  },
  1140: {
    name: 'MathChain Testnet',
    chainId: 1140,
    shortName: 'tMATH',
    chain: 'MATH',
    network: 'testnet',
    networkId: 1140,
    nativeCurrency: { name: 'MathChain', symbol: 'MATH', decimals: 18 },
    rpc: ['https://galois-hk.maiziqianbao.net/rpc'],
    faucets: ['https://scan.boka.network/#/Galois/faucet'],
    explorers: [],
    infoURL: 'https://mathchain.org'
  },
  12: {
    name: 'Metadium Testnet',
    chainId: 12,
    shortName: 'kal',
    chain: 'META',
    network: 'testnet',
    networkId: 12,
    nativeCurrency: {
      name: 'Metadium Testnet Ether',
      symbol: 'KAL',
      decimals: 18
    },
    rpc: ['https://api.metadium.com/dev'],
    faucets: [],
    explorers: [],
    infoURL: 'https://metadium.com'
  },
  122: {
    name: 'Fuse Mainnet',
    chainId: 122,
    shortName: 'fuse',
    chain: 'FUSE',
    network: 'mainnet',
    networkId: 122,
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    rpc: ['https://rpc.fuse.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://fuse.io/'
  },
  127: {
    name: 'Factory 127 Mainnet',
    chainId: 127,
    shortName: 'feth',
    chain: 'FETH',
    network: 'factory127 mainnet',
    networkId: 127,
    nativeCurrency: { name: 'Factory 127 Token', symbol: 'FETH', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.factory127.com'
  },
  128: {
    name: 'Huobi ECO Chain Mainnet',
    chainId: 128,
    shortName: 'heco',
    chain: 'Heco',
    network: 'mainnet',
    networkId: 128,
    nativeCurrency: {
      name: 'Huobi ECO Chain Native Token',
      symbol: 'HT',
      decimals: 18
    },
    rpc: [
      'https://http-mainnet.hecochain.com',
      'wss://ws-mainnet.hecochain.com'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://hecoinfo.com'
  },
  1284: {
    name: 'Moonbeam Polkadot',
    chainId: 1284,
    shortName: 'mbeam',
    chain: 'MOON',
    network: 'moonbeam',
    networkId: 1284,
    nativeCurrency: { name: 'Glimmer', symbol: 'GLMR', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://moonbeam.network/networks/moonbeam/'
  },
  1285: {
    name: 'Moonriver Kusama',
    chainId: 1285,
    shortName: 'mriver',
    chain: 'MOON',
    network: 'moonriver',
    networkId: 1285,
    nativeCurrency: { name: 'River', symbol: 'RIVER', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://moonbeam.network/networks/moonriver/'
  },
  1286: {
    name: 'Moonrock Rococo',
    chainId: 1286,
    shortName: 'mrock',
    chain: 'MOON',
    network: 'moonrock',
    networkId: 1286,
    nativeCurrency: { name: 'Rocs', symbol: 'ROC', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: ''
  },
  1287: {
    name: 'Moonbeam Testnet Moonbase Alpha',
    chainId: 1287,
    shortName: 'mbase',
    chain: 'MOON',
    network: 'moonbase',
    networkId: 1287,
    nativeCurrency: { name: 'Dev', symbol: 'DEV', decimals: 18 },
    rpc: [
      'https://rpc.testnet.moonbeam.network',
      'wss://wss.testnet.moonbeam.network'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://docs.moonbeam.network/networks/testnet/'
  },
  13: {
    name: 'Diode Testnet Staging',
    chainId: 13,
    shortName: 'dstg',
    chain: 'DIODE',
    network: 'testnet',
    networkId: 13,
    nativeCurrency: { name: 'Staging Diodes', symbol: 'sDIODE', decimals: 18 },
    rpc: ['https://staging.diode.io:8443/', 'wss://staging.diode.io:8443/ws'],
    faucets: [],
    explorers: [],
    infoURL: 'https://diode.io/staging'
  },
  1313114: {
    name: 'Ether-1',
    chainId: 1313114,
    shortName: 'etho',
    chain: 'ETHO',
    network: 'mainnet',
    networkId: 1313114,
    nativeCurrency: { name: 'Ether-1 Ether', symbol: 'ETHO', decimals: 18 },
    rpc: ['https://rpc.ether1.org'],
    faucets: [],
    explorers: [],
    infoURL: 'https://ether1.org'
  },
  1313161554: {
    name: 'Aurora MainNet',
    chainId: 1313161554,
    shortName: 'aurora',
    chain: 'NEAR',
    network: 'mainnet',
    networkId: 1313161554,
    nativeCurrency: { name: 'Ether', symbol: 'aETH', decimals: 18 },
    rpc: ['https://rpc.mainnet.aurora.dev:8545'],
    faucets: [],
    explorers: [],
    infoURL: 'https://aurora.dev'
  },
  1313161555: {
    name: 'Aurora TestNet',
    chainId: 1313161555,
    shortName: 'aurora-testnet',
    chain: 'NEAR',
    network: 'testnet',
    networkId: 1313161555,
    nativeCurrency: { name: 'Ether', symbol: 'aETH', decimals: 18 },
    rpc: ['https://rpc.testnet.aurora.dev:8545'],
    faucets: [],
    explorers: [],
    infoURL: 'https://aurora.dev'
  },
  1313161556: {
    name: 'Aurora BetaNet',
    chainId: 1313161556,
    shortName: 'aurora-betanet',
    chain: 'NEAR',
    network: 'betanet',
    networkId: 1313161556,
    nativeCurrency: { name: 'Ether', symbol: 'aETH', decimals: 18 },
    rpc: ['https://rpc.betanet.aurora.dev:8545'],
    faucets: [],
    explorers: [],
    infoURL: 'https://aurora.dev'
  },
  1313500: {
    name: 'Xerom',
    chainId: 1313500,
    shortName: 'xero',
    chain: 'XERO',
    network: 'mainnet',
    networkId: 1313500,
    nativeCurrency: { name: 'Xerom Ether', symbol: 'XERO', decimals: 18 },
    rpc: ['https://rpc.xerom.org'],
    faucets: [],
    explorers: [],
    infoURL: 'https://xerom.org'
  },
  13371337: {
    name: 'PepChain Churchill',
    chainId: 13371337,
    shortName: 'tpep',
    chain: 'PEP',
    network: 'testnet',
    networkId: 13371337,
    nativeCurrency: {
      name: 'PepChain Churchill Ether',
      symbol: 'TPEP',
      decimals: 18
    },
    rpc: ['https://churchill-rpc.pepchain.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://pepchain.io'
  },
  137: {
    name: 'Matic Mainnet',
    chainId: 137,
    shortName: 'matic',
    chain: 'Matic',
    network: 'mainnet',
    networkId: 137,
    nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
    rpc: [
      'https://rpc-mainnet.matic.network',
      'wss://ws-mainnet.matic.network'
    ],
    faucets: [],
    explorers: [
      {
        name: 'polygonscan',
        url: 'https://polygonscan.com',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://matic.network/'
  },
  14: {
    name: 'Flare Mainnet',
    chainId: 14,
    shortName: 'flr',
    chain: 'FLR',
    network: 'flare',
    networkId: 14,
    nativeCurrency: { name: 'Spark', symbol: 'FLR', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://flare.xyz'
  },
  15: {
    name: 'Diode Prenet',
    chainId: 15,
    shortName: 'diode',
    chain: 'DIODE',
    network: 'mainnet',
    networkId: 15,
    nativeCurrency: { name: 'Diodes', symbol: 'DIODE', decimals: 18 },
    rpc: ['https://prenet.diode.io:8443/', 'wss://prenet.diode.io:8443/ws'],
    faucets: [],
    explorers: [],
    infoURL: 'https://diode.io/prenet'
  },
  16: {
    name: 'Flare Testnet Coston',
    chainId: 16,
    shortName: 'cflr',
    chain: 'FLR',
    network: 'coston',
    networkId: 16,
    nativeCurrency: { name: 'Coston Spark', symbol: 'CFLR', decimals: 18 },
    rpc: [],
    faucets: ['https://faucet.towolabs.com'],
    explorers: [],
    infoURL: 'https://github.com/flare-eng/coston'
  },
  1618: {
    name: 'Catecoin Chain Mainnet',
    chainId: 1618,
    shortName: 'cate',
    chain: 'Catechain',
    network: 'mainnet',
    networkId: 1618,
    nativeCurrency: { name: 'Catecoin', symbol: 'CATE', decimals: 18 },
    rpc: ['https://send.catechain.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://catechain.com'
  },
  162: {
    name: 'Lightstreams Testnet',
    chainId: 162,
    shortName: 'tpht',
    chain: 'PHT',
    network: 'sirius',
    networkId: 162,
    nativeCurrency: { name: 'Lightstreams PHT', symbol: 'PHT', decimals: 18 },
    rpc: ['https://node.sirius.lightstreams.io'],
    faucets: ['https://discuss.lightstreams.network/t/request-test-tokens'],
    explorers: [],
    infoURL: 'https://explorer.sirius.lightstreams.io'
  },
  1620: {
    name: 'Atheios',
    chainId: 1620,
    shortName: 'ath',
    chain: 'ATH',
    network: 'mainnet',
    networkId: 11235813,
    nativeCurrency: { name: 'Atheios Ether', symbol: 'ATH', decimals: 18 },
    rpc: ['https://wallet.atheios.com:8797'],
    faucets: [],
    explorers: [],
    infoURL: 'https://atheios.com'
  },
  163: {
    name: 'Lightstreams Mainnet',
    chainId: 163,
    shortName: 'pht',
    chain: 'PHT',
    network: 'mainnet',
    networkId: 163,
    nativeCurrency: { name: 'Lightstreams PHT', symbol: 'PHT', decimals: 18 },
    rpc: ['https://node.mainnet.lightstreams.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://explorer.lightstreams.io'
  },
  1666600000: {
    name: 'Harmony Mainnet Shard 0',
    chainId: 1666600000,
    shortName: 'hmy-s0',
    chain: 'Harmony',
    network: 'mainnet',
    networkId: 1666600000,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://api.harmony.one'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666600001: {
    name: 'Harmony Mainnet Shard 1',
    chainId: 1666600001,
    shortName: 'hmy-s1',
    chain: 'Harmony',
    network: 'mainnet',
    networkId: 1666600001,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://s1.api.harmony.one'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666600002: {
    name: 'Harmony Mainnet Shard 2',
    chainId: 1666600002,
    shortName: 'hmy-s2',
    chain: 'Harmony',
    network: 'mainnet',
    networkId: 1666600002,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://s2.api.harmony.one'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666600003: {
    name: 'Harmony Mainnet Shard 3',
    chainId: 1666600003,
    shortName: 'hmy-s3',
    chain: 'Harmony',
    network: 'mainnet',
    networkId: 1666600003,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://s3.api.harmony.one'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666700000: {
    name: 'Harmony Testnet Shard 0',
    chainId: 1666700000,
    shortName: 'hmy-b-s0',
    chain: 'Harmony',
    network: 'testnet',
    networkId: 1666700000,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://api.s0.b.hmny.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666700001: {
    name: 'Harmony Testnet Shard 1',
    chainId: 1666700001,
    shortName: 'hmy-b-s1',
    chain: 'Harmony',
    network: 'testnet',
    networkId: 1666700001,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://api.s1.b.hmny.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666700002: {
    name: 'Harmony Testnet Shard 2',
    chainId: 1666700002,
    shortName: 'hmy-b-s2',
    chain: 'Harmony',
    network: 'testnet',
    networkId: 1666700002,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://api.s2.b.hmny.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  1666700003: {
    name: 'Harmony Testnet Shard 3',
    chainId: 1666700003,
    shortName: 'hmy-b-s3',
    chain: 'Harmony',
    network: 'testnet',
    networkId: 1666700003,
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    rpc: ['https://api.s3.b.hmny.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.harmony.one/'
  },
  17: {
    name: 'ThaiChain 2.0 ThaiFi',
    chainId: 17,
    shortName: 'tfi',
    chain: 'TCH',
    network: 'thaifi',
    networkId: 17,
    nativeCurrency: { name: 'Thaifi Ether', symbol: 'TFI', decimals: 18 },
    rpc: ['https://rpc.thaifi.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://exp.thaifi.com'
  },
  170: {
    name: 'HOO Smart Chain Testnet',
    chainId: 170,
    shortName: 'hoosmartchain',
    chain: 'ETH',
    network: 'testnet',
    networkId: 170,
    nativeCurrency: { name: 'HOO', symbol: 'HOO', decimals: 18 },
    rpc: ['https://http-testnet.hoosmartchain.com'],
    faucets: ['https://faucet-testnet.hscscan.com/'],
    explorers: [],
    infoURL: 'https://www.hoosmartchain.com'
  },
  18: {
    name: 'ThunderCore Testnet',
    chainId: 18,
    shortName: 'TST',
    chain: 'TST',
    network: 'testnet',
    networkId: 18,
    nativeCurrency: {
      name: 'ThunderCore Testnet Ether',
      symbol: 'TST',
      decimals: 18
    },
    rpc: ['https://testnet-rpc.thundercore.com'],
    faucets: ['https://faucet-testnet.thundercore.com'],
    explorers: [],
    infoURL: 'https://thundercore.com'
  },
  18289463: {
    name: 'IOLite',
    chainId: 18289463,
    shortName: 'ilt',
    chain: 'ILT',
    network: 'mainnet',
    networkId: 18289463,
    nativeCurrency: { name: 'IOLite Ether', symbol: 'ILT', decimals: 18 },
    rpc: ['https://net.iolite.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://iolite.io'
  },
  1856: {
    name: 'Teslafunds',
    chainId: 1856,
    shortName: 'tsf',
    chain: 'TSF',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: { name: 'Teslafunds Ether', symbol: 'TSF', decimals: 18 },
    rpc: ['https://tsfapi.europool.me'],
    faucets: [],
    explorers: [],
    infoURL: 'https://teslafunds.io'
  },
  1987: {
    name: 'EtherGem',
    chainId: 1987,
    shortName: 'egem',
    chain: 'EGEM',
    network: 'mainnet',
    networkId: 1987,
    nativeCurrency: { name: 'EtherGem Ether', symbol: 'EGEM', decimals: 18 },
    rpc: ['https://jsonrpc.egem.io/custom'],
    faucets: [],
    explorers: [],
    infoURL: 'https://egem.io'
  },
  2: {
    name: 'Expanse Network',
    chainId: 2,
    shortName: 'exp',
    chain: 'EXP',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: {
      name: 'Expanse Network Ether',
      symbol: 'EXP',
      decimals: 18
    },
    rpc: ['https://node.expanse.tech'],
    faucets: [],
    explorers: [],
    infoURL: 'https://expanse.tech'
  },
  20: {
    name: 'ELA-ETH-Sidechain Mainnet',
    chainId: 20,
    shortName: 'elaeth',
    chain: 'ETH',
    network: 'mainnet',
    networkId: 20,
    nativeCurrency: { name: 'Elastos', symbol: 'ELA', decimals: 18 },
    rpc: ['https://mainrpc.elaeth.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.elastos.org/'
  },
  200625: {
    name: 'Akroma',
    chainId: 200625,
    shortName: 'aka',
    chain: 'AKA',
    network: 'mainnet',
    networkId: 200625,
    nativeCurrency: { name: 'Akroma Ether', symbol: 'AKA', decimals: 18 },
    rpc: ['https://remote.akroma.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://akroma.io'
  },
  20181205: {
    name: 'quarkblockchain',
    chainId: 20181205,
    shortName: 'qki',
    chain: 'QKI',
    network: 'mainnet',
    networkId: 20181205,
    nativeCurrency: {
      name: 'quarkblockchain Native Token',
      symbol: 'QKI',
      decimals: 18
    },
    rpc: ['https://hz.rpc.qkiscan.cn', 'https://jp.rpc.qkiscan.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://quarkblockchain.org/'
  },
  2020: {
    name: '420coin',
    chainId: 2020,
    shortName: '420',
    chain: '420',
    network: 'mainnet',
    networkId: 2020,
    nativeCurrency: { name: 'Fourtwenty', symbol: '420', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://420integrated.com'
  },
  2021: {
    name: 'Edgeware Mainnet',
    chainId: 2021,
    shortName: 'edg',
    chain: 'EDG',
    network: 'mainnet',
    networkId: 2021,
    nativeCurrency: { name: 'Edge', symbol: 'EDG', decimals: 18 },
    rpc: ['https://mainnet1.edgewa.re'],
    faucets: [],
    explorers: [],
    infoURL: 'http://edgewa.re'
  },
  2022: {
    name: 'Beresheet Testnet',
    chainId: 2022,
    shortName: 'edgt',
    chain: 'EDG',
    network: 'beresheet',
    networkId: 2022,
    nativeCurrency: { name: 'Testnet Edge', symbol: 'tEDG', decimals: 18 },
    rpc: ['https://beresheet1.edgewa.re'],
    faucets: [],
    explorers: [],
    infoURL: 'http://edgewa.re'
  },
  21: {
    name: 'ELA-ETH-Sidechain Testnet',
    chainId: 21,
    shortName: 'elaetht',
    chain: 'ETH',
    network: 'testnet',
    networkId: 21,
    nativeCurrency: { name: 'Elastos', symbol: 'tELA', decimals: 18 },
    rpc: ['https://rpc.elaeth.io'],
    faucets: ['https://faucet.elaeth.io/'],
    explorers: [],
    infoURL: 'https://elaeth.io/'
  },
  211: {
    name: 'Freight Trust Network',
    chainId: 211,
    shortName: 'EDI',
    chain: 'EDI',
    network: 'freight & trade network',
    networkId: 0,
    nativeCurrency: {
      name: 'Freight Trust Native',
      symbol: '0xF',
      decimals: 18
    },
    rpc: [
      'http://13.57.207.168:3435',
      'https://app.freighttrust.net/ftn/${API_KEY}'
    ],
    faucets: ['http://faucet.freight.sh'],
    explorers: [],
    infoURL: 'https://freighttrust.com'
  },
  22: {
    name: 'ELA-DID-Sidechain Mainnet',
    chainId: 22,
    shortName: 'eladid',
    chain: 'ETH',
    network: 'mainnet',
    networkId: 22,
    nativeCurrency: { name: 'Elastos', symbol: 'ELA', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.elastos.org/'
  },
  23: {
    name: 'ELA-DID-Sidechain Testnet',
    chainId: 23,
    shortName: 'eladidt',
    chain: 'ETH',
    network: 'testnet',
    networkId: 23,
    nativeCurrency: { name: 'Elastos', symbol: 'tELA', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://elaeth.io/'
  },
  24484: {
    name: 'Webchain',
    chainId: 24484,
    shortName: 'web',
    chain: 'WEB',
    network: 'mainnet',
    networkId: 37129,
    nativeCurrency: { name: 'Webchain Ether', symbol: 'WEB', decimals: 18 },
    rpc: ['https://node1.webchain.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://webchain.network'
  },
  246: {
    name: 'Energy Web Chain',
    chainId: 246,
    shortName: 'ewt',
    chain: 'Energy Web Chain',
    network: 'mainnet',
    networkId: 246,
    nativeCurrency: { name: 'Energy Web Token', symbol: 'EWT', decimals: 18 },
    rpc: ['https://rpc.energyweb.org', 'wss://rpc.energyweb.org/ws'],
    faucets: ['https://faucet.carbonswap.exchange'],
    explorers: [],
    infoURL: 'https://energyweb.org'
  },
  246529: {
    name: 'ARTIS sigma1',
    chainId: 246529,
    shortName: 'ats',
    chain: 'ARTIS',
    network: 'sigma1',
    networkId: 246529,
    nativeCurrency: { name: 'ARTIS sigma1 Ether', symbol: 'ATS', decimals: 18 },
    rpc: ['https://rpc.sigma1.artis.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://artis.eco'
  },
  246785: {
    name: 'ARTIS Testnet tau1',
    chainId: 246785,
    shortName: 'atstau',
    chain: 'ARTIS',
    network: 'tau1',
    networkId: 246785,
    nativeCurrency: { name: 'ARTIS tau1 Ether', symbol: 'tATS', decimals: 18 },
    rpc: ['https://rpc.tau1.artis.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://artis.network'
  },
  24734: {
    name: 'MintMe.com Coin',
    chainId: 24734,
    shortName: 'mintme',
    chain: 'MINTME',
    network: 'mainnet',
    networkId: 37480,
    nativeCurrency: { name: 'MintMe.com Coin', symbol: 'MINTME', decimals: 18 },
    rpc: ['https://node1.mintme.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.mintme.com'
  },
  250: {
    name: 'Fantom Opera',
    chainId: 250,
    shortName: 'ftm',
    chain: 'FTM',
    network: 'mainnet',
    networkId: 250,
    nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
    rpc: ['https://rpcapi.fantom.network'],
    faucets: [],
    explorers: [
      {
        name: 'ftmscan',
        url: 'https://ftmscan.com',
        icon: 'ftmscan',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://fantom.foundation'
  },
  256: {
    name: 'Huobi ECO Chain Testnet',
    chainId: 256,
    shortName: 'hecot',
    chain: 'Heco',
    network: 'testnet',
    networkId: 256,
    nativeCurrency: {
      name: 'Huobi ECO Chain Test Native Token',
      symbol: 'htt',
      decimals: 18
    },
    rpc: [
      'https://http-testnet.hecochain.com',
      'wss://ws-testnet.hecochain.com'
    ],
    faucets: ['https://scan-testnet.hecochain.com/faucet'],
    explorers: [],
    infoURL: 'https://testnet.hecoinfo.com'
  },
  269: {
    name: 'High Performance Blockchain',
    chainId: 269,
    shortName: 'hpb',
    chain: 'HPB',
    network: 'mainnet',
    networkId: 100,
    nativeCurrency: {
      name: 'High Performance Blockchain Ether',
      symbol: 'HPB',
      decimals: 18
    },
    rpc: ['https://hpb.app'],
    faucets: [],
    explorers: [],
    infoURL: 'https://hpbscan.org/'
  },
  28945486: {
    name: 'Auxilium Network Mainnet',
    chainId: 28945486,
    shortName: 'auxi',
    chain: 'AUX',
    network: 'mainnet',
    networkId: 28945486,
    nativeCurrency: { name: 'Auxilium coin', symbol: 'AUX', decimals: 18 },
    rpc: ['https://rpc.auxilium.global'],
    faucets: [],
    explorers: [],
    infoURL: 'https://auxilium.global'
  },
  3: {
    name: 'Ethereum Testnet Ropsten',
    chainId: 3,
    shortName: 'rop',
    chain: 'ETH',
    network: 'ropsten',
    networkId: 3,
    nativeCurrency: { name: 'Ropsten Ether', symbol: 'ROP', decimals: 18 },
    rpc: [
      'https://ropsten.infura.io/v3/${INFURA_API_KEY}',
      'wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: ['https://faucet.ropsten.be?${ADDRESS}'],
    explorers: [],
    infoURL: 'https://github.com/ethereum/ropsten'
  },
  30: {
    name: 'RSK Mainnet',
    chainId: 30,
    shortName: 'rsk',
    chain: 'RSK',
    network: 'mainnet',
    networkId: 30,
    nativeCurrency: { name: 'RSK Mainnet Ether', symbol: 'RBTC', decimals: 18 },
    rpc: ['https://public-node.rsk.co', 'https://mycrypto.rsk.co'],
    faucets: [],
    explorers: [],
    infoURL: 'https://rsk.co'
  },
  31: {
    name: 'RSK Testnet',
    chainId: 31,
    shortName: 'trsk',
    chain: 'RSK',
    network: 'testnet',
    networkId: 31,
    nativeCurrency: {
      name: 'RSK Testnet Ether',
      symbol: 'tRBTC',
      decimals: 18
    },
    rpc: [
      'https://public-node.testnet.rsk.co',
      'https://mycrypto.testnet.rsk.co'
    ],
    faucets: ['https://faucet.testnet.rsk.co'],
    explorers: [],
    infoURL: 'https://rsk.co'
  },
  31102: {
    name: 'Ethersocial Network',
    chainId: 31102,
    shortName: 'esn',
    chain: 'ESN',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: {
      name: 'Ethersocial Network Ether',
      symbol: 'ESN',
      decimals: 18
    },
    rpc: ['https://api.esn.gonspool.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://ethersocial.org'
  },
  3125659152: {
    name: 'Pirl',
    chainId: 3125659152,
    shortName: 'pirl',
    chain: 'PIRL',
    network: 'mainnet',
    networkId: 3125659152,
    nativeCurrency: { name: 'Pirl Ether', symbol: 'PIRL', decimals: 18 },
    rpc: ['https://wallrpc.pirl.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://pirl.io'
  },
  321: {
    name: 'KuCoin Community Chain Mainnet',
    chainId: 321,
    shortName: 'kcs',
    chain: 'KCC',
    network: 'mainnet',
    networkId: 321,
    nativeCurrency: { name: 'KuCoin Token', symbol: 'KCS', decimals: 18 },
    rpc: [
      'https://rpc-mainnet.kcc.network',
      'wss://rpc-ws-mainnet.kcc.network'
    ],
    faucets: [],
    explorers: [
      {
        name: 'KCC Explorer',
        url: 'https://explorer.kcc.io/en',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://kcc.io'
  },
  322: {
    name: 'KuCoin Community Chain Testnet',
    chainId: 322,
    shortName: 'kcst',
    chain: 'KCC',
    network: 'testnet',
    networkId: 322,
    nativeCurrency: {
      name: 'KuCoin Testnet Token',
      symbol: 'tKCS',
      decimals: 18
    },
    rpc: ['https://rpc-testnet.kcc.network'],
    faucets: ['https://faucet-testnet.kcc.network'],
    explorers: [
      {
        name: 'kcc-scan',
        url: 'https://scan-testnet.kcc.network',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://scan-testnet.kcc.network'
  },
  32659: {
    name: 'Fusion Mainnet',
    chainId: 32659,
    shortName: 'fsn',
    chain: 'FSN',
    network: 'mainnet',
    networkId: 32659,
    nativeCurrency: { name: 'Fusion', symbol: 'FSN', decimals: 18 },
    rpc: ['https://mainnet.anyswap.exchange', 'https://fsn.dev/api'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.fusion.org/'
  },
  33: {
    name: 'GoodData Mainnet',
    chainId: 33,
    shortName: 'GooD',
    chain: 'GooD',
    network: 'mainnet',
    networkId: 33,
    nativeCurrency: {
      name: 'GoodData Mainnet Ether',
      symbol: 'GooD',
      decimals: 18
    },
    rpc: ['https://rpc.goodata.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.goodata.org'
  },
  35: {
    name: 'TBWG Chain',
    chainId: 35,
    shortName: 'tbwg',
    chain: 'TBWG',
    network: 'mainnet',
    networkId: 35,
    nativeCurrency: { name: 'TBWG Ether', symbol: 'TBG', decimals: 18 },
    rpc: ['https://rpc.tbwg.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://tbwg.io'
  },
  35855456: {
    name: 'Joys Digital Mainnet',
    chainId: 35855456,
    shortName: 'JOYS',
    chain: 'JOYS',
    network: 'mainnet',
    networkId: 35855456,
    nativeCurrency: { name: 'JOYS', symbol: 'JOYS', decimals: 18 },
    rpc: ['https://node.joys.digital'],
    faucets: [],
    explorers: [],
    infoURL: 'https://joys.digital'
  },
  38: {
    name: 'Valorbit',
    chainId: 38,
    shortName: 'val',
    chain: 'VAL',
    network: 'mainnet',
    networkId: 38,
    nativeCurrency: { name: 'Valorbit', symbol: 'VAL', decimals: 18 },
    rpc: ['https://rpc.valorbit.com/v2'],
    faucets: [],
    explorers: [],
    infoURL: 'https://valorbit.com'
  },
  385: {
    name: 'Lisinski',
    chainId: 385,
    shortName: 'lisinski',
    chain: 'CRO',
    network: 'mainnet',
    networkId: 385,
    nativeCurrency: {
      name: 'Lisinski Ether',
      symbol: 'LISINSKI',
      decimals: 18
    },
    rpc: ['https://rpc-bitfalls1.lisinski.online'],
    faucets: ['https://pipa.lisinski.online'],
    explorers: [],
    infoURL: 'https://lisinski.online'
  },
  39797: {
    name: 'Energi Mainnet',
    chainId: 39797,
    shortName: 'nrg',
    chain: 'NRG',
    network: 'mainnet',
    networkId: 39797,
    nativeCurrency: { name: 'Energi', symbol: 'NRG', decimals: 18 },
    rpc: ['https://nodeapi.gen3.energi.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.energi.world/'
  },
  4: {
    name: 'Ethereum Testnet Rinkeby',
    chainId: 4,
    shortName: 'rin',
    chain: 'ETH',
    network: 'rinkeby',
    networkId: 4,
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'RIN', decimals: 18 },
    rpc: [
      'https://rinkeby.infura.io/v3/${INFURA_API_KEY}',
      'wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: ['https://faucet.rinkeby.io'],
    explorers: [
      {
        name: 'etherscan-rinkeby',
        url: 'https://rinkeby.etherscan.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.rinkeby.io'
  },
  40: {
    name: 'Telos EVM Mainnet',
    chainId: 40,
    shortName: 'Telos EVM',
    chain: 'TLOS',
    network: 'mainnet',
    networkId: 40,
    nativeCurrency: { name: 'Telos', symbol: 'TLOS', decimals: 18 },
    rpc: ['https://mainnet.telos.net/evm'],
    faucets: [],
    explorers: [],
    infoURL: 'https://telos.net'
  },
  41: {
    name: 'Telos EVM Testnet',
    chainId: 41,
    shortName: 'Telos EVM Testnet',
    chain: 'TLOS',
    network: 'testnet',
    networkId: 41,
    nativeCurrency: { name: 'Telos', symbol: 'TLOS', decimals: 18 },
    rpc: ['https://testnet.telos.net/evm'],
    faucets: ['https://app.telos.net/testnet/developers'],
    explorers: [],
    infoURL: 'https://telos.net'
  },
  42: {
    name: 'Ethereum Testnet Kovan',
    chainId: 42,
    shortName: 'kov',
    chain: 'ETH',
    network: 'kovan',
    networkId: 42,
    nativeCurrency: { name: 'Kovan Ether', symbol: 'KOV', decimals: 18 },
    rpc: [
      'https://kovan.poa.network',
      'http://kovan.poa.network:8545',
      'https://kovan.infura.io/v3/${INFURA_API_KEY}',
      'wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}',
      'ws://kovan.poa.network:8546'
    ],
    faucets: [
      'https://faucet.kovan.network',
      'https://gitter.im/kovan-testnet/faucet'
    ],
    explorers: [],
    infoURL: 'https://kovan-testnet.github.io/website'
  },
  420: {
    name: 'Optimistic Ethereum Testnet Goerli',
    chainId: 420,
    shortName: 'ogor',
    chain: 'ETH',
    network: 'goerli',
    networkId: 420,
    nativeCurrency: { name: 'Görli Ether', symbol: 'GOR', decimals: 18 },
    rpc: ['https://goerli.optimism.io/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://optimism.io'
  },
  42069: {
    name: 'pegglecoin',
    chainId: 42069,
    shortName: 'PC',
    chain: '42069',
    network: 'mainnet',
    networkId: 42069,
    nativeCurrency: { name: 'pegglecoin', symbol: 'peggle', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://teampeggle.com'
  },
  42161: {
    name: 'Arbitrum One',
    chainId: 42161,
    shortName: 'arb1',
    chain: 'ETH',
    network: 'mainnet',
    networkId: 42161,
    nativeCurrency: {
      name: 'Ether',
      symbol: 'AETH',
      decimals: 18
    },
    rpc: [
      'https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}',
      'https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
      'https://arb1.arbitrum.io/rpc',
      'wss://arb1.arbitrum.io/ws'
    ],
    faucets: [],
    explorers: [
      {
        name: 'Arbiscan',
        url: 'https://arbiscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'Arbitrum Explorer',
        url: 'https://explorer.arbitrum.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://arbitrum.io'
  },
  421611: {
    name: 'Arbitrum Testnet Rinkeby',
    chainId: 421611,
    shortName: 'arb-rinkeby',
    chain: 'ETH',
    network: 'rinkeby',
    networkId: 421611,
    nativeCurrency: {
      name: 'Arbitrum Rinkeby Ether',
      symbol: 'ARETH',
      decimals: 18
    },
    rpc: ['https://rinkeby.arbitrum.io/rpc'],
    faucets: [],
    explorers: [],
    infoURL: 'https://arbitrum.io'
  },
  42220: {
    name: 'Celo Mainnet',
    chainId: 42220,
    shortName: 'CELO',
    chain: 'CELO',
    network: 'Mainnet',
    networkId: 42220,
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: ['https://forno.celo.org', 'wss://forno.celo.org/ws'],
    faucets: [],
    explorers: [],
    infoURL: 'https://docs.celo.org/'
  },
  43: {
    name: 'Darwinia Pangolin Testnet',
    chainId: 43,
    shortName: 'darwinia',
    chain: 'pangolin',
    network: 'free testnet',
    networkId: 43,
    nativeCurrency: { name: 'Pangolin RING', symbol: 'PRING', decimals: 9 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://darwinia.network/'
  },
  43110: {
    name: 'Athereum',
    chainId: 43110,
    shortName: 'avaeth',
    chain: 'ATH',
    network: 'athereum',
    networkId: 43110,
    nativeCurrency: { name: 'Athereum Ether', symbol: 'ATH', decimals: 18 },
    rpc: ['https://ava.network:21015/ext/evm/rpc'],
    faucets: ['http://athfaucet.ava.network//?address=${ADDRESS}'],
    explorers: [],
    infoURL: 'https://athereum.ava.network'
  },
  43113: {
    name: 'Avalanche Fuji Testnet',
    chainId: 43113,
    shortName: 'Fuji',
    chain: 'AVAX',
    network: 'testnet',
    networkId: 1,
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpc: ['https://api.avax-test.network/ext/bc/C/rpc'],
    faucets: ['https://faucet.avax-test.network/'],
    explorers: [],
    infoURL: 'https://cchain.explorer.avax-test.network'
  },
  43114: {
    name: 'Avalanche Mainnet',
    chainId: 43114,
    shortName: 'Avalanche',
    chain: 'AVAX',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    rpc: ['https://api.avax.network/ext/bc/C/rpc'],
    faucets: [],
    explorers: [],
    infoURL: 'https://cchain.explorer.avax.network/'
  },
  44: {
    name: 'Darwinia Crab Network',
    chainId: 44,
    shortName: 'crab',
    chain: 'crab',
    network: 'Crab network',
    networkId: 44,
    nativeCurrency: { name: 'Crab Token', symbol: 'CRING', decimals: 9 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://crab.network/'
  },
  44787: {
    name: 'Celo Alfajores Testnet',
    chainId: 44787,
    shortName: 'ALFA',
    chain: 'CELO',
    network: 'Alfajores',
    networkId: 44787,
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: [
      'https://alfajores-forno.celo-testnet.org',
      'wss://alfajores-forno.celo-testnet.org/ws'
    ],
    faucets: [
      'https://celo.org/developers/faucet',
      'https://cauldron.pretoriaresearchlab.io/alfajores-faucet'
    ],
    explorers: [],
    infoURL: 'https://docs.celo.org/'
  },
  4689: {
    name: 'IoTeX Network Mainnet',
    chainId: 4689,
    shortName: 'iotex-mainnet',
    chain: 'iotex.io',
    network: 'mainnet',
    networkId: 4689,
    nativeCurrency: { name: 'IoTeX', symbol: 'IOTX', decimals: 18 },
    rpc: ['https://babel-api.mainnet.iotex.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://iotex.io'
  },
  4690: {
    name: 'IoTeX Network Testnet',
    chainId: 4690,
    shortName: 'iotex-testnet',
    chain: 'iotex.io',
    network: 'testnet',
    networkId: 4690,
    nativeCurrency: { name: 'IoTeX', symbol: 'IOTX', decimals: 18 },
    rpc: ['https://babel-api.testnet.iotex.io'],
    faucets: ['https://faucet.iotex.io/'],
    explorers: [],
    infoURL: 'https://iotex.io'
  },
  49797: {
    name: 'Energi Testnet',
    chainId: 49797,
    shortName: 'tnrg',
    chain: 'NRG',
    network: 'testnet',
    networkId: 49797,
    nativeCurrency: { name: 'Energi', symbol: 'tNRG', decimals: 18 },
    rpc: ['https://nodeapi.test3.energi.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.energi.world/'
  },
  499: {
    name: 'Rupaya',
    chainId: 499,
    shortName: 'rupx',
    chain: 'RUPX',
    network: 'mainnet',
    networkId: 499,
    nativeCurrency: { name: 'Rupaya', symbol: 'RUPX', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.rupx.io'
  },
  5: {
    name: 'Ethereum Testnet Görli',
    chainId: 5,
    shortName: 'gor',
    chain: 'ETH',
    network: 'goerli',
    networkId: 5,
    nativeCurrency: { name: 'Görli Ether', symbol: 'GOR', decimals: 18 },
    rpc: [
      'https://rpc.goerli.mudit.blog/',
      'https://rpc.slock.it/goerli ',
      'https://goerli.prylabs.net/'
    ],
    faucets: [
      'https://goerli-faucet.slock.it/?address=${ADDRESS}',
      'https://faucet.goerli.mudit.blog'
    ],
    explorers: [],
    infoURL: 'https://goerli.net/#about'
  },
  50: {
    name: 'XinFin Network Mainnet',
    chainId: 50,
    shortName: 'xdc',
    chain: 'XDC',
    network: 'mainnet',
    networkId: 50,
    nativeCurrency: { name: 'XinFin', symbol: 'XDC', decimals: 18 },
    rpc: ['https://rpc.xinfin.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://xinfin.org'
  },
  51: {
    name: 'XinFin Apothem Testnet',
    chainId: 51,
    shortName: 'TXDC',
    chain: 'TXDC',
    network: 'testnet',
    networkId: 51,
    nativeCurrency: { name: 'XinFinTest', symbol: 'TXDC', decimals: 18 },
    rpc: ['https://rpc.apothem.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://xinfin.org'
  },
  5197: {
    name: 'EraSwap Mainnet',
    chainId: 5197,
    shortName: 'es',
    chain: 'ESN',
    network: 'mainnet',
    networkId: 5197,
    nativeCurrency: { name: 'EraSwap', symbol: 'ES', decimals: 18 },
    rpc: [
      'https://mainnet.eraswap.network',
      'https://rpc-mumbai.mainnet.eraswap.network'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://eraswap.info/'
  },
  52: {
    name: 'CoinEx Smart Chain Mainnet',
    chainId: 52,
    shortName: 'cet',
    chain: 'CSC',
    network: 'mainnet',
    networkId: 52,
    nativeCurrency: {
      name: 'CoinEx Chain Native Token',
      symbol: 'cet',
      decimals: 18
    },
    rpc: ['https://rpc-mainnet.coinex.net'],
    faucets: [],
    explorers: [],
    infoURL: 'http://www.coinex.org/'
  },
  53: {
    name: 'CoinEx Smart Chain Testnet',
    chainId: 53,
    shortName: 'tcet',
    chain: 'CSC',
    network: 'testnet',
    networkId: 53,
    nativeCurrency: {
      name: 'CoinEx Chain Test Native Token',
      symbol: 'cett',
      decimals: 18
    },
    rpc: ['https://rpc-testnet.coinex.net'],
    faucets: [],
    explorers: [],
    infoURL: 'http://www.coinex.org/'
  },
  558: {
    name: 'Tao Network',
    chainId: 558,
    shortName: 'tao',
    chain: 'TAO',
    network: 'core',
    networkId: 558,
    nativeCurrency: { name: 'Tao', symbol: 'TAO', decimals: 18 },
    rpc: [
      'https://rpc.testnet.tao.network',
      'http://rpc.testnet.tao.network:8545',
      'https://rpc.tao.network',
      'wss://rpc.tao.network'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://tao.network'
  },
  56: {
    name: 'Binance Smart Chain Mainnet',
    chainId: 56,
    shortName: 'bnb',
    chain: 'BSC',
    network: 'mainnet',
    networkId: 56,
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18
    },
    rpc: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.binance.org',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed4.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'wss://bsc-ws-node.nariox.org'
    ],
    faucets: [],
    explorers: [
      {
        name: 'bscscan',
        url: 'https://bscscan.com',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.binance.org'
  },
  5869: {
    name: 'Wegochain Rubidium Mainnet',
    chainId: 5869,
    shortName: 'rbd',
    chain: 'RBD',
    network: 'mainnet',
    networkId: 5869,
    nativeCurrency: { name: 'Rubid', symbol: 'RBD', decimals: 18 },
    rpc: ['https://proxy.wegochain.io', 'http://wallet.wegochain.io:7764'],
    faucets: [],
    explorers: [],
    infoURL: 'http://wegochain.io'
  },
  595: {
    name: 'Acala Mandala Testnet',
    chainId: 595,
    shortName: 'maca',
    chain: 'mACA',
    network: 'testnet',
    networkId: 595,
    nativeCurrency: {
      name: 'Acala Mandala Token',
      symbol: 'mACA',
      decimals: 18
    },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://acala.network'
  },
  6: {
    name: 'Ethereum Classic Testnet Kotti',
    chainId: 6,
    shortName: 'kot',
    chain: 'ETC',
    network: 'kotti',
    networkId: 6,
    nativeCurrency: { name: 'Kotti Ether', symbol: 'KOT', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://explorer.jade.builders/?network=kotti'
  },
  60: {
    name: 'GoChain',
    chainId: 60,
    shortName: 'go',
    chain: 'GO',
    network: 'mainnet',
    networkId: 60,
    nativeCurrency: { name: 'GoChain Ether', symbol: 'GO', decimals: 18 },
    rpc: ['https://rpc.gochain.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://gochain.io'
  },
  61: {
    name: 'Ethereum Classic Mainnet',
    chainId: 61,
    shortName: 'etc',
    chain: 'ETC',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: {
      name: 'Ethereum Classic Ether',
      symbol: 'ETC',
      decimals: 18
    },
    rpc: ['https://ethereumclassic.network'],
    faucets: [],
    explorers: [],
    infoURL: 'https://ethereumclassic.org'
  },
  61717561: {
    name: 'Aquachain',
    chainId: 61717561,
    shortName: 'aqua',
    chain: 'AQUA',
    network: 'mainnet',
    networkId: 61717561,
    nativeCurrency: { name: 'Aquachain Ether', symbol: 'AQUA', decimals: 18 },
    rpc: ['https://c.onical.org', 'https://tx.aquacha.in/api'],
    faucets: ['https://aquacha.in/faucet'],
    explorers: [],
    infoURL: 'https://aquachain.github.io'
  },
  62: {
    name: 'Ethereum Classic Testnet Morden',
    chainId: 62,
    shortName: 'tetc',
    chain: 'ETC',
    network: 'testnet',
    networkId: 2,
    nativeCurrency: {
      name: 'Ethereum Classic Testnet Ether',
      symbol: 'TETC',
      decimals: 18
    },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://ethereumclassic.org'
  },
  62320: {
    name: 'Celo Baklava Testnet',
    chainId: 62320,
    shortName: 'BKLV',
    chain: 'CELO',
    network: 'Baklava',
    networkId: 62320,
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: ['https://baklava-forno.celo-testnet.org'],
    faucets: [
      'https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform',
      'https://cauldron.pretoriaresearchlab.io/baklava-faucet'
    ],
    explorers: [],
    infoURL: 'https://docs.celo.org/'
  },
  63: {
    name: 'Ethereum Classic Testnet Mordor',
    chainId: 63,
    shortName: 'metc',
    chain: 'ETC',
    network: 'testnet',
    networkId: 7,
    nativeCurrency: {
      name: 'Mordor Classic Testnet Ether',
      symbol: 'METC',
      decimals: 18
    },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://github.com/eth-classic/mordor/'
  },
  64: {
    name: 'Ellaism',
    chainId: 64,
    shortName: 'ella',
    chain: 'ELLA',
    network: 'mainnet',
    networkId: 64,
    nativeCurrency: { name: 'Ellaism Ether', symbol: 'ELLA', decimals: 18 },
    rpc: ['https://jsonrpc.ellaism.org'],
    faucets: [],
    explorers: [],
    infoURL: 'https://ellaism.org'
  },
  65: {
    name: 'OKExChain Testnet',
    chainId: 65,
    shortName: 'tokt',
    chain: 'okexchain',
    network: 'testnet',
    networkId: 65,
    nativeCurrency: {
      name: 'OKExChain Global Utility Token in testnet',
      symbol: 'OKT',
      decimals: 18
    },
    rpc: ['https://exchaintestrpc.okex.org'],
    faucets: ['https://www.okex.com/drawdex'],
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/okexchain-test',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.okex.com/okexchain'
  },
  66: {
    name: 'OKExChain Mainnet',
    chainId: 66,
    shortName: 'okt',
    chain: 'okexchain',
    network: 'mainnet',
    networkId: 66,
    nativeCurrency: {
      name: 'OKExChain Global Utility Token',
      symbol: 'OKT',
      decimals: 18
    },
    rpc: ['https://exchainrpc.okex.org'],
    faucets: [],
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/okexchain',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.okex.com/okexchain'
  },
  67: {
    name: 'DBChain Testnet',
    chainId: 67,
    shortName: 'dbm',
    chain: 'DBM',
    network: 'testnet',
    networkId: 67,
    nativeCurrency: { name: 'DBChain Testnet', symbol: 'DBM', decimals: 18 },
    rpc: ['http://test-rpc.dbmbp.com'],
    faucets: [],
    explorers: [],
    infoURL: 'http://test.dbmbp.com'
  },
  68: {
    name: 'SoterOne Mainnet',
    chainId: 68,
    shortName: 'SO1',
    chain: 'SOTER',
    network: 'mainnet',
    networkId: 68,
    nativeCurrency: {
      name: 'SoterOne Mainnet Ether',
      symbol: 'SOTER',
      decimals: 18
    },
    rpc: ['https://rpc.soter.one'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.soterone.com'
  },
  686: {
    name: 'Karura Network',
    chainId: 686,
    shortName: 'kar',
    chain: 'KAR',
    network: 'mainnet',
    networkId: 686,
    nativeCurrency: { name: 'Karura Token', symbol: 'KAR', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://karura.network'
  },
  69: {
    name: 'Optimistic Ethereum Testnet Kovan',
    chainId: 69,
    shortName: 'okov',
    chain: 'ETH',
    network: 'kovan',
    networkId: 69,
    nativeCurrency: { name: 'Kovan Ether', symbol: 'KOR', decimals: 18 },
    rpc: ['https://kovan.optimism.io/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://optimism.io'
  },
  7: {
    name: 'ThaiChain',
    chainId: 7,
    shortName: 'tch',
    chain: 'TCH',
    network: 'mainnet',
    networkId: 7,
    nativeCurrency: { name: 'ThaiChain Ether', symbol: 'TCH', decimals: 18 },
    rpc: ['https://rpc.dome.cloud'],
    faucets: [],
    explorers: [],
    infoURL: 'https://thaichain.io'
  },
  721: {
    name: 'Factory 127 Testnet',
    chainId: 721,
    shortName: 'tfeth',
    chain: 'FETH',
    network: 'factory127 testnet',
    networkId: 721,
    nativeCurrency: { name: 'Factory 127 Token', symbol: 'FETH', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.factory127.com'
  },
  73799: {
    name: 'Energy Web Volta Testnet',
    chainId: 73799,
    shortName: 'vt',
    chain: 'Volta',
    network: 'testnet',
    networkId: 73799,
    nativeCurrency: { name: 'Volta Token', symbol: 'VT', decimals: 18 },
    rpc: [
      'https://volta-rpc.energyweb.org',
      'wss://volta-rpc.energyweb.org/ws'
    ],
    faucets: ['https://voltafaucet.energyweb.org'],
    explorers: [],
    infoURL: 'https://energyweb.org'
  },
  76: {
    name: 'Mix',
    chainId: 76,
    shortName: 'mix',
    chain: 'MIX',
    network: 'mainnet',
    networkId: 76,
    nativeCurrency: { name: 'Mix Ether', symbol: 'MIX', decimals: 18 },
    rpc: ['https://rpc2.mix-blockchain.org:8647'],
    faucets: [],
    explorers: [],
    infoURL: 'https://mix-blockchain.org'
  },
  77: {
    name: 'POA Network Sokol',
    chainId: 77,
    shortName: 'poa',
    chain: 'POA',
    network: 'sokol',
    networkId: 77,
    nativeCurrency: { name: 'POA Sokol Ether', symbol: 'POA', decimals: 18 },
    rpc: [
      'https://sokol.poa.network',
      'wss://sokol.poa.network/wss',
      'ws://sokol.poa.network:8546'
    ],
    faucets: ['https://faucet-sokol.herokuapp.com'],
    explorers: [],
    infoURL: 'https://poa.network'
  },
  7762959: {
    name: 'Musicoin',
    chainId: 7762959,
    shortName: 'music',
    chain: 'MUSIC',
    network: 'mainnet',
    networkId: 7762959,
    nativeCurrency: { name: 'Musicoin', symbol: 'MUSIC', decimals: 18 },
    rpc: ['https://mewapi.musicoin.tw'],
    faucets: [],
    explorers: [],
    infoURL: 'https://musicoin.tw'
  },
  777: {
    name: 'Ethermint Testnet',
    chainId: 777,
    shortName: 'emint',
    chain: 'ETHERMINT',
    network: 'testnet',
    networkId: 777,
    nativeCurrency: { name: 'Photon', symbol: 'Photon', decimals: 18 },
    rpc: ['http://54.210.246.165:8545'],
    faucets: [],
    explorers: [],
    infoURL: 'https://docs.ethermint.zone'
  },
  78: {
    name: 'PrimusChain mainnet',
    chainId: 78,
    shortName: 'primuschain',
    chain: 'PC',
    network: 'mainnet',
    networkId: 78,
    nativeCurrency: { name: 'Primus Ether', symbol: 'PETH', decimals: 18 },
    rpc: ['https://ethnode.primusmoney.com/mainnet'],
    faucets: [],
    explorers: [],
    infoURL: 'https://primusmoney.com'
  },
  78110: {
    name: 'Firenze test network',
    chainId: 78110,
    shortName: 'firenze',
    chain: 'ETH',
    network: 'testnet',
    networkId: 78110,
    nativeCurrency: { name: 'Firenze Ether', symbol: 'FIN', decimals: 18 },
    rpc: ['https://ethnode.primusmoney.com/firenze'],
    faucets: [],
    explorers: [],
    infoURL: 'https://primusmoney.com'
  },
  787: {
    name: 'Acala Network',
    chainId: 787,
    shortName: 'aca',
    chain: 'ACA',
    network: 'mainnet',
    networkId: 787,
    nativeCurrency: { name: 'Acala Token', symbol: 'ACA', decimals: 18 },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://acala.network'
  },
  8: {
    name: 'Ubiq Network Mainnet',
    chainId: 8,
    shortName: 'ubq',
    chain: 'UBQ',
    network: 'mainnet',
    networkId: 88,
    nativeCurrency: { name: 'Ubiq Ether', symbol: 'UBQ', decimals: 18 },
    rpc: ['https://rpc.octano.dev', 'https://pyrus2.ubiqscan.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://ubiqsmart.com'
  },
  80: {
    name: 'GeneChain',
    chainId: 80,
    shortName: 'GeneChain',
    chain: 'GeneChain',
    network: 'mainnet',
    networkId: 80,
    nativeCurrency: { name: 'RNA', symbol: 'RNA', decimals: 18 },
    rpc: ['https://rpc.genechain.io'],
    faucets: [],
    explorers: [
      {
        name: 'GeneChain Scan',
        url: 'https://scan.genechain.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://scan.genechain.io/'
  },
  80001: {
    name: 'Matic Testnet Mumbai',
    chainId: 80001,
    shortName: 'maticmum',
    chain: 'Matic',
    network: 'testnet',
    networkId: 80001,
    nativeCurrency: { name: 'Matic', symbol: 'tMATIC', decimals: 18 },
    rpc: ['https://rpc-mumbai.matic.today', 'wss://ws-mumbai.matic.today'],
    faucets: ['https://faucet.matic.network/'],
    explorers: [],
    infoURL: 'https://matic.network/'
  },
  8029: {
    name: 'MDGL Testnet',
    chainId: 8029,
    shortName: 'mdgl',
    chain: 'MDGL',
    network: 'testnet',
    networkId: 8029,
    nativeCurrency: { name: 'MDGL Token', symbol: 'MDGLT', decimals: 18 },
    rpc: ['https://testnet.mdgl.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://mdgl.io'
  },
  803: {
    name: 'Haic',
    chainId: 803,
    shortName: 'haic',
    chain: 'Haic',
    network: 'mainnet',
    networkId: 803,
    nativeCurrency: { name: 'Haicoin', symbol: 'HAIC', decimals: 18 },
    rpc: ['https://orig.haichain.io/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.haichain.io/'
  },
  8080: {
    name: 'GeneChain Adenine Testnet',
    chainId: 8080,
    shortName: 'GeneChainAdn',
    chain: 'GeneChain',
    network: 'adenine',
    networkId: 8080,
    nativeCurrency: { name: 'Testnet RNA', symbol: 'tRNA', decimals: 18 },
    rpc: ['https://rpc-testnet.genechain.io'],
    faucets: ['https://faucet.genechain.io'],
    explorers: [
      {
        name: 'GeneChain Adenine Testnet Scan',
        url: 'https://scan-testnet.genechain.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://scan-testnet.genechain.io/'
  },
  82: {
    name: 'Meter Mainnet',
    chainId: 82,
    shortName: 'Meter',
    chain: 'METER',
    network: 'mainnet',
    networkId: 82,
    nativeCurrency: { name: 'Meter', symbol: 'MTR', decimals: 18 },
    rpc: ['https://rpc.meter.io'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.meter.io'
  },
  820: {
    name: 'Callisto Mainnet',
    chainId: 820,
    shortName: 'clo',
    chain: 'CLO',
    network: 'mainnet',
    networkId: 1,
    nativeCurrency: {
      name: 'Callisto Mainnet Ether',
      symbol: 'CLO',
      decimals: 18
    },
    rpc: ['https://clo-geth.0xinfra.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://callisto.network'
  },
  821: {
    name: 'Callisto Testnet',
    chainId: 821,
    shortName: 'tclo',
    chain: 'CLO',
    network: 'testnet',
    networkId: 2,
    nativeCurrency: {
      name: 'Callisto Testnet Ether',
      symbol: 'TCLO',
      decimals: 18
    },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://callisto.network'
  },
  8217: {
    name: 'Klaytn Mainnet Cypress',
    chainId: 8217,
    shortName: 'Cypress',
    chain: 'KLAY',
    network: 'cypress',
    networkId: 8217,
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    rpc: ['https://node-api.klaytnapi.com/v1/klaytn'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.klaytn.com/'
  },
  8285: {
    name: 'KorthoTest',
    chainId: 8285,
    shortName: 'Kortho',
    chain: 'Kortho',
    network: 'Test',
    networkId: 8285,
    nativeCurrency: { name: 'Kortho Test', symbol: 'KTO', decimals: 11 },
    rpc: ['https://www.krotho-test.net'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.kortho.io/'
  },
  85: {
    name: 'GateChain Testnet',
    chainId: 85,
    shortName: 'GTC-T',
    chain: 'gatechain',
    network: 'testnet',
    networkId: 85,
    nativeCurrency: { name: 'GateToken', symbol: 'GT', decimals: 18 },
    rpc: ['https://testnet.gatenode.cc'],
    faucets: ['https://www.gatescan.org/testnet/faucet'],
    explorers: [
      {
        name: 'GateScan',
        url: 'https://www.gatescan.org/testnet',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.gatechain.io'
  },
  86: {
    name: 'GateChain Mainnet',
    chainId: 86,
    shortName: 'GTC',
    chain: 'gatechain',
    network: 'mainnet',
    networkId: 86,
    nativeCurrency: { name: 'GateToken', symbol: 'GT', decimals: 18 },
    rpc: ['https://evm.gatenode.cc'],
    faucets: ['https://www.gatescan.org/faucet'],
    explorers: [
      {
        name: 'GateScan',
        url: 'https://www.gatescan.org',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.gatechain.io'
  },
  8724: {
    name: 'TOOL Global Testnet',
    chainId: 8724,
    shortName: 'olo',
    chain: 'OLO',
    network: 'testnet',
    networkId: 8724,
    nativeCurrency: { name: 'TOOL Global', symbol: 'OLO', decimals: 18 },
    rpc: ['https://testnet-web3.wolot.io'],
    faucets: ['https://testnet-explorer.wolot.io'],
    explorers: [],
    infoURL: 'https://testnet-explorer.wolot.io'
  },
  88: {
    name: 'TomoChain',
    chainId: 88,
    shortName: 'tomo',
    chain: 'TOMO',
    network: 'mainnet',
    networkId: 88,
    nativeCurrency: { name: 'TomoChain Ether', symbol: 'TOMO', decimals: 18 },
    rpc: ['https://rpc.tomochain.com'],
    faucets: [],
    explorers: [],
    infoURL: 'https://tomocoin.io'
  },
  888: {
    name: 'Wanchain',
    chainId: 888,
    shortName: 'wan',
    chain: 'WAN',
    network: 'mainnet',
    networkId: 888,
    nativeCurrency: { name: 'Wancoin', symbol: 'WAN', decimals: 18 },
    rpc: ['https://gwan-ssl.wandevs.org:56891/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://www.wanscan.org'
  },
  8995: {
    name: 'bloxberg',
    chainId: 8995,
    shortName: 'berg',
    chain: 'bloxberg',
    network: 'mainnet',
    networkId: 8995,
    nativeCurrency: { name: 'BERG', symbol: 'U+25B3', decimals: 18 },
    rpc: ['https://core.bloxberg.org'],
    faucets: ['https://faucet.bloxberg.org/'],
    explorers: [],
    infoURL: 'https://bloxberg.org'
  },
  9: {
    name: 'Ubiq Network Testnet',
    chainId: 9,
    shortName: 'tubq',
    chain: 'UBQ',
    network: 'mainnet',
    networkId: 2,
    nativeCurrency: {
      name: 'Ubiq Testnet Ether',
      symbol: 'TUBQ',
      decimals: 18
    },
    rpc: [],
    faucets: [],
    explorers: [],
    infoURL: 'https://ethersocial.org'
  },
  95: {
    name: 'CryptoKylin Testnet',
    chainId: 95,
    shortName: 'Kylin Testnet',
    chain: 'EOS',
    network: 'testnet',
    networkId: 95,
    nativeCurrency: { name: 'EOS', symbol: 'EOS', decimals: 18 },
    rpc: ['https://kylin.eosargentina.io'],
    faucets: [],
    explorers: [
      {
        name: 'eosq',
        url: 'https://kylin.eosargentina.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.cryptokylin.io/'
  },
  97: {
    name: 'Binance Smart Chain Testnet',
    chainId: 97,
    shortName: 'bnbt',
    chain: 'BSC',
    network: 'Chapel',
    networkId: 97,
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'tBNB',
      decimals: 18
    },
    rpc: [
      'https://data-seed-prebsc-1-s1.binance.org:8545',
      'https://data-seed-prebsc-2-s1.binance.org:8545',
      'https://data-seed-prebsc-1-s2.binance.org:8545',
      'https://data-seed-prebsc-2-s2.binance.org:8545',
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      'https://data-seed-prebsc-2-s3.binance.org:8545'
    ],
    faucets: ['https://testnet.binance.org/faucet-smart'],
    explorers: [
      {
        name: 'bscscan-testnet',
        url: 'https://testnet.bscscan.com',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://testnet.binance.org/'
  },
  977: {
    name: 'Nepal Blockchain Network',
    chainId: 977,
    shortName: 'yeti',
    chain: 'YETI',
    network: 'mainnet',
    networkId: 977,
    nativeCurrency: {
      name: 'Nepal Blockchain Network Ether',
      symbol: 'YETI',
      decimals: 18
    },
    rpc: [
      'https://api.nepalblockchain.dev',
      'https://api.nepalblockchain.network'
    ],
    faucets: ['https://faucet.nepalblockchain.network'],
    explorers: [],
    infoURL: 'https://nepalblockchain.network'
  },
  99: {
    name: 'POA Network Core',
    chainId: 99,
    shortName: 'skl',
    chain: 'POA',
    network: 'core',
    networkId: 99,
    nativeCurrency: {
      name: 'POA Network Core Ether',
      symbol: 'SKL',
      decimals: 18
    },
    rpc: [
      'https://core.poanetwork.dev',
      'http://core.poanetwork.dev:8545',
      'https://core.poa.network',
      'ws://core.poanetwork.dev:8546'
    ],
    faucets: [],
    explorers: [],
    infoURL: 'https://poa.network'
  },
  99415706: {
    name: 'Joys Digital TestNet',
    chainId: 99415706,
    shortName: 'TOYS',
    chain: 'TOYS',
    network: 'testnet',
    networkId: 99415706,
    nativeCurrency: { name: 'TOYS', symbol: 'TOYS', decimals: 18 },
    rpc: ['https://toys.joys.cash/'],
    faucets: ['https://faucet.joys.digital/'],
    explorers: [],
    infoURL: 'https://joys.digital'
  },
  999: {
    name: 'Wanchain Testnet',
    chainId: 999,
    shortName: 'twan',
    chain: 'WAN',
    network: 'testnet',
    networkId: 999,
    nativeCurrency: { name: 'Wancoin', symbol: 'WAN', decimals: 18 },
    rpc: ['https://gwan-ssl.wandevs.org:46891/'],
    faucets: [],
    explorers: [],
    infoURL: 'https://testnet.wanscan.org'
  }
}
