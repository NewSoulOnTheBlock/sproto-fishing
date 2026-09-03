import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  ExternalLink
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
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

// node_modules/@privy-io/react-auth/dist/esm/InAppBrowserLoginNotPossible-CutZG190.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var i = ({ onClose: t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: "Could not log in with provider", subtitle: "It looks like you're using an in-app browser. To log in, please try again using an external browser.", icon: ExternalLink, primaryCta: { label: "Close", onClick: t }, watermark: true });
var n2 = { component: () => {
  let { closePrivyModal: r } = l();
  return (0, import_jsx_runtime.jsx)(i, { onClose: () => r() });
} };
export {
  n2 as InAppBrowserLoginNotPossible,
  i as InAppBrowserLoginNotPossibleView,
  n2 as default
};
