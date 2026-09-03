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
  u
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
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
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/EmbeddedWalletPasswordUpdateSplashScreen-0-D9mhY3.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var n2 = ({ onClose: s, onProceed: i }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: "Secure Your Account", subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Please set a password to secure your account.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), "Losing access to this password and this device will make your account inaccessible."] }), icon: Lock, primaryCta: { label: "Add password", onClick: i }, onClose: s, watermark: true });
var m = { component: () => {
  let { closePrivyModal: e2 } = l(), { data: r2, navigate: t, onUserCloseViaDialogOrKeybindRef: c } = g(), { onFailure: m2 } = r2.setWalletPassword, l2 = () => {
    m2(new u("Exited before password was added to wallet")), e2({ shouldCallAuthOnSuccess: false });
  };
  return c.current = l2, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { onClose: l2, onProceed: () => {
    t("EmbeddedWalletPasswordUpdateScreen");
  } });
} };
export {
  m as EmbeddedWalletPasswordUpdateSplashScreen,
  n2 as EmbeddedWalletPasswordUpdateSplashView,
  m as default
};
