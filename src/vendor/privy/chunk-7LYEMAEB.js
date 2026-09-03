import {
  o
} from "./chunk-W3FIRIBO.js";
import {
  e
} from "./chunk-WLRIHMQB.js";
import {
  a,
  c as c2,
  d as d2,
  l,
  p
} from "./chunk-RDL3SKLR.js";
import {
  c
} from "./chunk-2HYLPLOV.js";
import "./chunk-NOC53GNL.js";
import "./chunk-KZ4OUGKV.js";
import "./chunk-LBSQU3JN.js";
import {
  t as t2
} from "./chunk-E5F673JX.js";
import {
  d
} from "./chunk-EIEISV5R.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import {
  t
} from "./chunk-6HBDFDSF.js";
import {
  h2 as h,
  u
} from "./chunk-RPCD4HAF.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import "./chunk-THXMRURJ.js";
import "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/FundingEditAmountScreen-DWOWYBIs.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/chains";
import "viem/utils";
var v = { component: () => {
  let { data: v2, setModalData: g2 } = g(), C = v2?.funding, k = "solana" === C.chainType, x = (0, import_react.useRef)(null), { tokenPrice: F } = c(k ? "solana" : C.chain.id), S = k ? void 0 : C, D = !(!S?.erc20Address || S?.erc20ContractInfo), L = k ? C.isUSDC ? "USDC" : "SOL" : C.erc20Address ? C.erc20ContractInfo?.symbol : C.chain.nativeCurrency.symbol || "ETH", T = parseFloat(C.amount), P = !isNaN(T) && T > 0, b = F ? o(C.amount, F) : void 0;
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { children: "Confirm or edit amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { style: { marginTop: "32px" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { children: D ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { size: "50px" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p, { onClick: () => x.current?.focus(), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(d2, { ref: x, value: C.amount, onChange: (o3) => {
    let r2 = o3.target.value;
    /^[0-9.]*$/.test(r2) && r2.split(".").length - 1 <= 1 && g2({ ...v2, funding: { ...C, amount: r2 }, solanaFundingData: v2?.solanaFundingData ? { ...v2.solanaFundingData, amount: r2 } : void 0 });
  } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c2, { children: L })] }), !S?.erc20Address && !(k && C.isUSDC) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { children: b && P ? `${b} USD` : "" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, { style: { marginTop: "1rem" }, disabled: !P, onClick: C.onContinueWithExternalWallet, children: "Continue" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
export {
  v as FundingAmountEditScreen,
  v as default
};
