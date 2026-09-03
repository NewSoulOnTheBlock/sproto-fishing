import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  CircleX
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  Mi,
  ji
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

// node_modules/@privy-io/react-auth/dist/esm/EmbeddedWalletConnectingScreen-D4nVpPq8.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var p = ({ connectionFailed: r2, onClose: o2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, r2 ? { title: "Something went wrong", subtitle: "We're on it. Please try again later.", icon: CircleX, iconVariant: "error", primaryCta: { label: "Close", onClick: o2 }, watermark: true } : { title: "Connecting to your wallet", subtitle: "Please wait...", iconVariant: "loading", showClose: true, onClose: o2, watermark: false });
var d = { component: () => {
  let { authenticated: t, user: c } = k(), { client: d2, closePrivyModal: u, createAnalyticsEvent: y, walletProxy: v } = l(), { navigate: j, data: h, setModalData: f, onUserCloseViaDialogOrKeybindRef: w } = g(), b = (0, import_react.useMemo)((() => Date.now()), []), [g2, C] = (0, import_react.useState)(false), { onCompleteNavigateTo: A, onFailure: I, shouldForceMFA: k2, entropyId: x, entropyIdVerifier: P, recoveryMethod: S, connectingWalletAddress: T, isUnifiedWallet: F = false } = h?.connectWallet ?? {}, M = (e2) => {
    g2 || (C(true), I("string" == typeof e2 ? Error(e2) : e2));
  };
  (0, import_react.useEffect)((() => {
    let e2;
    return t ? v ? ((async () => {
      let t2 = await d2.getAccessToken();
      if (!t2) return M("User must be authenticated and have a Privy wallet before it can be connected");
      try {
        if (!F) {
          if (!x || !P) return M("For on-device first-class chain wallets, entropyId and entropyIdVerifier are required");
          await v.connect({ accessToken: t2, entropyId: x, entropyIdVerifier: P });
        }
        k2 && await v.verifyMfa({ accessToken: t2 });
        let r2 = (Date.now() - b) / 1e3;
        "EmbeddedWalletKeyExportScreen" === A && r2 < 1 ? e2 = setTimeout((() => {
          j(A, false);
        }), 1e3 * (1 - r2)) : j(A, false);
      } catch (e3) {
        if (Mi(e3) && "privy" === S) {
          let e4 = await d2.getAccessToken();
          if (!e4) return M("User must be authenticated and have a Privy wallet before it can be recovered");
          try {
            y({ eventName: "embedded_wallet_pinless_recovery_started", payload: { walletAddress: T } });
            let t3 = await v?.recover({ accessToken: e4, entropyId: x, entropyIdVerifier: P });
            t3?.entropyId || M(Error("Unable to recover wallet")), A ? j(A) : u({ shouldCallAuthOnSuccess: false }), y({ eventName: "embedded_wallet_recovery_completed", payload: { walletAddress: T } }), j(A);
          } catch (e5) {
            M("An error has occurred, please try again.");
          }
        } else Mi(e3) && "privy" !== S && "privy-v2" !== S ? (f({ ...h, recoverWallet: { entropyId: x, entropyIdVerifier: P, onCompleteNavigateTo: A, onFailure: I }, recoveryOAuthStatus: { provider: S, action: "recover", isInAccountCreateFlow: false, shouldCreateEth: false, shouldCreateSol: false } }), j(ji(S))) : M(e3);
      }
    })(), () => clearTimeout(e2)) : void 0 : M("User must be authenticated and have a Privy wallet before it can be connected");
  }), [t, c, v]);
  let V = () => {
    M("User exited before wallet could be connected"), u({ shouldCallAuthOnSuccess: false });
  };
  return w.current = V, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, { connectionFailed: g2, onClose: V });
} };
export {
  d as EmbeddedWalletConnectingScreen,
  p as EmbeddedWalletConnectingView,
  d as default
};
