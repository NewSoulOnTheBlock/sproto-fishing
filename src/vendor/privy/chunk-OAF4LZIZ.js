import {
  j
} from "./chunk-FUH2YWOK.js";
import "./chunk-NH742RS2.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-QB7GMZ7D.js";
import "./chunk-VC62FKIT.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  CircleAlert,
  CircleCheckBig,
  CloudUpload
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import "./chunk-COXZQBSX.js";
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

// node_modules/@privy-io/react-auth/dist/esm/DelegatedActionsConsentScreen-Dm4Q81Ui.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/chains";
var u = ({ appName: s3, address: i2, success: n2, error: c, onAccept: m, onDecline: l2, onClose: p }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, n2 || c ? { title: c ? "Something went wrong" : "Success!", subtitle: c ? "Please try again." : `You've successfully granted delegated action permissions to ${s3}.`, icon: c ? CircleAlert : CircleCheckBig, iconVariant: c ? "error" : "success", onBack: p, watermark: true } : { title: "Enable offline access", subtitle: `By confirming, ${s3} will be able to use your wallet for you even when you're not around. You can revoke this later.`, icon: CloudUpload, primaryCta: { label: "Accept", onClick: m }, secondaryCta: { label: "Not now", onClick: l2 }, onBack: p, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { address: i2, title: "Wallet" }) });
var f = { component: () => {
  let { data: o } = g(), r = se(), { closePrivyModal: t } = l(), [a, d] = (0, import_react.useState)(false), [f2, j2] = (0, import_react.useState)(), { address: y, onDelegate: h2, onSuccess: g2, onError: w } = o.delegatedActions.consent, k = async () => {
    a ? g2() : w(f2 ?? new s("User declined delegating actions.")), t({ shouldCallAuthOnSuccess: false });
  };
  return (0, import_react.useEffect)((() => {
    if (!a && !f2) return;
    let e2 = setTimeout(k, h);
    return () => clearTimeout(e2);
  }), [a, f2]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, { appName: r.name, address: y, success: a, error: f2, onAccept: async () => {
    try {
      await h2(), d(true);
    } catch (e2) {
      j2(e2);
    }
  }, onDecline: () => {
    k();
  }, onClose: k });
} };
export {
  f as DelegatedActionsConsentScreen,
  u as DelegatedActionsConsentScreenView,
  f as default
};
