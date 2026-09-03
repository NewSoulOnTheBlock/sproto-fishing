import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Ban,
  CircleAlert,
  CircleCheckBig
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  s
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  h,
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

// node_modules/@privy-io/react-auth/dist/esm/DelegatedActionsRevokeScreen-CslvHkCF.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var p = ({ appName: n3, success: i2, error: s2, onRevoke: a, onDeny: c, onClose: m }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, i2 || s2 ? { title: s2 ? "Something went wrong" : "Success!", subtitle: s2 ? "Please try again." : "You've successfully revoked permissions.", icon: s2 ? CircleAlert : CircleCheckBig, iconVariant: s2 ? "error" : "success", onBack: m, watermark: true } : { title: "Revoke offline access to wallet", subtitle: `By confirming, ${n3} will no longer be able to use this wallet on your behalf when you are not online.`, icon: Ban, primaryCta: { label: "Confirm", onClick: a }, secondaryCta: { label: "Deny", onClick: c }, onBack: m, watermark: true });
var d = { component: () => {
  let { data: o } = g(), r = se(), { closePrivyModal: t } = l(), [u, d2] = (0, import_react.useState)(false), [f, y] = (0, import_react.useState)(), { onRevoke: k, onSuccess: h2, onError: j } = o.delegatedActions.revoke, w = async () => {
    u ? h2() : j(f ?? new s("User declined revoking access to their delegated wallet.")), t({ shouldCallAuthOnSuccess: false });
  };
  return (0, import_react.useEffect)((() => {
    if (!u && !f) return;
    let e2 = setTimeout(w, h);
    return () => clearTimeout(e2);
  }), [u, f]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { appName: r.name, success: u, error: f, onRevoke: async () => {
    try {
      await k(), d2(true);
    } catch (e2) {
      y(e2);
    }
  }, onDeny: () => {
    w();
  }, onClose: w });
} };
export {
  d as DelegatedActionsRevokeScreen,
  p as DelegatedActionsRevokeScreenView,
  d as default
};
