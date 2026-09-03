import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
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

// node_modules/@privy-io/react-auth/dist/esm/WalletInterstitialScreen-agXPpVUj.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var n2 = ({ title: e2, subtitle: o, buttonText: i, buttonHref: n3, isLoading: l2 = false, helpText: a, onButtonClick: s }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: e2, subtitle: o, primaryCta: { label: i, onClick: () => {
  n3 && window.open(n3, "_self"), s?.();
}, disabled: l2 }, helpText: a, watermark: true });
var l = { component: () => {
  let { ready: r } = k(), { data: l2 } = g(), [a, s] = (0, import_react.useState)(false);
  if (!l2?.installWalletModalData) throw Error("Wallet data is missing");
  let { walletConfig: c, connectOnly: m, chainType: p } = l2.installWalletModalData, u = c.getMobileRedirect({ useUniversalLink: !a, isSolana: "solana" === p, connectOnly: m }), d = c.name.replace(/ wallet/gi, ""), h = { title: `Redirecting to ${d} Mobile Wallet`, description: `We'll take you to the ${d} Mobile Wallet app to continue your login experience.`, footnote: "" };
  return r && (h.description = `For the best experience, we'll automatically log you into the ${d} Mobile Wallet in-app browser.`, h.footnote = "You can always return here to login via other methods."), a && (h.title = "Still here?", h.description = `You may need to install the ${c.name} mobile app.`, h.footnote = `Once you're done, you can connect with ${c.name} wallet to complete the login.`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { title: h.title, subtitle: h.description, buttonText: a ? "Go to App Store" : "Continue", buttonHref: u, isLoading: r && !u, helpText: h.footnote || void 0, onButtonClick: () => {
    setTimeout((() => s(true)), 1e3);
  } });
} };
export {
  l as WalletInterstitialScreen,
  n2 as WalletInterstitialScreenView,
  l as default
};
