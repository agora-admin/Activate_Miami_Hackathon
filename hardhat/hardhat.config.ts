import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-exposed";

export default {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}