import {
  d,
  e,
  o as o3
} from "./chunk-BSI7KE7Z.js";
import {
  o as o2
} from "./chunk-I3STI6GC.js";
import {
  L as L2,
  b,
  h2
} from "./chunk-RPCD4HAF.js";
import {
  Lr,
  xa
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import {
  u
} from "./chunk-PANVPNZ2.js";
import {
  f
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import {
  li
} from "./chunk-2DL5TNP5.js";
import {
  L,
  M,
  N,
  a2 as a,
  i2,
  s2
} from "./chunk-NFV3EFLQ.js";
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
import {
  i,
  o,
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

// node_modules/@privy-io/react-auth/dist/esm/RecoveryOAuthStatusScreen-jdOdGY8y.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
async function N2({ url: e3, popup: t2, provider: r2 }) {
  return t2.location = e3, new Promise(((e4, r3) => {
    function o5() {
      t2?.close(), window.removeEventListener("message", a3);
    }
    function a3(t3) {
      t3.data && ("PRIVY_OAUTH_RESPONSE" === t3.data.type && t3.data.stateCode && t3.data.authorizationCode && (e4(t3.data), o5()), "https://cdn.apple-cloudkit.com" === t3.origin && t3.data.ckSession && (e4({ type: "PRIVY_OAUTH_RESPONSE", ckWebAuthToken: t3.data.ckSession }), o5()), "PRIVY_OAUTH_ERROR" === t3.data.type && (r3(t3.data.error), o5()));
    }
    window.addEventListener("message", a3);
  }));
}
async function I({ api: e3, provider: t2, stateCode: r2, codeVerifier: o5, authorizationCode: a3 }) {
  if (!a3 || !r2) throw new s("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");
  if ("undefined" === a3) throw new s("User denied confirmation during OAuth flow");
  try {
    return (await e3.post(N, { authorization_code: a3, state_code: r2, code_verifier: o5, provider: t2 })).access_token;
  } catch (e4) {
    let t3 = o(e4);
    if (t3.privyErrorCode) throw new s(t3.message || "Invalid code during OAuth flow.", void 0, t3.privyErrorCode);
    if ("User denied confirmation during OAuth flow" === t3.message) throw new s("Invalid code during oauth flow.", void 0, i.OAUTH_USER_DENIED);
    throw new s("Invalid code during OAuth flow.", void 0, i.UNKNOWN_AUTH_ERROR);
  }
}
async function M2({ api: e3, provider: t2 }) {
  let r2 = a(), o5 = i2(), a3 = await s2(r2);
  try {
    return "icloud" === t2 ? { url: (await e3.post(M, { client_type: "web" })).url } : { url: (await e3.post(L, { redirect_to: window.location.href, code_challenge: a3, state_code: o5 })).url, codeVerifier: r2, stateCode: o5, provider: t2 };
  } catch (e4) {
    throw o(e4);
  }
}
var U = { "google-drive": { name: "Google Drive", component: e }, icloud: { name: "iCloud", component: d } };
var W = { component: () => {
  let { logout: y } = k(), { navigate: f2, setModalData: _, data: A } = g2(), { closePrivyModal: g3, createAnalyticsEvent: E } = l(), { execute: C } = (() => {
    let { client: e3, walletProxy: t2, refreshSessionAndUser: r2 } = l(), { data: o5 } = g2(), { user: a3 } = k(), i4 = u(), { create: s3 } = Lr();
    return { execute: async ({ provider: c, action: n, popup: l2, shouldCreateEth: d2, shouldCreateSol: p }) => {
      let m, u2;
      if (!e3) throw new s("Missing client");
      function y2(t3) {
        if (!t3 && e3) throw e3.createAnalyticsEvent({ eventName: "recovery_oauth_error", payload: { error: "Unable to open recovery OAuth popup", provider: c } }), new s("Recovery OAuth failed");
      }
      switch (c) {
        case "google-drive": {
          let t3, r3, { url: o6, codeVerifier: a4, stateCode: i5 } = await M2({ api: e3.api, provider: c });
          y2(o6);
          try {
            let a5 = await N2({ url: o6, popup: l2, provider: c });
            if (t3 = a5.stateCode, r3 = a5.authorizationCode, t3 !== i5) throw e3.createAnalyticsEvent({ eventName: "possible_phishing_attempt", payload: { provider: c, storedStateCode: i5 ?? "", returnedStateCode: t3 ?? "" } }), new s("Unexpected auth flow. This may be a phishing attempt.", void 0, i.OAUTH_UNEXPECTED);
          } catch (t4) {
            throw e3.createAnalyticsEvent({ eventName: "recovery_oauth_error", payload: { error: t4.toString(), provider: c } }), new s("Recovery OAuth failed");
          }
          [m, u2] = await Promise.all([e3.getAccessToken(), I({ api: e3.api, provider: c, codeVerifier: a4, stateCode: t3, authorizationCode: r3 })]);
          break;
        }
        case "icloud": {
          let { url: t3 } = await M2({ api: e3.api, provider: c });
          y2(t3);
          let { ckWebAuthToken: r3 } = await N2({ url: t3, popup: l2, provider: c });
          u2 = r3, m = await e3.getAccessToken();
        }
      }
      if (!t2) throw new s("Cannot connect to wallet proxy");
      if (!m) throw new s("Unable to authorize user");
      switch (n) {
        case "recover": {
          let r3 = o5?.recoverWallet?.entropyId, a4 = o5?.recoverWallet?.entropyIdVerifier;
          if (!r3 || !a4) throw new s("Recovery OAuth failed");
          e3.createAnalyticsEvent({ eventName: "embedded_wallet_recovery_started", payload: { walletAddress: r3, recoveryMethod: c } }), await t2.recover({ accessToken: m, entropyId: r3, entropyIdVerifier: a4, recoveryAccessToken: u2 }), e3.createAnalyticsEvent({ eventName: "embedded_wallet_recovery_completed", payload: { walletAddress: r3, recoveryMethod: c } });
          break;
        }
        case "create-wallet": {
          let t3;
          if (e3.createAnalyticsEvent({ eventName: "embedded_wallet_creation_started" }), d2 && p) t3 = await s3({ recoveryMethod: c, recoveryAccessToken: u2, chainType: "ethereum", walletIndex: 0, latestUser: a3 }), t3 = await s3({ chainType: "solana", walletIndex: 0, latestUser: t3.user });
          else if (p) t3 = await s3({ recoveryMethod: c, recoveryAccessToken: u2, chainType: "solana", walletIndex: 0, latestUser: a3 });
          else {
            if (!d2) throw Error("Invalid args to create wallet");
            t3 = await s3({ recoveryMethod: c, recoveryAccessToken: u2, chainType: "ethereum", walletIndex: 0, latestUser: a3 });
          }
          if (!t3) throw i4("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to create wallet");
          e3.createAnalyticsEvent({ eventName: "embedded_wallet_creation_completed", payload: { walletAddress: t3.account.address } }), i4("createWallet", "onSuccess", { wallet: t3.account });
          break;
        }
        case "set-recovery": {
          let o6 = h(a3);
          if (!o6) throw i4("setWalletRecovery", "onError", i.EMBEDDED_WALLET_NOT_FOUND), Error("Embedded wallet not found");
          e3.createAnalyticsEvent({ eventName: "embedded_wallet_set_recovery_started", payload: { walletAddress: o6.address, existingRecoveryMethod: o6.recoveryMethod, targetRecoveryMethod: c } });
          let { entropyId: s4, entropyIdVerifier: n2 } = f(a3);
          await t2.setRecovery({ accessToken: m, entropyId: s4, entropyIdVerifier: n2, recoveryMethod: c, recoveryAccessToken: u2 });
          let l3 = h(await r2());
          if (!l3) throw i4("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to set recovery on wallet");
          e3.createAnalyticsEvent({ eventName: "embedded_wallet_set_recovery_completed", payload: { walletAddress: o6.address, existingRecoveryMethod: o6.recoveryMethod, targetRecoveryMethod: c } }), i4("setWalletRecovery", "onSuccess", { method: c, wallet: l3 });
          break;
        }
        default:
          throw new s("Unsupported recovery action");
      }
    } };
  })(), [O, x] = (0, import_react.useState)(false), { provider: W2, action: P, isInAccountCreateFlow: D, shouldCreateEth: V, shouldCreateSol: L3 } = A?.recoveryOAuthStatus ?? {}, [z, H] = (0, import_react.useState)(void 0), [$, F] = (0, import_react.useState)("create-wallet" === P);
  if ("user-passcode" === W2) throw Error("RecoveryOAuthScreen should never be called with a wallet that specifies recoveryMethod: `user-passcode`");
  let B = U[W2].name, G = U[W2].component, K = A?.recoverWallet?.onCompleteNavigateTo, Y = new li((async (e3 = "create-wallet") => (F(true), new Promise(((t2, r2) => {
    setTimeout((async () => {
      try {
        let r3 = window.open();
        await C({ provider: W2, action: e3, popup: r3, shouldCreateEth: V, shouldCreateSol: L3 }), x(true), t2();
      } catch (t3) {
        H({ message: `${"recover" === e3 ? "Recovery" : "Back up"} with ${B} unsuccessful`, detail: "recover" === P ? `Please verify that you are selecting the ${B} account associated with your backup.` : "", retryable: true }), r2();
      }
    }), 0);
  })))));
  (0, import_react.useEffect)((() => {
    "recover" !== P && Y.execute(D ? "create-wallet" : "set-recovery");
  }), []), (0, import_react.useEffect)((() => {
    if (!O) return;
    let e3 = setTimeout((() => {
      D ? (_({ createWallet: { onSuccess: () => {
      }, onFailure: (e4) => {
        E({ eventName: "embedded_wallet_creation_failure_logout", payload: { error: e4, screen: "RecoveryOAuthScreen" } }), y();
      }, callAuthOnSuccessOnClose: true, shouldCreateEth: false, shouldCreateSol: false } }), f2("EmbeddedWalletCreatedScreen")) : g3({ shouldCallAuthOnSuccess: false });
    }), g);
    return () => clearTimeout(e3);
  }), [O]);
  let q = (0, import_react.useCallback)((async () => {
    await Y.execute("recover"), K ? f2(K) : x(true);
  }), []), X = "google-drive" === W2 ? "Google Drive" : "Apple iCloud", J = O && `Successfully ${"recover" === P ? "recovered" : "backed up"} with ${X}.` || z && z.message || `${"recover" === P ? "Recovering" : "Backing up"} with ${X}...`, Q = z ? z.detail : "";
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L2, {}), $ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(o3, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o2, { title: J, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(G, { style: { width: "38px", height: "38px" } }), description: Q }), z && z?.retryable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: () => {
    xa(), H(void 0), "create-wallet" === P ? Y.execute("create-wallet") : q();
  }, disabled: !O && !z?.retryable, children: "Try again" }) : null] }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(o3, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o2, { title: "Confirm it's really you", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(G, { style: { height: 42, width: 48 } }), description: `To confirm your identity, please log in to ${X} where your account is backed up.` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(b, { onClick: q, children: ["Confirm with ", X] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h2, {})] });
} };
export {
  W as RecoveryOAuthScreen,
  W as default
};
