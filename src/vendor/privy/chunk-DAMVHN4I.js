import {
  n as n2
} from "./chunk-623CPBW2.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Lock
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import "./chunk-THXMRURJ.js";
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/AllowlistRejectionScreen-CyZ5HZm8.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var a = ({ title: r = "You don't have access to this app", subtitle: e = "Have you been invited?", ctaText: a2 = "Try another account", ctaLink: c2, onCtaClick: l }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: r, subtitle: e, icon: Lock, iconVariant: "warning", primaryCta: { label: a2, onClick: () => {
  let o2 = n2(c2);
  o2 ? window.open(o2, "_blank", "noopener,noreferrer") : l?.();
} }, watermark: true });
var c = { component: () => {
  let { navigate: t } = g(), i = se(), n3 = i?.allowlistConfig.errorTitle || "You don't have access to this app", c2 = i?.allowlistConfig.errorDetail || "Have you been invited?", l = i?.allowlistConfig.errorCtaText || "Try another account", m = i?.allowlistConfig.errorCtaLink;
  return (0, import_jsx_runtime.jsx)(a, { title: n3, subtitle: c2, ctaText: l, ctaLink: m ?? void 0, onCtaClick: () => {
    t("LandingScreen");
  } });
} };
export {
  c as AllowlistRejectionScreen,
  a as AllowlistRejectionScreenView,
  c as default
};
