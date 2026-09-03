import {
  t
} from "./chunk-4M5GFLTB.js";
import {
  r
} from "./chunk-FDAXBPM5.js";
import {
  c,
  i,
  l,
  n
} from "./chunk-W3FIRIBO.js";
import {
  o
} from "./chunk-COXZQBSX.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/WalletLink-uxzjkGGj.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
import { formatUnits as i2 } from "viem";
var p = ({ weiQuantities: t3, tokenPrice: r3, tokenSymbol: n2 }) => {
  let i3 = i(t3), l2 = r3 ? n(i3, r3) : void 0, c2 = c(i3, n2);
  return (0, import_jsx_runtime.jsx)(u, { children: l2 || c2 });
};
var h = ({ weiQuantities: n2, tokenPrice: i3, tokenSymbol: l2 }) => {
  let c2 = i(n2), m = i3 ? n(c2, i3) : void 0, d = c(c2, l2);
  return (0, import_jsx_runtime.jsx)(u, { children: m ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, { children: "USD" }), "<$0.01" === m ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(k, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: "<" }), "$0.01"] }) : m] }) : d });
};
var f = ({ quantities: n2, tokenPrice: o2, tokenSymbol: s = "SOL", tokenDecimals: a = 9 }) => {
  let l2 = n2.reduce(((e2, t3) => e2 + t3), 0n), d = o2 && "SOL" === s && 9 === a ? r(l2, o2) : void 0, p2 = "SOL" === s && 9 === a ? t(l2) : `${i2(l2, a)} ${s}`;
  return (0, import_jsx_runtime.jsx)(u, { children: d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "<$0.01" === d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(k, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: "<" }), "$0.01"] }) : d }) : p2 });
};
var u = gt.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`;
var g = gt.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`;
var x = gt.span`
  font-size: 10px;
`;
var k = gt.span`
  display: flex;
  align-items: center;
`;
function y(e2, t3) {
  return `https://explorer.solana.com/account/${e2}?chain=${t3}`;
}
var S = (t3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { href: "ethereum" === t3.chainType ? l(t3.chainId, t3.walletAddress) : y(t3.walletAddress, t3.chainId), target: "_blank", children: o(t3.walletAddress) });
var $ = gt.a`
  &:hover {
    text-decoration: underline;
  }
`;

export {
  p,
  h,
  f,
  S
};
