import {
  g
} from "./chunk-COXZQBSX.js";
import {
  l
} from "./chunk-THXMRURJ.js";

// node_modules/@privy-io/react-auth/dist/esm/ethers-ComuOzvK.mjs
import { formatEther as r } from "viem";
var a = new Intl.NumberFormat(void 0, { style: "currency", currency: "USD", maximumFractionDigits: 2 });
var s = (r2) => a.format(r2);
var o = (r2, e) => {
  let t = s(e * parseFloat(r2));
  return "$0.00" !== t ? t : "<$0.01";
};
var n = (e, t) => {
  let a2 = s(t * parseFloat(r(e)));
  return "$0.00" === a2 ? "<$0.01" : a2;
};
var c = (r2, e, t = 6, a2 = false) => `${m(r2, t, a2)} ${e}`;
var m = (e, t = 6, a2 = false) => {
  let s2 = parseFloat(r(e)).toFixed(t).replace(/0+$/, "").replace(/\.$/, "");
  return a2 ? s2 : `${"0" === s2 ? "<0.001" : s2}`;
};
var i = (r2) => r2.reduce(((r3, e) => r3 + e), 0n);
var l2 = (r2, a2) => {
  let { chains: s2 } = l(), o2 = `https://etherscan.io/address/${a2}`, n2 = `${g(r2, s2)}/address/${a2}`;
  if (!n2) return o2;
  try {
    new URL(n2);
  } catch {
    return o2;
  }
  return n2;
};

export {
  o,
  n,
  c,
  m,
  i,
  l2 as l
};
