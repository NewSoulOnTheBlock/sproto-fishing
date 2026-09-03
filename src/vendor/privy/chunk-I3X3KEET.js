import {
  D
} from "./chunk-U2XMU6HI.js";
import "./chunk-PLXAKKNQ.js";
import "./chunk-JU4Q6HQT.js";
import "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
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
import {
  Mt
} from "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import {
  I
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  y
} from "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  g2 as g
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

// node_modules/@privy-io/react-auth/dist/esm/ConnectOnlyStatusScreen-BBoF7l3i.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem";
import "viem/chains";
import "viem/utils";
import "viem/accounts";
var u = ({ walletLogo: t2, success: o2, errorMessage: r2, title: n2, subtitle: s, onRetry: a, onUseDifferentWallet: m, onBack: c, numRetries: p, maxRetries: u2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: n2, subtitle: s, icon: t2, iconVariant: "loading", iconLoadingStatus: { success: o2, fail: !!r2 }, primaryCta: r2 === y.ERROR_USER_EXISTS ? { label: "Use a different wallet", onClick: m } : !o2 && r2?.retryable && p < u2 ? { label: "Retry", onClick: a, disabled: !r2?.retryable || p >= u2 } : !o2 && r2 && p >= u2 ? { label: "Use a different wallet", onClick: m } : void 0, onBack: c, watermark: true });
var d = { component: () => {
  let i, { navigateBack: l2, navigate: d2, lastScreen: w, currentScreen: j, data: y2, setModalData: f } = g2(), { walletConnectionStatus: g3, closePrivyModal: v } = l(), [h, k] = (0, import_react.useState)(void 0), [C, b] = (0, import_react.useState)(0), x = I(g3?.connector?.walletClientType || "unknown"), S = "connected" === g3?.status, T = "switching_to_supported_chain" === g3?.status;
  (0, import_react.useEffect)((() => {
    if (S) {
      let e2;
      if (y2?.externalConnectWallet?.onCompleteNavigateTo) {
        let t2 = y2.externalConnectWallet.onCompleteNavigateTo, o2 = g3.connectedWallet?.address;
        e2 = setTimeout((() => {
          if (y2.funding && g3.connector) {
            let e3 = g3.connector.wallets.find(((e4) => e4.address === o2));
            f({ ...y2, funding: { ...y2.funding, connectedWallet: e3 } });
          }
          d2(t2({ address: o2, walletClientType: g3.connector?.walletClientType, walletChainType: g3.connector?.chainType }));
        }), g);
      } else e2 = setTimeout(v, g);
      return () => clearTimeout(e2);
    }
  }), [S]);
  (0, import_react.useEffect)((() => {
    var e2;
    g3?.connectError && (e2 = g3?.connectError, k(D(e2)));
  }), [g3]);
  let R = g3?.connector?.connectorType || "injected", W = g3?.connector?.walletClientType || "unknown", M = x?.metadata?.shortName || x?.name || g3?.connector?.walletBranding.name || "Browser Extension", B = x?.image_url?.md || g3?.connector?.walletBranding.icon || ((t2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mt, { ...t2 })), E = "Browser Extension" === M ? M.toLowerCase() : M;
  i = S ? `Successfully connected with ${E}` : h ? h.message : T ? "Switching networks" : `Waiting for ${E}`;
  let _ = "Don\u2019t see your wallet? Check your other browser windows.";
  return S ? _ = "You\u2019re good to go!" : C >= 2 && h ? _ = "Unable to connect wallet" : h ? _ = h.detail : T ? _ = "Switch your wallet to the requested network." : "metamask" === W && import_react_device_detect.isMobile ? _ = "Click to continue to open and connect MetaMask." : "metamask" === W ? _ = "For the best experience, connect only one wallet at a time." : "wallet_connect_v2" === R ? _ = "Open your mobile wallet app to continue" : "coinbase_wallet" === R && (_ = "Confirm in the Coinbase app/popup to continue."), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(u, { walletName: M, walletLogo: B, success: S, errorMessage: h, title: i, subtitle: _, onRetry: () => {
    b(C + 1), k(void 0), g3?.connectRetry();
  }, onUseDifferentWallet: l2, onBack: j === w ? void 0 : l2, numRetries: C, maxRetries: 2 });
} };
export {
  d as ConnectOnlyStatusScreen,
  u as ConnectOnlyStatusScreenView,
  d as default
};
