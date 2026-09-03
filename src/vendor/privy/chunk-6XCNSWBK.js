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
  Bi,
  Lr,
  cr,
  lr,
  or
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
import {
  d
} from "./chunk-JC23ZM22.js";
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
  _i,
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

// node_modules/@privy-io/react-auth/dist/esm/EmbeddedWalletOnAccountCreateScreen-bdHVdUix.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var v = ({ errorMessage: r2, onClose: o2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, r2 ? { title: "Something went wrong", subtitle: r2, icon: CircleX, iconVariant: "error", primaryCta: { label: "Close", onClick: o2 }, watermark: true } : { title: "Creating your wallet", subtitle: "Please wait...", iconVariant: "loading", watermark: false });
var g2 = { component: () => {
  let { setModalData: t, navigate: j, data: g3, onUserCloseViaDialogOrKeybindRef: f } = g(), C = se(), [b, x] = (0, import_react.useState)(""), { embeddedWallets: S } = se(), { authenticated: W, user: k2 } = k(), { closePrivyModal: A, walletProxy: O, client: P } = l(), { onSuccess: I, onFailure: M, callAuthOnSuccessOnClose: R, shouldCreateEth: U, shouldCreateSol: E } = g3.createWallet, L = d(), T = k2 ? L(cr)?.shouldCreateWallet({ user: k2 }) : void 0, K = !!k2 && lr(k2, C.embeddedWallets.ethereum.createOnLogin, T), F = !!k2 && or(k2, C.embeddedWallets.solana.createOnLogin, T), V = "legacy-embedded-wallets-only" === C.embeddedWallets.mode && true === C?.embeddedWallets.requireUserOwnedRecoveryOnCreate, [q, D] = (0, import_react.useState)(null), { create: X } = Lr(), z = U ?? K, H = E ?? F, Q = new li((async () => {
    let e2 = await P.getAccessToken();
    if (k2 && e2 && O) try {
      let e3, t2 = await _i(k2.id, "ethereum"), r2 = await _i(k2.id, "solana");
      if (z && H) e3 = await X({ chainType: "ethereum", walletIndex: 0, latestUser: k2, idempotencyKey: t2 }), e3 = await X({ chainType: "solana", walletIndex: 0, latestUser: e3.user, idempotencyKey: r2 });
      else if (H) e3 = await X({ chainType: "solana", walletIndex: 0, latestUser: k2, idempotencyKey: r2 });
      else {
        if (!z) return void A({ shouldCallAuthOnSuccess: R });
        e3 = await X({ chainType: "ethereum", walletIndex: 0, latestUser: k2, idempotencyKey: t2 });
      }
      D(e3), j("EmbeddedWalletCreatedScreen");
    } catch (e3) {
      x(e3.message);
    }
  }));
  return (0, import_react.useEffect)((() => W && k2 ? V ? (t({ ...g3, createWallet: { ...g3.createWallet, shouldCreateEth: z, shouldCreateSol: H }, recoverySelection: { ...g3?.recoverySelection, isInAccountCreateFlow: true, shouldCreateEth: z, shouldCreateSol: H } }), j(Bi({ walletAction: "create", showAutomaticRecovery: false, availableRecoveryMethods: S.userOwnedRecoveryOptions, legacySetWalletPasswordFlow: false, isResettingPassword: false }))) : void Q.execute() : (j("LandingScreen"), void M(Error("User must be authenticated before creating a Privy wallet")))), [V, W]), f.current = () => null, (0, import_jsx_runtime.jsx)(v, { errorMessage: b || void 0, onClose: () => {
    q ? (I(q), A({ shouldCallAuthOnSuccess: R })) : (M(new u("User wallet creation failed")), A({ shouldCallAuthOnSuccess: false }));
  } });
} };
export {
  g2 as EmbeddedWalletOnAccountCreateScreen,
  v as EmbeddedWalletOnAccountCreateView,
  g2 as default
};
