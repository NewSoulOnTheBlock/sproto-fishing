import {
  a
} from "./chunk-XR73WYAF.js";
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
import {
  H
} from "./chunk-H64F7Q3M.js";
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
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import {
  i,
  r,
  s
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  g2 as g,
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

// node_modules/@privy-io/react-auth/dist/esm/CrossAppAuthScreen-BB5FEyXW.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var j = ({ providerApp: t2, success: o2, error: i2, onClose: s2 }) => {
  let { title: a2, subtitle: n2 } = (0, import_react.useMemo)((() => o2 ? { title: `Successfully connected with ${t2.name}`, subtitle: "You're good to go!" } : i2 ? { title: "Authentication failed", subtitle: i2.message } : { title: `Connecting to ${t2.name}`, subtitle: `Please check the pop-up from ${t2.name} to continue` }), [o2, i2, t2.name]);
  return (0, import_jsx_runtime.jsx)(n, { title: a2, subtitle: n2, icon: t2.logoUrl, iconVariant: "loading", iconLoadingStatus: { success: o2, fail: !!i2 }, onBack: s2, watermark: true });
};
var h = { component: () => {
  let r3 = se(), { data: f, navigate: h2, setModalData: v, onUserCloseViaDialogOrKeybindRef: y } = g2(), { crossAppAuthFlow: g3, updateWallets: A, closePrivyModal: S, createAnalyticsEvent: b } = l(), { logout: w } = H(), [C, I] = (0, import_react.useState)({}), x = f?.crossAppAuth, T = new s(`There was an issue connecting your ${x?.name} account. Please try again.`), k = new li((async (e2) => {
    if (x?.popup) try {
      let t2 = await g3({ appId: e2, popup: x.popup, action: x.action, disableSignup: x.disableSignup });
      I({ data: t2 });
    } catch (e3) {
      if (e3 instanceof s) I({ error: e3 });
      else if (e3 instanceof r) {
        if (e3.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && e3.data?.data?.nonce) return v({ accountTransfer: { nonce: e3.data?.data?.nonce, account: e3.data?.data?.subject, displayName: e3.data?.data?.account?.displayName, linkMethod: `privy:${x.appId}`, embeddedWalletAddress: e3.data?.data?.otherUser?.embeddedWalletAddress, oAuthUserInfo: e3.data?.data?.otherUser?.oAuthUserInfo } }), void h2("LinkConflictScreen");
        x.popup && x.popup.close(), I({ error: T });
      } else I({ error: T });
    }
    else I({ error: T });
  })), U = () => {
    C.data && (A(), x?.onSuccess(C.data), S({ shouldCallAuthOnSuccess: true, isSuccess: true })), x?.onError(C.error ?? new s("User canceled flow")), S({ shouldCallAuthOnSuccess: false, isSuccess: false });
  };
  return y.current = U, (0, import_react.useEffect)((() => {
    x?.appId?.length && k.execute(x.appId);
  }), [x?.appId]), (0, import_react.useEffect)((() => {
    if (!C.data) return;
    let e2 = C.data;
    if (r3.legal.requireUsersAcceptTerms && !e2.hasAcceptedTerms) {
      let e3 = setTimeout((() => {
        h2("AffirmativeConsentScreen");
      }), g);
      return () => clearTimeout(e3);
    }
    if (a(e2, r3.embeddedWallets)) {
      let e3 = setTimeout((() => {
        v({ createWallet: { onSuccess: () => {
        }, onFailure: (e4) => {
          console.error(e4), b({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e4, provider: `privy:${x?.appId}`, screen: "CrossAppAuthScreen" } }), w();
        }, callAuthOnSuccessOnClose: true } }), h2("EmbeddedWalletOnAccountCreateScreen");
      }), g);
      return () => clearTimeout(e3);
    }
    let t2 = setTimeout(U, g);
    return () => clearTimeout(t2);
  }), [C.data]), x?.appId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { providerApp: { id: x?.appId, logoUrl: x?.logoUrl, name: x?.name }, success: !!C.data, error: C.error, onClose: U }) : (console.warn("Missing data for Screen"), null);
}, isShownBeforeReady: true };
export {
  h as CrossAppAuthScreen,
  j as CrossAppAuthScreenView,
  h as default
};
