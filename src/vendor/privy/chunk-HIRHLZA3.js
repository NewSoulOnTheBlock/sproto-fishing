import {
  a,
  t
} from "./chunk-TFIKZDBU.js";
import {
  n
} from "./chunk-PZMIZGJH.js";
import {
  e
} from "./chunk-QB7GMZ7D.js";
import {
  Mail
} from "./chunk-ELJY7WHB.js";
import {
  b,
  w
} from "./chunk-RPCD4HAF.js";
import {
  za
} from "./chunk-2IJQ6F4F.js";
import {
  D,
  W
} from "./chunk-H64F7Q3M.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import {
  r
} from "./chunk-COXZQBSX.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  gt,
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

// node_modules/@privy-io/react-auth/dist/esm/ConnectEmailForm-CXQpXhOs.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var j = /* @__PURE__ */ (0, import_react.forwardRef)(((t3, n2) => {
  let [u, v] = (0, import_react.useState)(t3.defaultValue || ""), [S, j2] = (0, import_react.useState)(""), [C, w2] = (0, import_react.useState)(false), { authenticated: P } = k(), { initLoginWithEmail: T } = l(), { navigate: M, setModalData: A, currentScreen: D2, data: I } = g(), { enabled: N, token: U } = za(), [F, L] = (0, import_react.useState)(false), { accountType: R } = D(), V = se(), W2 = r(u) && (V.disablePlusEmails && u.includes("+") ? (S || j2("Please enter a valid email address without a '+'."), false) : (S && j2(""), true)), q = C || !W2, H = () => {
    var e3;
    q || (A({ login: I?.login, inlineError: void 0 }), !N || U || P ? (e3 = U, w2(true), T({ email: u, captchaToken: e3, disableSignup: I?.login?.disableSignup, withPrivyUi: true }).then((() => {
      M("AwaitingPasswordlessCodeScreen");
    })).catch(((e4) => {
      A({ errorModalData: { error: e4, previousScreen: D2 || "LandingScreen" } }), M("ErrorScreen");
    })).finally((() => {
      w2(false);
    }))) : (A({ captchaModalData: { callback: (e4) => T({ email: u, captchaToken: e4, withPrivyUi: true }), userIntentRequired: false, onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen", onErrorNavigateTo: "ErrorScreen" } }), M("CaptchaScreen")));
  };
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(k2, { children: [S && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { display: "block", marginTop: "0.25rem", textAlign: "left" }, children: S }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(E, { stacked: t3.stacked, $error: !!S, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ref: n2, id: "email-input", className: "login-method-button", type: "email", placeholder: "your@email.com", onFocus: () => L(true), onChange: (e3) => v(e3.target.value), onKeyUp: (e3) => {
    "Enter" === e3.key && H();
  }, value: u, autoComplete: "email" }), "email" !== R || F ? t3.stacked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { isSubmitting: C, onClick: H, disabled: q, children: "Submit" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { color: "gray", children: "Recent" })] })] }), t3.stacked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { loadingText: null, loading: C, disabled: q, onClick: H, style: { width: "100%" }, children: "Submit" }) : null] });
}));
var k2 = t;
var E = a;
var x = gt(W)`
  display: inline-flex;
`;

export {
  j
};
