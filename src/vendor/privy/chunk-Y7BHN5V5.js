import {
  a,
  c
} from "./chunk-LBSQU3JN.js";
import {
  n as n2
} from "./chunk-JU4Q6HQT.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import "./chunk-THXMRURJ.js";
import "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/InstallWalletScreen-Cy_VDOZ4.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var s = ({ walletName: i, installLink: s2, title: c3, subtitle: m = "Follow the instructions below to get started.", onReload: d, onBack: p }) => {
  let h = c3 || `Create a ${i} wallet`.replace(/wallet wallet/gi, "wallet");
  return (0, import_jsx_runtime.jsx)(n, { title: h, subtitle: m, onBack: p, showBack: true, primaryCta: { label: "Reload the page to use your wallet", onClick: d }, helpText: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Still not sure? " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { size: "sm", target: "_blank", href: "https://solana.com/docs/intro/wallets", children: "Learn more" })] }), watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(a, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Install the " }), " ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n2, { href: s2, target: "_blank", children: [i, " browser extension"] })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: "Set up your first wallet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { children: "Store your recovery phrase in a safe place!" })] }) });
};
var c2 = { component: () => {
  let { navigateBack: e2, data: o2 } = g();
  if (!o2?.installWalletModalData) throw Error("Wallet data is missing");
  let { walletConfig: r } = o2.installWalletModalData;
  return (0, import_jsx_runtime.jsx)(s, { walletName: r.name, installLink: r.installLink, onReload: () => {
    window.location.reload();
  }, onBack: e2 });
} };
export {
  c2 as InstallWalletScreen,
  s as InstallWalletScreenView,
  c2 as default
};
