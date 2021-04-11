const { getAddress } = require('@harmony-js/crypto')
var HarmonyERC20 = artifacts.require('HarmonyERC20')

// mint account address
// PRIVATE_KEY='01F903CE0C960FF3A9E68E80FF5FFC344358D80CE1C221C3F9711AF07F83A3BD'
// one18t4yj4fuutj83uwqckkvxp9gfa0568uc48ggj7
const myAddress = '0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98'

// test account address, keys under
// one1eryvceds3v47qvn72a2jyj79x3fey3h3v4wcmc
const testAccount = '0xc8c8cc65b08b2be0327e5755224bc534539246f1'
const testAccOneAddr = getAddress(testAccount).bech32

const transferAmount = '200000000000000000000'

module.exports = function () {
  async function getHarmonyERC20Information () {
    let instance = await HarmonyERC20.deployed()
    let name = await instance.name()
    let total = await instance.totalSupply()
    let decimals = await instance.decimals()
    let mybalance = await instance.balanceOf(myAddress)
    let testAccBalance = await instance.balanceOf(testAccount)

    console.log('HarmonyERC20 is deployed at address ' + instance.address)
    console.log('Harmony ERC20 Information: Name    : ' + name)
    console.log('Harmony ERC20 Information: Decimals: ' + decimals)
    console.log('Harmony ERC20 Information: Total   : ' + total.toString())
    console.log('my address : ' + myAddress)
    console.log('test account address : ' + testAccount)
    console.log('my minted    H2O balance is: ' + mybalance.toString())
    console.log('test account H2O balance is: ' + testAccBalance.toString())

    const ret = await instance.transfer(testAccount, transferAmount)
    console.log('transfer result', ret)

    testAccBalance = await instance.balanceOf(testAccount)

    console.log('my new       H2O balance is: ' + mybalance.toString())
    console.log('test account H2O balance is: ' + testAccBalance.toString())

    process.exit(0)
  }
  getHarmonyERC20Information()
}
