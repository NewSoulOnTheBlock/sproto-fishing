import {
  r
} from "./chunk-FDAXBPM5.js";

// node_modules/@privy-io/react-auth/dist/esm/transaction-BNTP-bFm.mjs
function t(e, t2 = 6, n2 = false, r2 = false) {
  let o = (parseFloat(e.toString()) / 1e9).toFixed(t2).replace(/0+$/, "").replace(/\.$/, ""), i = r2 ? "" : " SOL";
  return n2 ? `${o}${i}` : `${"0" === o ? "<0.001" : o}${i}`;
}
function n({ amount: n2, fee: r2, tokenPrice: o, isUsdc: i }) {
  let a = BigInt(Math.floor(parseFloat(n2) * 10 ** (i ? 6 : 9))), s = i ? a : a + r2;
  return { fundingAmountInBaseUnit: a, fundingAmountInUsd: o ? r(a, o) : void 0, totalPriceInUsd: o ? r(s, o) : void 0, totalPriceInNativeCurrency: t(s), feePriceInNativeCurrency: t(r2), feePriceInUsd: o ? r(r2, o) : void 0 };
}

export {
  t,
  n
};
