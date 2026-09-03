import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  CircleCheckBig
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  d,
  f,
  k
} from "./chunk-SLTT5NIH.js";
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
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/EmbeddedWalletCreatedScreen-DmqDg9Lg.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var u = ({ title: t2, description: r, onClose: s }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: t2, subtitle: r, icon: CircleCheckBig, iconVariant: "success", watermark: true, onBack: s });
var p = { component: () => {
  let { user: o } = k(), { closePrivyModal: m, isNewUserThisSession: p2, updateWallets: d2 } = l(), { data: f2, onUserCloseViaDialogOrKeybindRef: j } = g(), h2 = se(), { onSuccess: y, onFailure: x, callAuthOnSuccessOnClose: S } = f2.createWallet, k2 = () => {
    let e2 = d(o) ?? f(o);
    o && e2 ? (d2(), y({ user: o, account: e2 })) : x(Error("Failed to create wallet")), m({ shouldCallAuthOnSuccess: S });
  };
  (0, import_react.useEffect)((() => {
    let e2 = setTimeout(k2, h);
    return () => clearTimeout(e2);
  }), []), j.current = k2;
  let A = p2 && !((o?.linkedAccounts?.length ?? 0) > 1);
  return (0, import_jsx_runtime.jsx)(u, { title: A ? "Welcome" + (h2?.name ? ` to ${h2?.name}` : "") : "All set!", description: A ? "You've successfully created an account." : "Your account is secured.", onClose: k2 });
} };
export {
  p as EmbeddedWalletCreatedScreen,
  u as EmbeddedWalletCreatedScreenView,
  p as default
};
