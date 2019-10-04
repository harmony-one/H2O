# H2O
Harmony ERC20

## Overview
This sample project can be used to deploy an ERC20 token on Harmony's Testnet

## Pre-requisites
Please read the guideline for [Smart Contract Development using Truffle](https://app.gitbook.com/@harmony-one/s/docs-internal/v/v1.1.2/developers-1/which-one-are-you/smart-contract-devel/smart-contract-development-using-truffle)

## Install

```bash
#install truffle
$npm install -g truffle

#clone this project
$git clone https://github.com/harmony-one/H2O.git
$cd H2O

#install modules
$npm install
```

## Compile smart contract
```bash
$truffle compile
```

## Deploy smart contract to Harmony's testnet 
```bash
$truffle migrate --network testnet --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'testnet-fork'
> Network id:      2
> Block gas limit: 0x66916c


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        236254
   > block timestamp:     1570227191
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             923.003096645399407586
   > gas used:            246393
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000492786 ETH

   -------------------------------------
   > Total cost:         0.000492786 ETH


2_deploy_HarmonyERC20.js
========================

   Replacing 'HarmonyERC20'
   ------------------------
   > block number:        236256
   > block timestamp:     1570227198
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             923.000266111399407586
   > gas used:            1388244
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.002776488 ETH

   -------------------------------------
   > Total cost:         0.002776488 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.003269274 ETH





Starting migrations...
======================
> Network name:    'testnet'
> Network id:      2
> Block gas limit: 0x66916c


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x3be646bab73e1b6725f4e78a379db2c4227353d22732b411f43bce64312fd2ea
   > Blocks: 0            Seconds: 4
   > contract address:    0x7b5B72fD8A1A4B923Fb12fF1f50b5C84F920278d
   > block number:        236255
   > block timestamp:     1570227203
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             923.003328038399407586
   > gas used:            261393
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.000261393 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.000261393 ETH


2_deploy_HarmonyERC20.js
========================

   Replacing 'HarmonyERC20'
   ------------------------
   > transaction hash:    0xe4e7d027b24e328e5b79e3d026eb48a71c971fa112b6c74bef70e776128afa92
   > Blocks: 0            Seconds: 4
   > contract address:    0xf2c3b75dAB0e45652Bf0f9BD9e08d48b03c3926E
   > block number:        236257
   > block timestamp:     1570227219
   > account:             0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98
   > balance:             923.001792771399407586
   > gas used:            1493244
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.001493244 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.001493244 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.001754637 ETH



(base) CBA-219302-MBP:H2O Xuan$ 

```

## List the smart contract on testnet

```bash
$truffle networks

Network: development (id: 2)
  No contracts deployed.

Network: testnet (id: 2)
  HarmonyERC20: 0xf2c3b75dAB0e45652Bf0f9BD9e08d48b03c3926E
  Migrations: 0x7b5B72fD8A1A4B923Fb12fF1f50b5C84F920278d
```

## Interact with the deployed smart contract through truffle

```bash
truffle console --network testnet
truffle(testnet)> HarmonyERC20.deployed().then(function(instance){myHRC20=instance})
undefined
truffle(testnet)> myHRC20.symbol()
'H20'
truffle(testnet)> myHRC20.name()
'HarmonyERC20'
truffle(testnet)> myHRC20.decimals()
BN { negative: 0, words: [ 18, <1 empty item> ], length: 1, red: null }
truffle(testnet)> myHRC20.totalSupply()
BN {
  negative: 0,
  words: [ 16777216, 62077800, 20718012, 3, <1 empty item> ],
  length: 4,
  red: null
}
```