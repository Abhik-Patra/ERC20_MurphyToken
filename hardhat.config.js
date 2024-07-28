require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const AMOY_PRIVATE_KEY=process.env.AMOY_PRIVATE_KEY;
const ALCHEMY_API_KEY_URL=process.env.ALCHEMY_API_KEY_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    amoy:{
      url:ALCHEMY_API_KEY_URL,
      accounts:[AMOY_PRIVATE_KEY]
    }
  }
};
