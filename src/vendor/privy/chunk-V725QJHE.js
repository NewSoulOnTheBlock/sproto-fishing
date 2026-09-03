import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  CircleX
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/LoginFailedScreen-mIQNIOwB.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var n2 = ({ title: r = "Could not connect with wallet", subtitle: e = "Please check that Phantom multichain is enabled and try again.", primaryCtaText: n3 = "Try again", secondaryCtaText: a2 = "Cancel", onTryAgain: c, onCancel: m }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: r, subtitle: e, icon: CircleX, iconVariant: "error", primaryCta: { label: n3, onClick: c }, secondaryCta: { label: a2, onClick: m }, watermark: true });
var a = { component: () => {
  let { closePrivyModal: t } = l(), { navigate: i } = g();
  return (0, import_jsx_runtime.jsx)(n2, { onTryAgain: () => {
    i("LandingScreen");
  }, onCancel: async () => {
    await t();
  } });
} };
export {
  a as LoginFailedScreen,
  n2 as LoginFailedScreenView,
  a as default
};
