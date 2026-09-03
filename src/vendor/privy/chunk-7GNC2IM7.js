import {
  b as b2,
  g as g2,
  h,
  k as k2,
  u as u2
} from "./chunk-NPNO3C2E.js";
import {
  ShieldCheckIcon_default
} from "./chunk-KLSNZW7N.js";
import "./chunk-VIKQUUIS.js";
import {
  l as l2
} from "./chunk-EIEISV5R.js";
import {
  w
} from "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import {
  b
} from "./chunk-RPCD4HAF.js";
import {
  vi
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
import {
  _,
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
import {
  u
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  ft,
  gt,
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

// node_modules/@privy-io/react-auth/dist/esm/PasswordRecoveryScreen-D4Zf4LcH.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var b3 = { component: () => {
  let [s, a] = (0, import_react.useState)(true), { authenticated: c, user: b4 } = k(), { walletProxy: C, closePrivyModal: I, createAnalyticsEvent: P, client: S } = l(), { navigate: T, data: W, onUserCloseViaDialogOrKeybindRef: _2 } = g(), [E, M] = (0, import_react.useState)(void 0), [R, H] = (0, import_react.useState)(""), [U, V] = (0, import_react.useState)(false), { entropyId: F, entropyIdVerifier: L, onCompleteNavigateTo: N, onSuccess: O, onFailure: $ } = W.recoverWallet, q = (e2 = "User exited before their wallet could be recovered") => {
    I({ shouldCallAuthOnSuccess: false }), $("string" == typeof e2 ? new u(e2) : e2);
  };
  _2.current = q, (0, import_react.useEffect)((() => {
    if (!c) return q("User must be authenticated and have a Privy wallet before it can be recovered");
  }), [c]);
  return (0, import_jsx_runtime.jsxs)(w, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Header, { icon: ShieldCheckIcon_default, title: "Enter your password", subtitle: "Please provision your account on this new device. To continue, enter your recovery password.", showClose: true, onClose: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(g2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, { type: s ? "password" : "text", onChange: (e2) => ((e3) => {
    e3 && M(e3);
  })(e2.target.value), disabled: U, style: { paddingRight: "2.3rem" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u2, { style: { right: "0.75rem" }, children: s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b2, { onClick: () => a(false) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k2, { onClick: () => a(true) }) })] }), !!R && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k3, { children: R })] }) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(w.Footer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.HelpText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Why is this necessary?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You previously set a password for this wallet. This helps ensure only you can access it" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Actions, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { loading: U || !C, disabled: !E, onClick: async () => {
    V(true);
    let e2 = await S.getAccessToken(), r2 = _(b4, F);
    if (!e2 || !r2 || null === E) return q("User must be authenticated and have a Privy wallet before it can be recovered");
    try {
      P({ eventName: "embedded_wallet_recovery_started", payload: { walletAddress: r2.address } }), await C?.recover({ accessToken: e2, entropyId: F, entropyIdVerifier: L, recoveryPassword: E }), H(""), N ? T(N) : I({ shouldCallAuthOnSuccess: false }), O?.(r2), P({ eventName: "embedded_wallet_recovery_completed", payload: { walletAddress: r2.address } });
    } catch (e3) {
      vi(e3) ? H("Invalid recovery password, please try again.") : H("An error has occurred, please try again.");
    } finally {
      V(false);
    }
  }, $hideAnimations: !F && U, children: "Recover your account" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.Watermark, {})] })] });
} };
var x = gt.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
var k3 = gt.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`;
var A = gt(b)`
  ${({ $hideAnimations: e2 }) => e2 && ft`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;
export {
  b3 as PasswordRecoveryScreen,
  b3 as default
};
