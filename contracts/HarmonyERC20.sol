// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HarmonyERC20 is ERC20 {
    constructor(string memory _name, string memory _symbols, uint256 _amount)
        ERC20(_name, _symbols) {
        _mint(msg.sender, _amount);

    }
}
