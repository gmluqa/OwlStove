require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const FTM_TESTNET_RPC_URL = "https://rpc.ankr.com/fantom_testnet";
const FTM_MAINNET_RPC_URL = "https://rpc.ankr.com/fantom";
const FTM_PRIVATE_KEY = process.env.FTM_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ftm_testnet: {
      url: FTM_TESTNET_RPC_URL,
      accounts: [FTM_PRIVATE_KEY],
    },
    ftm_mainnet: {
      url: FTM_MAINNET_RPC_URL,
      accounts: [FTM_PRIVATE_KEY],
    },
  },
};
