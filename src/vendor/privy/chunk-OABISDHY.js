import {
  LockClosedIcon_default
} from "./chunk-EPRUW2QI.js";
import {
  ExclamationTriangleIcon_default
} from "./chunk-SGK7A445.js";
import {
  r
} from "./chunk-ZZ27HOQC.js";
import {
  e
} from "./chunk-WLRIHMQB.js";
import {
  L,
  h2 as h,
  u
} from "./chunk-RPCD4HAF.js";
import {
  $
} from "./chunk-H64F7Q3M.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import {
  _,
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  gt,
  l
} from "./chunk-THXMRURJ.js";
import {
  g2 as g
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

// node_modules/@privy-io/react-auth/dist/esm/SetAutomaticRecoveryScreen-C8uIr5C-.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem/utils";
import "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
var g3 = gt.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${(e3) => e3.$color ?? "var(--privy-color-accent)"};
  border-radius: 50%;
`;
var w = { component: () => {
  let { user: d } = k(), { client: w2, walletProxy: j, refreshSessionAndUser: x, closePrivyModal: b } = l(), k2 = g2(), { entropyId: I, entropyIdVerifier: T } = k2.data?.recoverWallet ?? {}, [C, M] = (0, import_react.useState)(false), [S, P] = (0, import_react.useState)(null), [A, E] = (0, import_react.useState)(null);
  function U() {
    if (!C) {
      if (A) return k2.data?.setWalletPassword?.onFailure(A), void b();
      if (!S) return k2.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")), void b();
    }
  }
  k2.onUserCloseViaDialogOrKeybindRef.current = U;
  let W = !(!C && !S);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, A ? { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: U }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g3, { $color: "var(--privy-color-error)", style: { alignSelf: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExclamationTriangleIcon_default, { height: 38, width: 38, stroke: "var(--privy-color-error)" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "0.5rem" }, children: "Something went wrong" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { style: { minHeight: "2rem" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, { onClick: () => E(null), children: "Try again" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] } : { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: U }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockClosedIcon_default, { style: { width: "3rem", height: "3rem", alignSelf: "center" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { marginTop: "0.5rem" }, children: "Automatically secure your account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { style: { marginTop: "1rem" }, children: "When you log into a new device, you\u2019ll only need to authenticate to access your account. Never get logged out if you forget your password." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, { style: { minHeight: "2rem" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, { loading: C, disabled: W, onClick: () => (async function() {
    M(true);
    try {
      let e3 = await w2.getAccessToken(), r3 = _(d, I);
      if (!e3 || !j || !r3) return;
      if (!(await j.setRecovery({ accessToken: e3, entropyId: I, entropyIdVerifier: T, existingRecoveryMethod: r3.recoveryMethod, recoveryMethod: "privy" })).entropyId) throw Error("Unable to set recovery on wallet");
      let o2 = await x();
      if (!o2) throw Error("Unable to set recovery on wallet");
      let t = _(o2, r3.address);
      if (!t) throw Error("Unabled to set recovery on wallet");
      P(!!o2), setTimeout((() => {
        k2.data?.setWalletPassword?.onSuccess(t), b();
      }), g);
    } catch (e3) {
      E(e3);
    } finally {
      M(false);
    }
  })(), children: S ? "Success" : "Confirm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
export {
  w as SetAutomaticRecoveryScreen,
  w as default
};
