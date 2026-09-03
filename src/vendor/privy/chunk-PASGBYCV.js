import {
  e as e2,
  t
} from "./chunk-TFIKZDBU.js";
import {
  e
} from "./chunk-QB7GMZ7D.js";
import {
  EnvelopeIcon_default
} from "./chunk-GIDVL7W3.js";
import {
  e as e3
} from "./chunk-EIEISV5R.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  Mail
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  b,
  w
} from "./chunk-RPCD4HAF.js";
import {
  za
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import {
  W
} from "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  r
} from "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
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
import "./chunk-WN6MHJGS.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-JQL3YESK.js";
import "./chunk-GVC7K3K7.js";
import "./chunk-CMSQRRQ2.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/UpdateEmailScreen-B3ncP2Ej.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
import "viem/chains";
var k2 = /* @__PURE__ */ (0, import_react.forwardRef)(((o, i) => {
  let [s2, f] = (0, import_react.useState)(""), [y, w2] = (0, import_react.useState)(""), [k3, E2] = (0, import_react.useState)(false), { authenticated: x2, user: A } = k(), { initUpdateEmail: C } = l(), { navigate: P, setModalData: I, currentScreen: M } = g(), { enabled: T, token: q } = za(), L = se(), U = r(s2) && (L.disablePlusEmails && s2.includes("+") ? (y || w2("Please enter a valid email address without a '+'."), false) : (y && w2(""), true)), D = k3 || !U, W2 = () => {
    D || (!T || q || x2 ? (async (e5) => {
      if (!A?.email) throw Error("User is required to have an email address to update it.");
      E2(true);
      try {
        await C({ oldAddress: A.email.address, newAddress: s2, captchaToken: e5 }), P("AwaitingPasswordlessCodeScreen");
      } catch (e6) {
        I({ errorModalData: { error: e6, previousScreen: M || "LandingScreen" } }), P("ErrorScreen");
      }
      E2(false);
    })(q) : (I({ captchaModalData: { callback: (e5) => {
      if (!A?.email) throw Error("User is required to have an email address to update it.");
      return C({ oldAddress: A.email.address, newAddress: s2, captchaToken: e5 });
    }, userIntentRequired: false, onSuccessNavigateTo: "AwaitingPasswordlessCodeScreen", onErrorNavigateTo: "ErrorScreen" } }), P("CaptchaScreen")));
  };
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(b2, { children: [y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "0.25rem", textAlign: "left" }, children: y }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(S, { $error: !!y, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(W, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ref: i, id: "email-input", type: "email", placeholder: "your@email.com", onChange: (e5) => f(e5.target.value), onKeyUp: (e5) => {
    "Enter" === e5.key && W2();
  }, value: s2, autoComplete: "email" }), o.stacked ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { isSubmitting: k3, onClick: W2, disabled: D, children: "Submit" })] })] }), o.stacked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { loadingText: null, loading: k3, disabled: D, onClick: W2, style: { width: "100%" }, children: "Submit" }) : null] });
}));
var b2 = t;
var S = e2;
var E = ({ title: e5 = "Update your email", subtitle: r3 = "Add the email address you'd like to use going forward. We'll send you a confirmation code" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: e5, subtitle: r3, icon: EnvelopeIcon_default, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k2, { stacked: true }) }) });
var x = { component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(E, {}) };
export {
  x as UpdateEmailScreen,
  E as UpdateEmailScreenView,
  x as default
};
