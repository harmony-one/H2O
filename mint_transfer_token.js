var HarmonyERC20 = artifacts.require('HarmonyERC20')

const myAddress = '0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98'
const testAccount = '0x7c41e0668b551f4f902cfaec05b5bdca68b124ce'

const transferAmount = 2000000

module.exports = function () {
  async function getHarmonyERC20Information () {
    let instance = await HarmonyERC20.deployed()
    let name = await instance.name()
    let total = await instance.totalSupply()
    let decimals = await instance.decimals()
    let mybalance = await instance.balanceOf(myAddress)
    console.log('Transferring... Waiting for confirmation')
    await instance.transfer(testAccount, transferAmount)
    let testAccBalance = await instance.balanceOf(testAccount)
    console.log('HarmonyERC20 is deployed at address ' + instance.address)
    console.log('Harmony ERC20 Information: Name    : ' + name)
    console.log('Harmony ERC20 Information: Decimals: ' + decimals)
    console.log('Harmony ERC20 Information: Total   : ' + total.toString())
    console.log('my address : ' + myAddress)
    console.log('test account address : ' + testAccount)
    console.log('my minted    H2O balance is: ' + mybalance.toString())
    console.log('test account H2O balance is: ' + testAccBalance.toString())
    console.log('\ntransfered ' + transferAmount.toString() + ' from my address (minter) to test account')
  }
  getHarmonyERC20Information()
}
