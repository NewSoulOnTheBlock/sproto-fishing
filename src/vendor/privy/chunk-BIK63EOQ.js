import {
  ie,
  le,
  oe,
  ye
} from "./chunk-DCASXHLY.js";
import {
  d,
  l,
  m,
  o,
  p,
  w
} from "./chunk-U2USAYHI.js";
import "./chunk-UAWFTMBF.js";
import "./chunk-KN76ETVM.js";
import "./chunk-NH742RS2.js";
import "./chunk-KDNCCGXL.js";
import "./chunk-RN3TQCJB.js";
import {
  ShieldCheckIcon_default
} from "./chunk-KLSNZW7N.js";
import {
  require_browser
} from "./chunk-4BHOTT2W.js";
import "./chunk-ZZ27HOQC.js";
import "./chunk-WLRIHMQB.js";
import "./chunk-PZMIZGJH.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-KZ4OUGKV.js";
import "./chunk-LBSQU3JN.js";
import "./chunk-P6V6I22J.js";
import "./chunk-MK657462.js";
import "./chunk-WSIRTJK5.js";
import "./chunk-EIEISV5R.js";
import "./chunk-623CPBW2.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  L,
  QuestionMarkCircleIcon_default,
  b,
  i
} from "./chunk-RPCD4HAF.js";
import "./chunk-HBMGI65L.js";
import "./chunk-2IJQ6F4F.js";
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
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  a2 as a
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

// node_modules/@privy-io/react-auth/dist/esm/MfaAuthEnrollmentFlowScreen-C8dk5MeO.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem/utils";
import "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var import_qrcode = __toESM(require_browser(), 1);
var M = { component: () => {
  let { user: M2, ready: b2 } = k(), { data: I, onUserCloseViaDialogOrKeybindRef: S } = g(), A = se(), [P, R] = (0, import_react.useState)(null), [x, E] = (0, import_react.useState)(null), [F, T] = (0, import_react.useState)(null), [L2, U] = (0, import_react.useState)(false), [B, W] = (0, import_react.useState)(false), [q, H] = (0, import_react.useState)(), O = async () => {
    q ? X(q) : M2 ? await z({ user: M2 }) : X(Error("Must be logged in to manage MFA")), setTimeout((() => {
      R(null), E(null);
    }), 500);
  };
  if (S.current = O, !I?.mfaEnroll) throw Error("Missing modal data for MFA enrollment screen.");
  let { onFailure: X, onSuccess: z, onBack: D, mfaMethods: Q, verify: V, generateTotpSecret: $, enrollTotp: K, unenrollTotp: N, enrollPasskey: Y } = I.mfaEnroll, Z = M2?.mfaMethods.includes("sms"), G = M2?.mfaMethods.includes("totp"), J = M2?.mfaMethods.includes("passkey"), _ = !!M2?.phone, ee = M2?.linkedAccounts.filter(((e2) => "passkey" === e2.type)).map(((e2) => e2.credentialId)) ?? [];
  function oe2() {
    R(null), E(null), H(void 0);
  }
  async function te(e2 = ee) {
    try {
      H(void 0), W(true);
      let o3 = await Y(e2);
      return await z({ user: o3 });
    } catch (e3) {
      H(e3);
    } finally {
      W(false), U(false);
    }
  }
  if (!b2 || !M2 || !A) return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: O, backFn: D }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(oe, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {})] });
  if ("sms" === P) return null;
  if ("totp" === P) return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { backFn: oe2, onClose: O }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionMarkCircleIcon_default, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { children: "Remove authenticator app verification?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { children: ["MFA adds an extra layer of security to your ", A?.name, " account. Make sure you have other methods to secure your account."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { $warn: true, onClick: async function() {
    try {
      H(void 0), W(true);
      let e2 = await N();
      return await z({ user: e2 });
    } catch (e2) {
      H(e2);
    } finally {
      W(false), R(null);
    }
  }, loading: B, children: "Remove" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {})] });
  if ("passkey" === P) {
    let i2 = I.mfaEnroll.shouldUnlinkOnUnenrollMfa ?? true;
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { backFn: oe2, onClose: O }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionMarkCircleIcon_default, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { children: "Are you sure you want to remove this passkey?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { children: i2 ? "Removing your passkey will remove as both a verification method and a login method." : "Removing your passkey will remove as a verification method." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { $warn: true, onClick: async function() {
      try {
        H(void 0), W(true);
        let e2 = await Y([]);
        return await z({ user: e2 });
      } catch (e2) {
        H(e2);
      } finally {
        W(false), R(null);
      }
    }, loading: B, children: "Remove" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {})] });
  }
  return 0 !== Q.length || Z || G || J ? "sms" === x ? null : "totp" === x && F ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ye, { onClose: O, onReset: oe2, submitEnrollmentWithTotp: (e2) => (async function(e3) {
    try {
      H(void 0), W(true);
      let o3 = await K(e3);
      return await z({ user: o3 });
    } catch (e4) {
      H(e4);
    } finally {
      W(false), R(null);
    }
  })(e2.mfaCode), error: q, totpInfo: { ...F, appName: A?.name || "Privy" } }) : "passkey" === x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(le, { onReset: oe2, onClose: O, submitEnrollmentWithPasskey: te }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ie, { showIntro: true, userMfaMethods: M2.mfaMethods, appMfaMethods: A.mfa.methods, userHasAuthSms: _, backFn: D, handleSelectMethod: async function(e2) {
    H(void 0);
    try {
      await V();
    } catch (e3) {
      return void H(e3);
    }
    return "totp" === e2 ? (E(e2), T(null), void $().then((({ totpSecret: e3, totpAuthUrl: o3 }) => {
      T({ authUrl: o3, secret: e3 });
    })).catch((() => {
      T(null), oe2();
    }))) : "passkey" === e2 && 1 === ee.length ? await te() : void E(e2);
  }, isTotpLoading: "totp" === x && !F, isPasskeyLoading: L2, error: q, onClose: O, setRemovingMfaMethod: async function(e2) {
    H(void 0);
    try {
      await V();
    } catch (e3) {
      return void H(e3);
    }
    R(e2);
  } }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: O, backFn: D }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheckIcon_default, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, { children: "Add more security" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { children: [A?.name, " does not have any verification methods enabled."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: O, children: "Close" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {})] });
} };
export {
  M as MfaAuthEnrollmentFlowScreen,
  M as default
};
