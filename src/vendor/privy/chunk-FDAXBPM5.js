// node_modules/@privy-io/react-auth/dist/esm/constants-ur3iCbOk.mjs
var s = 1e9;
var a = "11111111111111111111111111111111";
var e = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
var d = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
var C = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
var o = ["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C", "CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"];
var b = ["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"];
var n = { "solana:mainnet": { EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: { symbol: "USDC", decimals: 6, address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" }, Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: { symbol: "USDT", decimals: 6, address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB" }, So11111111111111111111111111111111111111112: { symbol: "SOL", decimals: 9, address: "So11111111111111111111111111111111111111112" } }, "solana:devnet": { "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU": { symbol: "USDC", decimals: 6, address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU" }, EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS: { symbol: "USDT", decimals: 6, address: "EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS" }, So11111111111111111111111111111111111111112: { symbol: "SOL", decimals: 9, address: "So11111111111111111111111111111111111111112" } }, "solana:testnet": {} };

// node_modules/@privy-io/react-auth/dist/esm/getFormattedUsdFromLamports-De3U9GlO.mjs
function r(r2, o2) {
  let e2 = parseFloat(r2.toString()) / s, a2 = n2.format(o2 * e2);
  return "$0.00" === a2 ? "<$0.01" : a2;
}
var n2 = new Intl.NumberFormat(void 0, { style: "currency", currency: "USD", maximumFractionDigits: 2 });

export {
  s,
  a,
  e,
  d,
  C,
  o,
  b,
  n,
  r
};
