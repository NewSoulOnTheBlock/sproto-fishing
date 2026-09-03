import {
  h
} from "./chunk-KN76ETVM.js";
import {
  n as n2
} from "./chunk-BQ7TWRZK.js";
import {
  l as l2
} from "./chunk-RXHEHL44.js";
import {
  require_browser,
  x
} from "./chunk-4BHOTT2W.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import "./chunk-HBMGI65L.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  a2 as a,
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  g2 as g,
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

// node_modules/@privy-io/react-auth/dist/esm/FarcasterSignerStatusScreen-PyG2azko.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
var import_qrcode = __toESM(require_browser(), 1);
import "viem";
import "viem/chains";
var y = "#8a63d2";
var k = ({ appName: t2, loading: o2, success: a3, errorMessage: n3, connectUri: d, onBack: u, onClose: g3, onOpenFarcaster: h2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, import_react_device_detect.isMobile || o2 ? import_react_device_detect.isIOS ? { title: n3 ? n3.message : "Add a signer to Farcaster", subtitle: n3 ? n3.detail : `This will allow ${t2} to add casts, likes, follows, and more on your behalf.`, icon: l2, iconVariant: "loading", iconLoadingStatus: { success: a3, fail: !!n3 }, primaryCta: d && h2 ? { label: "Open Farcaster app", onClick: h2 } : void 0, onBack: u, onClose: g3, watermark: true } : { title: n3 ? n3.message : "Requesting signer from Farcaster", subtitle: n3 ? n3.detail : "This should only take a moment", icon: l2, iconVariant: "loading", iconLoadingStatus: { success: a3, fail: !!n3 }, onBack: u, onClose: g3, watermark: true, children: d && import_react_device_detect.isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { text: "Take me to Farcaster", url: d, color: y }) }) } : { title: "Add a signer to Farcaster", subtitle: `This will allow ${t2} to add casts, likes, follows, and more on your behalf.`, onBack: u, onClose: g3, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x2, { children: d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { url: d, size: 275, squareLogoElement: l2 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, {}) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(C, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { children: "Or copy this link and paste it into a phone browser to open the Farcaster app." }), d && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { text: d, itemName: "link", color: y })] })] }) });
var j = gt.div`
  margin-top: 24px;
`;
var w = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
var x2 = gt.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`;
var C = gt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
var b = gt.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`;
var S = gt.div`
  position: relative;
  width: 82px;
  height: 82px;
`;
var F = { component: () => {
  let { lastScreen: r2, navigateBack: i2, data: s2 } = g2(), n3 = se(), { requestFarcasterSignerStatus: l3, closePrivyModal: c } = l(), [m, p] = (0, import_react.useState)(void 0), [f, v] = (0, import_react.useState)(false), [y2, j2] = (0, import_react.useState)(false), w2 = (0, import_react.useRef)([]), x3 = s2?.farcasterSigner;
  (0, import_react.useEffect)((() => {
    let e2 = Date.now(), r3 = setInterval((async () => {
      if (!x3?.public_key) return clearInterval(r3), void p({ retryable: true, message: "Connect failed", detail: "Something went wrong. Please try again." });
      "approved" === x3.status && (clearInterval(r3), v(false), j2(true), w2.current.push(setTimeout((() => c({ shouldCallAuthOnSuccess: false, isSuccess: true })), g)));
      let t2 = await l3(x3?.public_key), o2 = Date.now() - e2;
      "approved" === t2.status ? (clearInterval(r3), v(false), j2(true), w2.current.push(setTimeout((() => c({ shouldCallAuthOnSuccess: false, isSuccess: true })), g))) : o2 > 3e5 ? (clearInterval(r3), p({ retryable: true, message: "Connect failed", detail: "The request timed out. Try again." })) : "revoked" === t2.status && (clearInterval(r3), p({ retryable: true, message: "Request rejected", detail: "The request was rejected. Please try again." }));
    }), 2e3);
    return () => {
      clearInterval(r3), w2.current.forEach(((e3) => clearTimeout(e3)));
    };
  }), []);
  let C2 = "pending_approval" === x3?.status ? x3.signer_approval_url : void 0;
  return (0, import_jsx_runtime.jsx)(k, { appName: n3.name, loading: f, success: y2, errorMessage: m, connectUri: C2, onBack: r2 ? i2 : void 0, onClose: c, onOpenFarcaster: () => {
    C2 && (window.location.href = C2);
  } });
} };
export {
  F as FarcasterSignerStatusScreen,
  k as FarcasterSignerStatusView,
  F as default
};
