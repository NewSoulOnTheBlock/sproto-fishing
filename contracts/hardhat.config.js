import 'dotenv/config';
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || '';
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];
export default {
  solidity: { version: '0.8.24', settings: { optimizer: { enabled: true, runs: 200 }, viaIR: true } },
  networks: {
    ethereumMainnet: { url: process.env.ETHEREUM_RPC_URL || 'https://ethereum-rpc.publicnode.com', chainId: 1, accounts },
    sepolia: { url: process.env.SEPOLIA_RPC_URL || 'https://ethereum-sepolia-rpc.publicnode.com', chainId: 11155111, accounts },
  },
};
