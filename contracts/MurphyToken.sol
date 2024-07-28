//SPDX-License-Identifier:MIT
pragma solidity >0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MurphyToken is ERC20{

    constructor() ERC20("MurphyToken", "MURPHY") {
        _mint(msg.sender, 100000 * (10 ** decimals())); //1 lakh tokens
    }
}
