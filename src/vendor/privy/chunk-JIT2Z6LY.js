import {
  S,
  h,
  p
} from "./chunk-W2GJWPY6.js";
import {
  c
} from "./chunk-W3FIRIBO.js";
import {
  ChevronDownIcon_default
} from "./chunk-QM2ZBVYE.js";
import {
  d
} from "./chunk-EIEISV5R.js";
import {
  gt
} from "./chunk-THXMRURJ.js";
import {
  H,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/TransactionDetails-Bh4xTOMs.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var g = ({ label: t2, children: n, valueStyles: r }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(f, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: t2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { style: { ...r }, children: n })] });
var f = gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`;
var x = gt.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`;
var m = ({ gas: t2, tokenPrice: n, tokenSymbol: l }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { style: { paddingBottom: "12px" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(b, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(k, { children: "Est. Fees" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { weiQuantities: [BigInt(t2)], tokenPrice: n, tokenSymbol: l }) })] }), n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { children: `${c(BigInt(t2), l)}` })] });
var y = ({ value: t2, gas: n, tokenPrice: l, tokenSymbol: o }) => {
  let c2 = BigInt(t2 ?? 0) + BigInt(n);
  return (0, import_jsx_runtime.jsxs)(d, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(b, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(k, { children: "Total (including fees)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { weiQuantities: [BigInt(t2 || 0), BigInt(n)], tokenPrice: l, tokenSymbol: o }) })] }), l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { children: c(c2, o) })] });
};
var b = gt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`;
var w = gt.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`;
var k = gt.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`;
var P = /* @__PURE__ */ (0, import_react.createContext)(void 0);
var I = /* @__PURE__ */ (0, import_react.createContext)(void 0);
var S2 = ({ defaultValue: e2, children: t2 }) => {
  let [n, r] = (0, import_react.useState)(e2 || null);
  return (0, import_jsx_runtime.jsx)(P.Provider, { value: { activePanel: n, togglePanel: (e3) => {
    r(n === e3 ? null : e3);
  } }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(z, { children: t2 }) });
};
var j = ({ value: e2, children: t2 }) => {
  let { activePanel: n, togglePanel: r } = (0, import_react.useContext)(P), l = n === e2;
  return (0, import_jsx_runtime.jsx)(I.Provider, { value: { onToggle: () => r(e2), value: e2 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { isActive: l ? "true" : "false", "data-open": String(l), children: t2 }) });
};
var B = ({ children: n }) => {
  let { activePanel: r } = (0, import_react.useContext)(P), { onToggle: l, value: o } = (0, import_react.useContext)(I), d2 = r === o;
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(F, { onClick: l, "data-open": String(d2), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { isactive: d2 ? "true" : "false", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon_default, { height: "16px", width: "16px", strokeWidth: "2" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, {})] });
};
var T = ({ children: e2 }) => {
  let { activePanel: t2 } = (0, import_react.useContext)(P), { value: n } = (0, import_react.useContext)(I);
  return (0, import_jsx_runtime.jsx)(D, { "data-open": String(t2 === n), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { children: e2 }) });
};
var A = ({ children: e2 }) => {
  let { activePanel: t2 } = (0, import_react.useContext)(P), { value: n } = (0, import_react.useContext)(I);
  return (0, import_jsx_runtime.jsx)(L, { children: "function" == typeof e2 ? e2({ isActive: t2 === n }) : e2 });
};
var z = gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
var F = gt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`;
var Q = gt.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`;
var W = gt.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`;
var C = gt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`;
var D = gt.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`;
var L = gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`;
var V = gt.div`
  transform: ${(e2) => "true" === e2.isactive ? "rotate(180deg)" : "rotate(0deg)"};
`;
var $ = ({ from: t2, to: n, txn: r, transactionInfo: d2, tokenPrice: a, gas: c2, tokenSymbol: s2 }) => {
  let h3 = BigInt(r?.value || 0);
  return (0, import_jsx_runtime.jsx)(S2, { ...se().render.standalone ? { defaultValue: "details" } : {}, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(j, { value: "details", children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(B, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(E, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d2?.title || "Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { weiQuantities: [h3], tokenPrice: a, tokenSymbol: s2 }) })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, { label: "From", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { walletAddress: t2, chainId: r.chainId || H, chainType: "ethereum" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, { label: "To", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { walletAddress: n, chainId: r.chainId || H, chainType: "ethereum" }) }), d2 && d2.action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g, { label: "Action", children: d2.action }), c2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { value: r.value, gas: c2, tokenPrice: a, tokenSymbol: s2 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { children: ({ isActive: e2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, { value: r.value, displayFee: e2, gas: c2 || "0x0", tokenPrice: a, tokenSymbol: s2 }) })] }) });
};
var E = gt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
var H2 = gt.div`
  flex-shrink: 0;
  padding-left: 8px;
`;

export {
  $
};
