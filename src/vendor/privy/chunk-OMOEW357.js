import {
  oe,
  require_es5,
  ue
} from "./chunk-Y5WAQ3VP.js";
import "./chunk-NPNO3C2E.js";
import "./chunk-RSVXHVWT.js";
import "./chunk-3FZKW4WI.js";
import "./chunk-VIKQUUIS.js";
import "./chunk-SGK7A445.js";
import "./chunk-I3STI6GC.js";
import "./chunk-7VTS4IUD.js";
import "./chunk-EIEISV5R.js";
import "./chunk-RPCD4HAF.js";
import {
  f
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import {
  h,
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-H7FAMYXB.js";
import {
  c,
  u
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
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
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/EmbeddedWalletPasswordUpdateScreen-BZGshP_G.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_fast_password_entropy = __toESM(require_es5(), 1);
var u2 = { component: () => {
  let [u3, y] = (0, import_react.useState)(null), [w, h2] = (0, import_react.useState)(false), [v, g2] = (0, import_react.useState)(null), [f2, I] = (0, import_react.useState)(""), { authenticated: M, user: _ } = k(), { client: j, walletProxy: A, refreshSessionAndUser: R, closePrivyModal: C, createAnalyticsEvent: P } = l(), { navigate: b, data: x, onUserCloseViaDialogOrKeybindRef: S } = g(), E = se(), { onSuccess: k2, onFailure: N } = x.setWalletPassword, D = h(_), L = "user-passcode" === u3?.recoveryMethod, O = "user-passcode" === D?.recoveryMethod;
  (0, import_react.useEffect)((() => {
    M || (b("LandingScreen"), N(new c("User must be authenticated before setting a password on a Privy wallet")));
  }), [M]);
  let T = () => v ? (N(v), void C({ shouldCallAuthOnSuccess: false })) : L ? (k2(u3), void C({ shouldCallAuthOnSuccess: false })) : (N(new u("Exited before password was added to wallet")), void C({ shouldCallAuthOnSuccess: false }));
  S.current = T;
  return (0, import_jsx_runtime.jsx)(ue, { appName: E?.name || "privy", config: { initiatedBy: "user", onCancel: T }, error: v ? "An error has occurred, please try again." : void 0, buttonLoading: w, buttonHideAnimations: false, password: f2, isResettingPassword: O, onPasswordGenerate: () => I(oe()), onPasswordChange: I, onSubmit: async () => {
    L ? (k2(u3), C({ shouldCallAuthOnSuccess: false })) : (h2(true), g2(null), await (async () => {
      let e2 = await j.getAccessToken();
      if (e2 && _ && D?.address && f2 && A) try {
        P({ eventName: "embedded_wallet_set_recovery_started", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: O } });
        let { entropyId: o2, entropyIdVerifier: r2 } = f(_);
        if (!(await A.setRecovery({ accessToken: e2, entropyId: o2, entropyIdVerifier: r2, recoveryPassword: f2, recoveryMethod: "user-passcode" })).entropyId) return g2(new u("Error setting password on privy wallet")), void P({ eventName: "embedded_wallet_set_recovery_failed", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: O, reason: "error setting password" } });
        let t = await R(), a = h(t);
        if (!a) return g2(new u("Error setting password on privy wallet")), void P({ eventName: "embedded_wallet_set_recovery_failed", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: O, reason: "wallet disconnected" } });
        y(a), P({ eventName: "embedded_wallet_set_recovery_completed", payload: { walletAddress: D.address, existingRecoveryMethod: D.recoveryMethod, targetRecoveryMethod: "user-passcode", isResettingPassword: O } });
      } catch (e3) {
        console.warn(e3), g2(e3 instanceof Error ? e3 : Error("Error setting password on privy wallet")), P({ eventName: "embedded_wallet_set_password_failed", payload: { walletAddress: D.address, reason: e3 } });
      }
    })(), h2(false));
  }, onClose: T });
} };
export {
  u2 as EmbeddedWalletPasswordUpdateScreen,
  u2 as default
};
