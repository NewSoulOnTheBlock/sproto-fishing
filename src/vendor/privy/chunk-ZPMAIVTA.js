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
  Lr
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
import {
  li
} from "./chunk-2DL5TNP5.js";
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
import {
  u
} from "./chunk-W22FA2JU.js";
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

// node_modules/@privy-io/react-auth/dist/esm/RecoveryPasswordCreateScreen-Dsm-bOlR.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var import_fast_password_entropy = __toESM(require_es5(), 1);
var u2 = { component: () => {
  let { navigate: u3, data: d, onUserCloseViaDialogOrKeybindRef: h } = g(), w = se(), [y, j] = (0, import_react.useState)(""), [v, f] = (0, import_react.useState)(false), [g2, C] = (0, import_react.useState)(), [I, x] = (0, import_react.useState)(null), { create: P } = Lr(), { authenticated: b, user: S } = k(), { closePrivyModal: A, isNewUserThisSession: k2, initializeWalletProxy: E } = l(), { onSuccess: M, onFailure: T, callAuthOnSuccessOnClose: U, shouldCreateEth: O, shouldCreateSol: W } = d.createWallet, [D, L] = (0, import_react.useState)(null), R = new li((async () => {
    try {
      let e2;
      if (O && W) e2 = await P({ recoveryMethod: "user-passcode", recoveryPassword: g2, chainType: "ethereum", walletIndex: 0, latestUser: S }), e2 = await P({ chainType: "solana", walletIndex: 0, latestUser: e2.user });
      else if (W) e2 = await P({ recoveryMethod: "user-passcode", recoveryPassword: g2, chainType: "solana", walletIndex: 0, latestUser: S });
      else {
        if (!O) throw Error("Invalid args to create wallet");
        e2 = await P({ recoveryMethod: "user-passcode", recoveryPassword: g2, chainType: "ethereum", walletIndex: 0, latestUser: S });
      }
      L(e2), k2 ? u3("EmbeddedWalletCreatedScreen") : (M(e2), A({ shouldCallAuthOnSuccess: U }));
    } catch (e2) {
      j(e2.message);
    }
  }));
  (0, import_react.useEffect)((() => {
    I || E(3e4).then(((e2) => x(e2)));
  }), [I]), (0, import_react.useEffect)((() => {
    if (!b || !S) return u3("LandingScreen"), void T(Error("User must be authenticated before creating a Privy wallet"));
  }), [b]), h.current = () => null;
  return (0, import_jsx_runtime.jsx)(ue, { config: { initiatedBy: "automatic" }, appName: w?.name || "privy", loading: !I, buttonLoading: v, buttonHideAnimations: !D && v, isResettingPassword: false, error: y, password: g2 || "", onClose: () => {
    D && "user-passcode" !== D.account.recoveryMethod ? (T(new u("User created a wallet but failed to set a password for it")), A({ shouldCallAuthOnSuccess: false })) : D ? (M(D), A({ shouldCallAuthOnSuccess: U })) : (T(new u("User wallet creation failed")), A({ shouldCallAuthOnSuccess: false }));
  }, onPasswordChange: C, onPasswordGenerate: () => C(oe()), onSubmit: async () => (f(true), R.execute().then((() => new Promise(((e2) => setTimeout(e2, 250))))).finally((() => f(false)))) });
} };
export {
  u2 as EmbeddedWalletPasswordCreateScreen,
  u2 as default
};
