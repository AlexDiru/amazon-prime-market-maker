pragma solidity ^0.8.0;

import "hardhat/console.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() public ERC20("Token", "TKN") {
        _mint(msg.sender, 2000);
    }
}