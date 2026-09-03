import {
  t
} from "./chunk-VAKKZBAS.js";
import {
  j
} from "./chunk-FUH2YWOK.js";
import "./chunk-NH742RS2.js";
import "./chunk-SGK7A445.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-QB7GMZ7D.js";
import "./chunk-VC62FKIT.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  e
} from "./chunk-KH2OFJFK.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/EmbeddedWalletKeyExportScreen-CPGCmiQ5.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/chains";
var y = ({ address: o2, hideWalletAddress: i2, accessToken: n3, appConfigTheme: a, onClose: l2, exportButtonProps: p, onBack: c }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: "Export wallet", subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Copy either your private key or seed phrase to export your wallet.", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828", target: "blank", rel: "noopener noreferrer", children: "Learn more" })] }), onClose: l2, onBack: c, showBack: !!c, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(f, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { theme: a, children: "Never share your private key or seed phrase with anyone." }), !i2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { title: "Your wallet", address: o2, showCopyButton: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: "100%" }, children: n3 && p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { accessToken: n3, dimensions: { height: "44px" }, ...p }) })] }) });
var f = gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;
function g2({ chainType: e3, imported: r2, isUnifiedWallet: t3 }) {
  return !r2 && (t3 ? "ethereum" === e3 || "bitcoin-taproot" === e3 || "pearl" === e3 : "ethereum" === e3);
}
function v(t3) {
  let [a, l2] = (0, import_react.useState)(t3.dimensions.width), [d, s] = (0, import_react.useState)(false), [p, c] = (0, import_react.useState)(void 0), m = (0, import_react.useRef)(null);
  (0, import_react.useEffect)((() => {
    if (m.current && void 0 === a) {
      let { width: e4 } = m.current.getBoundingClientRect();
      l2(e4);
    }
    let e3 = getComputedStyle(document.documentElement);
    c({ background: e3.getPropertyValue("--privy-color-background"), background2: e3.getPropertyValue("--privy-color-background-2"), foreground3: e3.getPropertyValue("--privy-color-foreground-3"), foregroundAccent: e3.getPropertyValue("--privy-color-foreground-accent"), accent: e3.getPropertyValue("--privy-color-accent"), accentDark: e3.getPropertyValue("--privy-color-accent-dark"), success: e3.getPropertyValue("--privy-color-success"), colorScheme: e3.getPropertyValue("color-scheme") });
  }), []);
  let h = g2({ chainType: t3.chainType, imported: t3.imported, isUnifiedWallet: t3.isUnifiedWallet });
  return (0, import_jsx_runtime.jsx)("div", { ref: m, children: a && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", { style: { position: "absolute", zIndex: 1, opacity: d ? 1 : 0, transition: "opacity 50ms ease-in-out", pointerEvents: d ? "auto" : "none" }, onLoad: () => setTimeout((() => s(true)), 1500), width: a, height: t3.dimensions.height, allow: "clipboard-write self *", src: x({ origin: t3.origin, appId: t3.appId, appClientId: t3.appClientId, walletId: t3.walletId, entropyId: t3.entropyId, entropyIdVerifier: t3.entropyIdVerifier, hdWalletIndex: t3.hdWalletIndex, chainType: t3.chainType, accessToken: t3.accessToken, clientAnalyticsId: t3.clientAnalyticsId, width: a, palette: p, isUnifiedWallet: t3.isUnifiedWallet, exportSeedPhrase: h }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k2, { children: "Loading..." }), h && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k2, { children: "Loading..." })] }) });
}
var I = { component: () => {
  let [r2, t3] = (0, import_react.useState)(null), { authenticated: n3, user: a } = k(), { closePrivyModal: l2, createAnalyticsEvent: d, clientAnalyticsId: s, client: u } = l(), f2 = se(), { data: g3, onUserCloseViaDialogOrKeybindRef: v2 } = g(), { onFailure: I2, onSuccess: x2, origin: w2, appId: k3, appClientId: b, entropyId: j2, entropyIdVerifier: C, walletId: T, hdWalletIndex: W, chainType: A, address: _, uiOptions: P, isUnifiedWallet: V, imported: S, showBackButton: B } = g3.keyExport, U = (e3) => {
    l2({ shouldCallAuthOnSuccess: false }), I2("string" == typeof e3 ? Error(e3) : e3);
  }, L = () => {
    l2({ shouldCallAuthOnSuccess: false }), x2(), d({ eventName: "embedded_wallet_key_export_completed", payload: { walletAddress: _ } });
  };
  return (0, import_react.useEffect)((() => {
    if (!n3) return U("User must be authenticated before exporting their wallet");
    u.getAccessToken().then(t3).catch(U);
  }), [n3, a]), v2.current = L, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(y, { address: _, hideWalletAddress: P?.hideWalletAddress, accessToken: r2, appConfigTheme: f2.appearance.palette.colorScheme, onClose: L, isLoading: !r2, onBack: B ? L : void 0, exportButtonProps: r2 ? { origin: w2, appId: k3, appClientId: b, clientAnalyticsId: s, entropyId: j2, entropyIdVerifier: C, walletId: T, hdWalletIndex: W, isUnifiedWallet: V, imported: S, chainType: A } : void 0 });
} };
function x({ origin: e3, appId: r2, appClientId: t3, walletId: o2, entropyId: i2, entropyIdVerifier: n3, hdWalletIndex: a, chainType: d, accessToken: s, clientAnalyticsId: p, width: c, palette: m, isUnifiedWallet: h, exportSeedPhrase: u }) {
  return e({ origin: e3, path: `/apps/${r2}/embedded-wallets/export`, query: h ? { v: "1-unified", wallet_id: o2, chain_type: d, client_id: t3, width: `${c}px`, caid: p, phrase_export: u, ...m } : { v: "1", entropy_id: i2, entropy_id_verifier: n3, hd_wallet_index: a, chain_type: d, client_id: t3, width: `${c}px`, caid: p, phrase_export: u, ...m }, hash: { token: s } });
}
var w = gt.div`
  overflow: visible;
  position: relative;
  height: 44px;
  display: flex;
  gap: 12px;
`;
var k2 = gt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`;
export {
  I as EmbeddedWalletKeyExportScreen,
  y as EmbeddedWalletKeyExportView,
  x as constructWalletExportIframeUrl,
  I as default,
  g2 as supportsSeedPhraseExport
};
