import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  FingerprintPattern
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  za
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
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
import "./chunk-WN6MHJGS.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-JQL3YESK.js";
import "./chunk-GVC7K3K7.js";
import "./chunk-CMSQRRQ2.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/PasskeySelectSignupOrLogin-BjASVQL2.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var s = ({ title: o = "Log in or create a new account?", subtitle: i = "Create a new account with a passkey or use a passkey to log in to an existing account.", onSignup: r, onLogin: s2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: o, subtitle: i, icon: FingerprintPattern, primaryCta: { label: "Create new account", onClick: r }, secondaryCta: { label: "Log in with a passkey", onClick: s2 }, watermark: true });
var m = { component: () => {
  let { enabled: e, token: a } = za(), { navigate: m2, setModalData: n2 } = g(), { initSignupWithPasskey: p, initLoginWithPasskey: c } = l();
  return (0, import_jsx_runtime.jsx)(s, { onSignup: async () => {
    e && !a ? (n2({ passkeyAuthModalData: { passkeySignupFlow: true }, captchaModalData: { callback: (t2) => p({ captchaToken: t2, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "PasskeyStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), m2("CaptchaScreen")) : (await p({ withPrivyUi: true, captchaToken: a }), n2({ passkeyAuthModalData: { passkeySignupFlow: true } }), m2("PasskeyStatusScreen"));
  }, onLogin: async () => {
    e && !a ? (n2({ passkeyAuthModalData: { passkeySignupFlow: false }, captchaModalData: { callback: (t2) => c({ captchaToken: t2, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "PasskeyStatusScreen", onErrorNavigateTo: "ErrorScreen" } }), m2("CaptchaScreen")) : (await c({ withPrivyUi: true, captchaToken: a }), n2({ passkeyAuthModalData: { passkeySignupFlow: false } }), m2("PasskeyStatusScreen"));
  } });
} };
export {
  m as PasskeySelectSignupOrLogin,
  s as PasskeySelectSignupOrLoginView,
  m as default
};
