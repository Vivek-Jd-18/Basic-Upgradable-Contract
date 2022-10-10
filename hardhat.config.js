require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require('@openzeppelin/hardhat-upgrades')
require("@nomiclabs/hardhat-etherscan")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/EgKFc0hjM9FTYsiEkRj8RxchmQc0YoDK",
      accounts: ["6fd8a361b032e87813c8931343e525bb6ddafd482aefe78081cb354cd43d9555"]
    }
  },
  etherscan: {
    apiKey: "I8S784DXGBRDFF5PYTMFH6S27XFU5F75WA",
  },
};
