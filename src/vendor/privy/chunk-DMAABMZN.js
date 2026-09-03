import {
  i
} from "./chunk-OY52FFSF.js";
import {
  e
} from "./chunk-6TIKH233.js";
import {
  Square2StackIcon_default
} from "./chunk-CPWWWFCX.js";
import {
  ExclamationCircleIcon_default
} from "./chunk-76DEAMJ5.js";
import {
  ExclamationTriangleIcon_default
} from "./chunk-SGK7A445.js";
import {
  d
} from "./chunk-VC62FKIT.js";
import {
  WalletIcon_default
} from "./chunk-EOSGBBZ3.js";
import "./chunk-ELJY7WHB.js";
import {
  L,
  b,
  f,
  h2 as h
} from "./chunk-RPCD4HAF.js";
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

// node_modules/@privy-io/react-auth/dist/esm/LinkConflictScreen-B_U_p2om.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/chains";
var v = gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${(e3) => e3.color ?? "var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
    border-bottom-color: ${(e3) => e3.color ?? "var(--privy-color-accent)"};
  }
`;
function b2(o2) {
  return (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", ...o2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", x2: "12", y1: "8", y2: "12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })] });
}
var T = ({ onTransfer: e3, isTransferring: o2, transferSuccess: t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { ...t ? { success: true, children: "Success!" } : { warn: true, loading: o2, onClick: e3, children: "Transfer and delete account" } });
var w = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`;
var k = gt.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`;
var C = gt.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`;
var A = gt(ExclamationCircleIcon_default)`
  position: relative;
  width: ${({ $iconSize: e3 }) => `${e3}px`};
  height: ${({ $iconSize: e3 }) => `${e3}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`;
var S = gt(Square2StackIcon_default)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`;
var j = gt.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`;
var I = gt.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`;
var W = gt.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var M = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { $iconSize: 60 }) });
var $ = ({ address: t, onClose: a2, onRetry: i2, onTransfer: c, isTransferring: l2, transferSuccess: u }) => {
  let { defaultChain: p } = se(), m = p.blockExplorers?.default.url ?? "https://etherscan.io";
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: a2, backFn: i2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(M, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(k, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Check account assets before transferring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(j, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: " To check your balance, you can:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { children: "Log out and log back into the other account, or " }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { children: ["Copy your wallet address and use a", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("u", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { target: "_blank", href: m, children: "block explorer" }) }), " ", "to see if the account holds any assets."] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { onClick: () => navigator.clipboard.writeText(t).catch(console.error), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletIcon_default, { color: "var(--privy-color-foreground-1)", strokeWidth: 2, height: "28px", width: "28px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { address: t, showCopyIcon: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, { onTransfer: c, isTransferring: l2, transferSuccess: u })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
};
var z = { component: () => {
  let { initiateAccountTransfer: e3, closePrivyModal: o2 } = l(), { data: t, navigate: n, lastScreen: i2, setModalData: s } = g(), [c, l2] = (0, import_react.useState)(void 0), [d2, u] = (0, import_react.useState)(false), [h2, f2] = (0, import_react.useState)(false), g2 = async () => {
    try {
      if (!t?.accountTransfer?.nonce || !t?.accountTransfer?.account) throw Error("missing account transfer inputs");
      f2(true), await e3({ nonce: t?.accountTransfer?.nonce, account: t?.accountTransfer?.account, accountType: t?.accountTransfer?.linkMethod, externalWalletMetadata: t?.accountTransfer?.externalWalletMetadata, telegramWebAppData: t?.accountTransfer?.telegramWebAppData, telegramAuthResult: t?.accountTransfer?.telegramAuthResult, farcasterEmbeddedAddress: t?.accountTransfer?.farcasterEmbeddedAddress, oAuthUserInfo: t?.accountTransfer?.oAuthUserInfo }), u(true), f2(false), setTimeout(o2, 1e3);
    } catch (e4) {
      s({ errorModalData: { error: e4, previousScreen: i2 || "LinkConflictScreen" } }), n("ErrorScreen", true);
    }
  };
  return c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { address: c, onClose: o2, onRetry: () => l2(void 0), onTransfer: g2, isTransferring: h2, transferSuccess: d2 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, { onClose: o2, onInfo: () => l2(t?.accountTransfer?.embeddedWalletAddress), onContinue: () => l2(t?.accountTransfer?.embeddedWalletAddress), onTransfer: g2, isTransferring: h2, transferSuccess: d2, data: t });
} };
var E = ({ onClose: n, onContinue: a2, onInfo: l2, onTransfer: h2, transferSuccess: p, isTransferring: m, data: g2 }) => {
  if (!g2?.accountTransfer?.linkMethod || !g2?.accountTransfer?.displayName) return;
  let y = { method: g2?.accountTransfer?.linkMethod, handle: g2?.accountTransfer?.displayName, disclosedAccount: g2?.accountTransfer?.embeddedWalletAddress ? { type: "wallet", handle: g2?.accountTransfer?.embeddedWalletAddress } : void 0 };
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { closeable: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(v, { color: "var(--privy-color-error)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExclamationTriangleIcon_default, { height: 38, width: 38, stroke: "var(--privy-color-error)" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(k, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [(function(e3) {
    switch (e3) {
      case "sms":
        return "Phone number";
      case "email":
        return "Email address";
      case "siwe":
        return "Wallet address";
      case "siws":
        return "Solana wallet address";
      case "linkedin":
        return "LinkedIn profile";
      case "google":
      case "apple":
      case "discord":
      case "github":
      case "instagram":
      case "spotify":
      case "tiktok":
      case "line":
      case "twitch":
      case "twitter":
      case "telegram":
      case "farcaster":
        return `${e(e3.replace("_oauth", ""))} profile`;
      default:
        return e3.startsWith("privy:") ? "Cross-app account" : e3;
    }
  })(y.method), " is associated with another account"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Do you want to transfer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: y.handle ? ` ${y.handle}` : "" }), " to this account instead? This will delete your other account."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(L2, { onClick: l2, disclosedAccount: y.disclosedAccount })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(k, { style: { gap: 12, marginTop: 12 }, children: [g2?.accountTransfer?.embeddedWalletAddress ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: a2, children: "Continue" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, { onTransfer: h2, transferSuccess: p, isTransferring: m }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { onClick: n, children: "No thanks" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
};
function L2({ disclosedAccount: o2, onClick: t }) {
  return o2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { onClick: t, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletIcon_default, { color: "var(--privy-color-foreground-1)", strokeWidth: 2, height: "28px", width: "28px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { address: o2.handle, showCopyIcon: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { width: 15, height: 15, color: "var(--privy-color-foreground-3)", style: { marginLeft: "auto" } })] }) : null;
}
export {
  z as LinkConflictScreen,
  E as LinkConflictScreenView,
  z as default
};
