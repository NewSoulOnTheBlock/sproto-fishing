import {
  $
} from "./chunk-JIT2Z6LY.js";
import {
  E,
  T,
  V,
  b as b2,
  c as c2,
  d,
  l as l3,
  p as p2,
  s,
  u,
  w,
  x
} from "./chunk-U2USAYHI.js";
import {
  i as i3
} from "./chunk-OY52FFSF.js";
import {
  CalendarIcon_default
} from "./chunk-JFVQGRVD.js";
import {
  DevicePhoneMobileIcon_default,
  FingerPrintIcon_default
} from "./chunk-RN3TQCJB.js";
import {
  ShieldCheckIcon_default
} from "./chunk-KLSNZW7N.js";
import {
  ExclamationTriangleIcon_default
} from "./chunk-SGK7A445.js";
import {
  c
} from "./chunk-2HYLPLOV.js";
import {
  PhoneIcon_default
} from "./chunk-P6V6I22J.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import {
  L,
  b,
  f,
  i as i2
} from "./chunk-RPCD4HAF.js";
import {
  Ai,
  Ei,
  Zi
} from "./chunk-2IJQ6F4F.js";
import {
  I,
  W
} from "./chunk-H64F7Q3M.js";
import {
  p
} from "./chunk-LTBS5V6F.js";
import {
  Pi
} from "./chunk-2DL5TNP5.js";
import {
  l as l2
} from "./chunk-COXZQBSX.js";
import {
  gt,
  i2 as i,
  l
} from "./chunk-THXMRURJ.js";
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/to-ui-error-BHvWW4ag.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { toHex as F } from "viem";
var K = ({ handleClose: r2, mfaMethods: h, onSelect: p3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n, { title: "Verify your identity", subtitle: "Choose a verification method", icon: ShieldCheckIcon_default, iconVariant: "subtle", onClose: r2, showClose: true, watermark: true, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(u, { children: [h.includes("totp") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: () => p3("totp"), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevicePhoneMobileIcon_default, {}) }), "Authenticator app"] }, "totp"), h.includes("sms") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: () => p3("sms"), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon_default, {}) }), "SMS"] }, "sms"), h.includes("passkey") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I, { onClick: () => p3("passkey"), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerPrintIcon_default, {}) }), "Passkey"] }, "passkey")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, {})] });
var O = ({ pendingTransaction: e2 }) => {
  let { wallets: r2 } = p(), { walletProxy: n2, rpcConfig: i4, chains: t, appId: a, nativeTokenSymbolForChainId: s2 } = l(), [c3, l4] = (0, import_react.useState)(null), [d2, m] = (0, import_react.useState)(e2), { tokenPrice: h } = c(d2.chainId), p3 = s2(e2.chainId) || "ETH", u2 = (0, import_react.useMemo)((() => r2.find(((e3) => "privy" === e3.walletClientType))), [r2]);
  return (0, import_react.useEffect)((() => {
    (async function() {
      if (!n2 || !u2) return d2;
      let e3 = l2(d2.chainId, t, i4, { appId: a }), o2 = await Pi(d2, e3, u2.address);
      return l4(F(BigInt(o2.gas ?? 0))), o2;
    })().then(m).catch(console.error);
  }), [n2]), u2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { from: u2.address, to: d2.to, txn: d2, gas: c3 ?? void 0, tokenPrice: h, tokenSymbol: p3 }) }) : null;
};
var Q = gt.div`
  width: 100%;
  padding: 1rem 0;
`;
var R = ({ hasBlockingError: n2, error: i4, onClose: t, onBack: c3, handleSubmit: l4, account: d2, submitSuccess: m }) => {
  let { pendingTransaction: T2 } = l();
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: t }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i3, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { success: m, fail: !!i4 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i4 ? ExclamationTriangleIcon_default : E, { style: { width: "38px", height: "38px" } })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l3, { style: { marginTop: "1rem" }, children: "Verifying with passkey" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(x, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheckIcon_default, {}) }), "Approve this action using your touch, face, PIN, or hardware key."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(x, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarIcon_default, {}) }), "You last added a passkey on", " ", d2?.firstVerifiedAt?.toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }), "."] })] }), T2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { pendingTransaction: T2 }) }), i4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, { style: { marginTop: "1.25rem" }, children: i4.message }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { disabled: n2, onClick: l4, style: { margin: "1.25rem auto 0" }, children: "Try again" })] }), c3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { style: { marginTop: "1rem" }, onClick: c3, children: "Choose another method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, {})] });
};
var U = ({ selectedMethod: i4, submitSuccess: a, hasBlockingError: c3, onClose: l4, onBack: d2, handleSubmitCode: m }) => {
  let h = se(), { pendingTransaction: u2 } = l();
  switch (i4) {
    case "sms":
      return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: l4 }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon_default, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l3, { children: "Enter verification code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, { success: a, disabled: c3, onChange: m }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { children: ["To continue, please enter the 6-digit code sent to your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "mobile device" })] }), u2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { pendingTransaction: u2 })] }), d2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { theme: h?.appearance.palette.colorScheme, onClick: d2, children: "Choose another method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { onClick: l4, children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, {})] });
    case "totp":
      return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: l4 }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevicePhoneMobileIcon_default, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l3, { children: "Enter verification code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, { success: a, disabled: c3, onChange: m }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { children: ["To continue, please enter the 6-digit code generated from your", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "authenticator app" })] }), u2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(O, { pendingTransaction: u2 })] }), d2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { theme: h?.appearance.palette.colorScheme, onClick: d2, children: "Choose another method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { onClick: l4, children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i2, {})] });
    default:
      return null;
  }
};
var X = (e2) => Ei(e2) ? { isBlocking: true, error: Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.") } : Zi(e2) ? { isBlocking: false, error: Error("The code you entered is not valid") } : Ai(e2) ? { isBlocking: true, error: Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.") } : (console.error(e2), { isBlocking: false, error: Error("Something went wrong.") });

export {
  K,
  R,
  U,
  X
};
