import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
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

// node_modules/@privy-io/react-auth/dist/esm/UserLimitReachedScreen-AkyWbrHV.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var r = ({ style: t, ...e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { height: "38px", width: "38px", ...t }, ...e, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 13.6V20M20 26.4H20.016M36 20C36 28.8365 28.8366 36 20 36C11.1635 36 4.00001 28.8365 4.00001 20C4.00001 11.1634 11.1635 3.99999 20 3.99999C28.8366 3.99999 36 11.1634 36 20Z", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round" }) });
var i = ({ title: t = "Unable to sign in", subtitle: i2 = "This is a test application that has reached its user limit. To allow more users, this app needs to be upgraded to production.", onGoBack: n3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: t, subtitle: i2, icon: r, iconVariant: "subtle", primaryCta: { label: "Go back", onClick: n3 }, showBack: true, onBack: n3, watermark: true });
var n2 = { component: () => {
  let { navigate: e } = g();
  return (0, import_jsx_runtime.jsx)(i, { onGoBack: () => {
    e("LandingScreen");
  } });
} };
export {
  n2 as UserLimitReachedScreen,
  i as UserLimitReachedScreenView,
  n2 as default
};
