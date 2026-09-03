export const ETHEREUM_CHAIN_ID = Number(process.env.ETHEREUM_CHAIN_ID || 1);
export const ETHEREUM_RPC_URL = process.env.ETHEREUM_RPC_URL || 'https://ethereum-rpc.publicnode.com';
export const ETHEREUM_EXPLORER = 'https://etherscan.io';
// $BITCOIN — HarryPotterObamaSonic10Inu, 8 decimals. This contract is on
// Ethereum mainnet (chainId 1), NOT on Ethereum Mainnet — see the note in
// src/web3/chain.js. Override BITCOIN_TOKEN_ADDRESS once a 1 deployment
// (or bridged representation) exists.
export const BITCOIN_TOKEN_ADDRESS = process.env.BITCOIN_TOKEN_ADDRESS || '0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9';
export const LEGACY_TIDAL_TOKEN_ADDRESS = '0x6E6e926AAEC6dCD0EDBD49CfC5BC49062Ae80923';
export const GAME_TOKEN_ADDRESS = process.env.GAME_TOKEN_ADDRESS || BITCOIN_TOKEN_ADDRESS;
export const GAME_TOKEN_SYMBOL = process.env.GAME_TOKEN_SYMBOL || '$BITCOIN';
export const GAME_TOKEN_DECIMALS = Number(process.env.GAME_TOKEN_DECIMALS || 8);
export const OPERATOR_TREASURY = process.env.OPERATOR_TREASURY || '0x793a5e8b8Ff431cC2D8eE41e8ec2D9ad70247E60';
// Redeployed on Ethereum mainnet 2026-09-03 (see contracts/deployments/ethereum-mainnet.json).
export const REWARD_ESCROW_ADDRESS = process.env.REWARD_ESCROW_ADDRESS || '0x4C117E9A512BD91926D2cf439F965dA21874b2E6';
export const BAIT_STORE_ADDRESS = process.env.BAIT_STORE_ADDRESS || '0x5F9edB5AFD89c5cb33400ed7e4EB2D06a511424d';
export const HOUSE_RESERVE_VAULT_ADDRESS = process.env.HOUSE_RESERVE_VAULT_ADDRESS || '0x5C8972dcd3533ea71333f1067f213bd4dB541D6a';
export const TOURNAMENT_VAULT_ADDRESS = process.env.TOURNAMENT_VAULT_ADDRESS || '0xBbeA202632E9bA50A4B2Ae8364cB2743a0C794F2';
export const SPONSORED_HOTSPOTS_ADDRESS = process.env.SPONSORED_HOTSPOTS_ADDRESS || '0xA5d80b916051E357524914Dfdb67e5E26a4bB9B6';
