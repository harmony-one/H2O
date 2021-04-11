require('dotenv').config()
const { TruffleProvider } = require('@harmony-js/core')
const localUrl = process.env.LOCAL_URL
const localPrivateKey = process.env.LOCAL_PRIVATE_KEY
const mnemonic = process.env.MNEMONIC
const privateKey = process.env.PRIVATE_KEY
const url = process.env.URL

const mainMnemonic = process.env.MAIN_MNEMONIC
const mainPrivateKey = process.env.MAIN_PRIVATE_KEY
const mainUrl = process.env.MAIN_URL

const gasLimit = process.env.GAS_LIMIT
const gasPrice = process.env.GAS_PRICE

module.exports = {
  networks: {
    local: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
          localUrl,
          {},
          { shardID: 0, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice },
        )
        const newAcc = truffleProvider.addByPrivateKey(localPrivateKey)
        truffleProvider.setSigner(newAcc)
        return truffleProvider
      },
    },
    testnet: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
          url,
          { memonic: mnemonic },
          { shardID: 0, chainId: 2 },
          { gasLimit: gasLimit, gasPrice: gasPrice },
        )
        const newAcc = truffleProvider.addByPrivateKey(privateKey)
        truffleProvider.setSigner(newAcc)
        return truffleProvider
      },
    },
    mainnet: {
      network_id: '2', // Any network (default: none)
      provider: () => {
        const truffleProvider = new TruffleProvider(
          mainUrl,
          { memonic: mainMnemonic },
          { shardID: 0, chainId: 2 },
          { gasLimit: 672190, gasPrice: 1 },
        )
        const newAcc = truffleProvider.addByPrivateKey(mainPrivateKey)
        truffleProvider.setSigner(newAcc)
        return truffleProvider
      },
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: '^0.8.0'
    }
  }
}
