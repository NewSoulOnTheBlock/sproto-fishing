import {
  c
} from "./chunk-7562YI5E.js";
import {
  a
} from "./chunk-XR73WYAF.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  Ya,
  qa,
  za
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
import {
  A,
  i
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

// node_modules/@privy-io/react-auth/dist/esm/TelegramAuthScreen-BZuJTvF1.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var v = ({ success: t2, errorMessage: r2, onRetry: o }) => {
  let i2 = t2 ? "Successfully connected with Telegram" : r2 ? r2.message : "Verifying connection to Telegram";
  return (0, import_jsx_runtime.jsx)(n, { title: i2, subtitle: t2 ? "You're good to go!" : r2 ? r2.detail : "Just a few moments more", icon: c, iconVariant: "loading", iconLoadingStatus: { success: t2, fail: !!r2 }, secondaryCta: r2?.retryable && o ? { label: "Retry", onClick: o } : void 0, watermark: true });
};
var j = { component: () => {
  let { authenticated: y, logout: g3, ready: j2, user: f } = k(), { setModalData: h, navigate: A2, resetNavigation: T, data: b } = g2(), S = se(), { initLoginWithTelegram: w, loginWithTelegram: C, updateWallets: E, setReadyToTrue: R, closePrivyModal: W, createAnalyticsEvent: x, getAuthMeta: _ } = l(), [k2, L] = (0, import_react.useState)(false), [M, I] = (0, import_react.useState)(void 0), D = za();
  async function N() {
    try {
      let e2 = await (async function() {
        let e3;
        if (!y) {
          if (D.enabled && "error" === D.status) throw new qa(D.error, null, i.CAPTCHA_FAILURE);
          return D.enabled && "success" !== D.status && (D.execute(), e3 = await D.waitForResult()), e3;
        }
      })();
      await C({ captchaToken: e2 }), L(true), R(true);
    } catch (e2) {
      if (e2?.privyErrorCode === i.ALLOWLIST_REJECTED) return I(void 0), T(), void A2("AllowlistRejectionScreen");
      if (e2?.privyErrorCode === i.USER_LIMIT_REACHED) return console.error(new A(e2).toString()), I(void 0), T(), void A2("UserLimitReachedScreen");
      if (e2?.privyErrorCode === i.USER_DOES_NOT_EXIST) return I(void 0), T(), void A2("AccountNotFoundScreen");
      if (e2?.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED && e2.data?.data?.nonce) return I(void 0), T(), h({ accountTransfer: { nonce: e2.data?.data?.nonce, account: e2.data?.data?.subject, telegramAuthResult: _()?.telegramAuthResult, telegramWebAppData: _()?.telegramWebAppData, displayName: e2.data?.data?.account?.displayName, linkMethod: "telegram", embeddedWalletAddress: e2.data?.data?.otherUser?.embeddedWalletAddress } }), void A2("LinkConflictScreen");
      let { retryable: t2, detail: r2 } = Ya(e2);
      I({ retryable: t2, detail: r2, message: "Authentication failed" });
    }
  }
  (0, import_react.useEffect)((() => {
    N();
  }), []), (0, import_react.useEffect)((() => {
    if (!(j2 && y && k2 && f)) return;
    if (S?.legal.requireUsersAcceptTerms && !f.hasAcceptedTerms) {
      let e3 = setTimeout((() => {
        A2("AffirmativeConsentScreen");
      }), g);
      return () => clearTimeout(e3);
    }
    if (a(f, S.embeddedWallets)) {
      let e3 = setTimeout((() => {
        h({ createWallet: { onSuccess: () => {
        }, onFailure: (e4) => {
          console.error(e4), x({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e4, provider: "telegram", screen: "TelegramAuthScreen" } }), g3();
        }, callAuthOnSuccessOnClose: true } }), A2("EmbeddedWalletOnAccountCreateScreen");
      }), g);
      return () => clearTimeout(e3);
    }
    E();
    let e2 = setTimeout((() => W({ shouldCallAuthOnSuccess: true, isSuccess: true })), g);
    return () => clearTimeout(e2);
  }), [j2, y, k2, f]);
  return (0, import_jsx_runtime.jsx)(v, { success: k2, errorMessage: M, onRetry: M?.retryable ? async () => {
    try {
      I(void 0), b?.telegramAuthModalData?.seamlessAuth || await w(void 0, b?.login?.disableSignup), await N();
    } catch (e2) {
      let { retryable: t2, detail: r2 } = Ya(e2);
      I({ retryable: t2, detail: r2, message: "Authentication failed" });
    }
  } : void 0 });
}, isCaptchaRequired: true, isShownBeforeReady: true };
export {
  j as TelegramAuthScreen,
  v as TelegramAuthScreenView,
  j as default
};
