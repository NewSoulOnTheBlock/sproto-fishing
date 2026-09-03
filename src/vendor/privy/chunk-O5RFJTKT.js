import {
  d,
  e,
  o as o2,
  p
} from "./chunk-BSI7KE7Z.js";
import {
  PencilSquareIcon_default
} from "./chunk-5ZNWNVDZ.js";
import {
  LockClosedIcon_default
} from "./chunk-EPRUW2QI.js";
import {
  o
} from "./chunk-I3STI6GC.js";
import {
  L,
  QuestionMarkCircleIcon_default,
  b,
  h2
} from "./chunk-RPCD4HAF.js";
import {
  Di
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import {
  I
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
  h,
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
import "./chunk-WN6MHJGS.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-JQL3YESK.js";
import "./chunk-GVC7K3K7.js";
import "./chunk-CMSQRRQ2.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/RecoverySelectionScreen-C0IwDxnz.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var S = gt.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var x = { "google-drive": "Google Drive", icloud: "iCloud", "user-passcode": "password", privy: "Privy", "privy-v2": "Privy" };
var A = ({ onClose: t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { title: "Why do I need to secure my account?", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionMarkCircleIcon_default, { width: 48 }), description: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your app uses cryptography to secure your account. App secrets are split and encrypted so only you can access them." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To use this app on new devices, secure account secrets using a password, your Google or your Apple account. It\u2019s important you don\u2019t lose access to the method you choose." })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: t, children: "Select backup method" })] });
var P = { component: () => {
  let [s, n] = (0, import_react.useState)(false), { navigate: p2, lastScreen: C, navigateBack: P2, setModalData: b2, data: M, onUserCloseViaDialogOrKeybindRef: I2 } = g(), { user: O } = k(), { embeddedWallets: R } = se(), { closePrivyModal: W } = l(), F = h(O), E = null === F, { isInAccountCreateFlow: B, isResettingPassword: D, shouldCreateEth: G, shouldCreateSol: L2 } = M.recoverySelection, q = F && "privy" !== F.recoveryMethod, U = q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Your account is currently secured using", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: x[F?.recoveryMethod || "user-passcode"] }), "."] }) : "Select a method for logging in on new devices and recovering your account.";
  function H(e3) {
    b2({ recoveryOAuthStatus: { provider: e3, action: E ? "create-wallet" : "set-recovery", isInAccountCreateFlow: B, shouldCreateEth: G, shouldCreateSol: L2 } }), p2("RecoveryOAuthScreen");
  }
  function T() {
    M?.setWalletPassword?.onFailure(Error("User exited set recovery flow")), W({ shouldCallAuthOnSuccess: M?.setWalletPassword?.callAuthOnSuccessOnClose ?? false });
  }
  return I2.current = T, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: T, backFn: s ? () => n(false) : C ? P2 : void 0, infoFn: C || s ? void 0 : () => n(true) }, "header"), s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { onClose: () => n(false) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { title: q ? "Update backup method" : "Secure your account", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockClosedIcon_default, { width: 48 }), description: U }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o2, { children: R.userOwnedRecoveryOptions.filter(((e3) => !["icloud", "google-drive"].includes(F?.recoveryMethod || "") || e3 !== F?.recoveryMethod)).sort().map(((r2) => {
    switch (r2) {
      case "google-drive":
        return (0, import_jsx_runtime.jsxs)(I, { onClick: () => H("google-drive"), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { style: { width: 18 } }) }), "Back up to Google Drive"] }, r2);
      case "icloud":
        return (0, import_jsx_runtime.jsxs)(I, { onClick: () => H("icloud"), children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { style: { width: 24 } }) }), "Back up to Apple iCloud"] }, r2);
      case "user-passcode":
        return (0, import_jsx_runtime.jsxs)(I, { onClick: () => {
          p2(Di({ isCreatingWallet: E, skipSplashScreen: true }));
        }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilSquareIcon_default, { style: { width: 18 } }) }), D ? "Reset your" : "Set a", " password"] }, r2);
      default:
        return null;
    }
  })) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h2, {})] });
} };
export {
  P as RecoverySelectionScreen,
  P as default
};
