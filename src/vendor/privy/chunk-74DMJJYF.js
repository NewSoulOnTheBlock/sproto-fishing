import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  CircleQuestionMark
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
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

// node_modules/@privy-io/react-auth/dist/esm/AccountNotFoundScreen-CkRZH7NH.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var n2 = ({ title: r = "Account not found", subtitle: e, appName: i = "this app", ctaText: n3 = "Try logging in again", onRetry: m2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: r, subtitle: e || `Please try logging in again or go to ${i} to create an account.`, icon: CircleQuestionMark, iconVariant: "warning", primaryCta: { label: n3, onClick: m2 }, watermark: true });
var m = { component: () => {
  let { navigate: o, setModalData: a, data: m2 } = g(), c = se(), { getAuthMeta: l2, client: p } = l();
  return (0, import_jsx_runtime.jsx)(n2, { appName: c?.name, onRetry: () => {
    let t2 = l2();
    a({ ...m2, login: { ...m2?.login, ...t2?.disableSignup ? { disableSignup: true } : {} } }), p?.authFlow && (p.authFlow = void 0), o("LandingScreen");
  } });
} };
export {
  m as AccountNotFoundScreen,
  n2 as AccountNotFoundScreenView,
  m as default
};
