import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-exposed";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    aurora: { // testnet
      gas: "auto",
      gasPrice: "auto",
      url: process.env.AURORA_TESTNET_ENDPOINT,
      chainId: 1313161555,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    goerli: {
      gas: "auto",
      gasPrice: "auto",
      url: process.env.GOERLI_ENDPOINT,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    } 
  }   
}
