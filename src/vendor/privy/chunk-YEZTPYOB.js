import {
  a
} from "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  ExternalLink,
  FileCheck
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  v
} from "./chunk-RPCD4HAF.js";
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

// node_modules/@privy-io/react-auth/dist/esm/AffirmativeConsentScreen-B1ldNVhY.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var d = { component: () => {
  let { user: t2, logout: r } = k(), { onUserCloseViaDialogOrKeybindRef: o, setModalData: i, navigate: s } = g(), p = se(), { acceptTerms: d2, closePrivyModal: j2, createAnalyticsEvent: y } = l(), v2 = (e2) => {
    e2?.preventDefault(), j2({ shouldCallAuthOnSuccess: false }), r();
  };
  o.current = v2;
  return (0, import_jsx_runtime.jsx)(u, { termsAndConditionsUrl: p?.legal.termsAndConditionsUrl, privacyPolicyUrl: p?.legal.privacyPolicyUrl, onAccept: async (e2) => {
    e2?.preventDefault(), await d2(), t2 && a(t2, p.embeddedWallets) ? (i({ createWallet: { onSuccess: () => {
    }, onFailure: (e3) => {
      console.error(e3), y({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e3, screen: "AffirmativeConsentScreen" } }), r();
    }, callAuthOnSuccessOnClose: true } }), s("EmbeddedWalletOnAccountCreateScreen")) : j2();
  }, onDecline: v2 });
} };
var u = ({ termsAndConditionsUrl: i, privacyPolicyUrl: m, onAccept: n2, onDecline: a2, title: l2 = "One last step", subtitle: c = "By signing up, you agree to our terms and privacy policy." }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { title: l2, subtitle: c, icon: FileCheck, primaryCta: { label: "Accept", onClick: n2 }, secondaryCta: { label: "No thanks", onClick: a2 }, watermark: true, children: (i || m) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(j, { children: [i && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(v, { variant: "muted", href: i, target: "_blank", size: "lg", style: { justifyContent: "space-between" }, as: "a", children: ["View Terms", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { width: 16, height: 16, strokeWidth: 2.25 })] }), m && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(v, { variant: "muted", href: m, target: "_blank", size: "lg", style: { justifyContent: "space-between" }, as: "a", children: ["View Privacy Policy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { width: 16, height: 16, strokeWidth: 2.25 })] })] }) });
var j = gt.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: var(--screen-space);
`;
export {
  d as AffirmativeConsentScreen,
  u as AffirmativeConsentScreenView,
  d as default
};
