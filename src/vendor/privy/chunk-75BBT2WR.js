import {
  G
} from "./chunk-LMW2KUFR.js";
import "./chunk-52LU76MD.js";
import "./chunk-5ZNWNVDZ.js";
import "./chunk-EPRUW2QI.js";
import "./chunk-JFVQGRVD.js";
import "./chunk-KDNCCGXL.js";
import "./chunk-RN3TQCJB.js";
import "./chunk-KLSNZW7N.js";
import "./chunk-GKBGICJ5.js";
import "./chunk-YR2QF5GA.js";
import "./chunk-CPWWWFCX.js";
import "./chunk-76DEAMJ5.js";
import "./chunk-TFIKZDBU.js";
import "./chunk-OBV6VSAS.js";
import {
  require_browser
} from "./chunk-4BHOTT2W.js";
import "./chunk-3DDSRDFL.js";
import "./chunk-3FZKW4WI.js";
import "./chunk-VIKQUUIS.js";
import "./chunk-SGK7A445.js";
import "./chunk-PLXAKKNQ.js";
import "./chunk-QM2ZBVYE.js";
import "./chunk-QB7GMZ7D.js";
import "./chunk-GIDVL7W3.js";
import "./chunk-P6V6I22J.js";
import "./chunk-JU4Q6HQT.js";
import "./chunk-34BVSFPO.js";
import "./chunk-E74RKHPY.js";
import "./chunk-EOSGBBZ3.js";
import "./chunk-ZKJ6AAV3.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import "./chunk-HBMGI65L.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import {
  u
} from "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import {
  i,
  t
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

// node_modules/@privy-io/react-auth/dist/esm/ConnectOnlyLandingScreen-Co7aLWoh.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
var import_qrcode = __toESM(require_browser(), 1);
import "viem";
import "viem/chains";
import "viem/utils";
var s = { component: () => {
  let { closePrivyModal: s2 } = l(), { data: c, navigate: p } = g(), d = se(), u2 = u(), j = c?.externalConnectWallet?.description, C = (0, import_react.useRef)(c?.externalConnectWallet?.walletList ?? d.appearance.walletList), E = (0, import_react.useRef)(c?.externalConnectWallet?.walletChainType ?? d.appearance.walletChainType);
  return (0, import_jsx_runtime.jsx)(G, { walletList: C.current, walletChainType: E.current, preSelectedWalletId: c?.externalConnectWallet?.preSelectedWalletId, hideHeader: c?.externalConnectWallet?.hideHeader, onBack: c?.funding ? () => p("FundingMethodSelectionScreen") : void 0, onClose: () => {
    u2("connectWallet", "onError", i.GENERIC_CONNECT_WALLET_ERROR), s2();
  }, onConnect: ({ connector: e2, wallet: t3 }) => {
    u2("connectWallet", "onSuccess", { wallet: t3 });
    let o = c?.externalConnectWallet?.onCompleteNavigateTo;
    o ? p(o({ address: t3.address, walletClientType: e2?.walletClientType, walletChainType: e2?.chainType })) : s2();
  }, onConnectError: (e2) => {
    e2 instanceof t ? (console.warn(e2.cause ? e2.cause : e2.message), u2("connectWallet", "onError", e2.privyErrorCode || i.GENERIC_CONNECT_WALLET_ERROR)) : (console.warn(e2), u2("connectWallet", "onError", i.UNKNOWN_CONNECT_WALLET_ERROR));
  }, customDescription: j, app: d, connectOnly: true });
}, isUnauthenticatedScreem: true };
export {
  s as ConnectOnlyLandingScreen,
  s as default
};
