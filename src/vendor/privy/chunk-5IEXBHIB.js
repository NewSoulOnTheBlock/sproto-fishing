import {
  P,
  R,
  W,
  j,
  s as s3,
  u
} from "./chunk-PANVPNZ2.js";
import {
  f as f2,
  l as l2
} from "./chunk-LTBS5V6F.js";
import {
  G,
  H,
  I,
  a2 as a,
  i2,
  s2
} from "./chunk-NFV3EFLQ.js";
import {
  d,
  f,
  h,
  k,
  o,
  p,
  v
} from "./chunk-SLTT5NIH.js";
import {
  b,
  w
} from "./chunk-COXZQBSX.js";
import {
  i,
  o as o2,
  s
} from "./chunk-W22FA2JU.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  Bn,
  O2 as O,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/popup/dist/esm/index.mjs
var e = ({ w: e3, h: t3 }) => {
  let n = window.screenLeft === void 0 ? window.screenX : window.screenLeft, r2 = window.screenTop === void 0 ? window.screenY : window.screenTop, i3 = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, a2 = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, o3 = i3 / window.screen.availWidth, s4 = a2 / window.screen.availHeight;
  return `toolbar=0,location=0,menubar=0,height=${t3},width=${e3},popup=1,left=${(i3 - e3) / 2 / o3 + n},top=${(a2 - t3) / 2 / s4 + r2}`;
};
var t = (t3) => window.open(t3?.location, void 0, e({ w: 440, h: 680 }));

// node_modules/@privy-io/react-auth/dist/esm/usePrivy-CjyyDm5P.mjs
var import_react = __toESM(require_react(), 1);
import { toHex as U } from "viem";
var N = class {
  async authenticate() {
    if (!this.api) throw new s("Auth flow has no API instance");
    try {
      return await this.api.post(H, { authorization_code: this.meta.authorizationCode, state_code: this.meta.stateCode, code_verifier: this.meta.codeVerifier, provider: this.meta.provider, mode: this.meta.disableSignup ? "no-signup" : "login-or-sign-up" });
    } catch (e3) {
      throw o2(e3);
    }
  }
  async link() {
    if (!this.api) throw new s("Auth flow has no API instance");
    try {
      return await this.api.post(I, { authorization_code: this.meta.authorizationCode, state_code: this.meta.stateCode, code_verifier: this.meta.codeVerifier, provider: this.meta.provider });
    } catch (e3) {
      throw o2(e3);
    }
  }
  constructor(e3) {
    this.meta = e3;
  }
};
async function O2({ api: e3, requesterAppId: t3, providerAppId: r2 }) {
  let a2 = (await e3.get(`/api/v1/apps/${t3}/cross-app/connections`)).connections.find(((e4) => e4.provider_app_id === r2));
  if (!a2) throw new s("Invalid connected app");
  return { name: a2.provider_app_name, logoUrl: a2.provider_app_icon_url || void 0, apiUrl: a2.provider_app_custom_api_url, readOnly: a2.read_only, customAuthAuthorizeUrl: a2.provider_app_custom_auth_authorize_url, customAuthTransactUrl: a2.provider_app_custom_auth_transact_url };
}
async function q({ api: e3, appId: t3 }) {
  let r2 = a(), a2 = i2(), n = await s2(r2);
  try {
    let { url: s4 } = await e3.post(G, { provider: `privy:${t3}`, redirect_to: window.location.href, code_challenge: n, state_code: a2 });
    return { url: s4, stateCode: a2, codeVerifier: r2 };
  } catch (e4) {
    throw o2(e4);
  }
}
async function j2({ appId: e3, stateCode: t3, codeVerifier: r2, authorizationCode: a2, action: n, client: s4, disableSignup: i3 }) {
  if (!a2 || !t3) throw new s("[Cross-App AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");
  if ("undefined" === a2) throw new s("User denied confirmation during cross-app auth flow");
  try {
    let o3 = new N({ authorizationCode: a2, stateCode: t3, codeVerifier: r2, provider: `privy:${e3}`, disableSignup: !!i3 });
    s4.startAuthFlow(o3);
    let l3 = "link" === n ? await s4.link() : await s4.authenticate(), d2 = l3.oAuthTokens?.accessToken;
    return console.debug(), d2;
  } catch (e4) {
    let t4 = o2(e4);
    if (t4.privyErrorCode === i.ACCOUNT_TRANSFER_REQUIRED) throw t4;
    if (t4.privyErrorCode) throw new s(t4.message || "Invalid code during cross-app auth flow.", void 0, t4.privyErrorCode);
    if ("User denied confirmation during cross-app auth flow" === t4.message) throw new s("Invalid code during cross-app auth flow.", void 0, i.OAUTH_USER_DENIED);
    throw new s("Invalid code during cross-app auth flow.", void 0, i.UNKNOWN_AUTH_ERROR);
  }
}
var L = async ({ user: e3, accessToken: t3, proxy: r2, refreshSessionAndUser: a2, privy: n, appConfig: s4, recoverEmbeddedWallet: i3, setUser: d2, walletIndex: c, chainType: p2, recoveryMethod: u2, recoveryPassword: h2, recoveryAccessToken: m, idempotencyKey: y, additionalSigners: v2 }) => {
  if (0 === c) if ("user-controlled-server-wallets-only" === s4.embeddedWallets.mode) await Bn(n, { request: { chain_type: p2, additional_signers: v2 ? b(v2) : void 0 }, headers: y ? { "privy-idempotency-key": y } : void 0 });
  else if ("ethereum" === p2) {
    let a3 = f(e3);
    a3 && await i3({ address: a3.address }), await r2.create({ accessToken: t3, solanaAddress: a3?.address, recoveryMethod: u2, recoveryPassword: h2, recoveryAccessToken: m });
  } else {
    if ("solana" !== p2) throw Error("Invalid input to create wallet");
    {
      let a3 = d(e3);
      a3 && await i3({ address: a3.address }), await r2.createSolana({ accessToken: t3, ethereumAddress: a3?.address, recoveryMethod: u2, recoveryPassword: h2, recoveryAccessToken: m });
    }
  }
  else if ("user-controlled-server-wallets-only" === s4.embeddedWallets.mode) await Bn(n, { request: { chain_type: p2, additional_signers: v2 ? b(v2) : void 0 } });
  else {
    let { entropyId: a3, entropyIdVerifier: n2 } = f2(e3);
    await i3(), await r2.addWallet({ accessToken: t3, entropyId: a3, entropyIdVerifier: n2, chainType: p2, hdWalletIndex: c });
  }
  let w2 = await a2(), A = l2(w2, { chainType: p2, walletIndex: c })[0];
  return d2(w2), { user: w2, account: A };
};
var z = async ({ user: e3, address: t3, client: r2, request: a2, requesterAppId: n, reconnect: s4 }) => {
  r2.createAnalyticsEvent({ eventName: "cross_app_request_started", payload: { address: t3, method: a2.method } });
  let i3 = e3?.linkedAccounts.find(((e4) => "cross_app" === e4.type && (e4.embeddedWallets.some(((e5) => e5.address === t3)) || e4.smartWallets.some(((e5) => e5.address === t3)))));
  if (!e3 || !i3) throw r2.createAnalyticsEvent({ eventName: "cross_app_request_error", payload: { error: "Cannot request a signature with this wallet address", address: t3 } }), new s("Cannot request a signature with this wallet address");
  let o3 = r2.getProviderAccessToken(i3.providerApp.id), l3 = await O2({ api: r2.api, requesterAppId: n, providerAppId: i3.providerApp.id });
  if (!o3) {
    if (l3.readOnly) throw console.error("cannot transact against a read-only provider app"), new s("Cannot transact against a read-only provider app");
    await s4({ appId: i3.providerApp.id, action: "link" }) && (o3 = r2.getProviderAccessToken(i3.providerApp.id));
  }
  if (!o3) throw r2.createAnalyticsEvent({ eventName: "cross_app_request_error", payload: { error: "Transactions require a valid token", address: t3 } }), new s("Transactions require a valid token");
  let d2 = new URL(l3.customAuthTransactUrl || `${l3.apiUrl}/oauth/transact`);
  d2.searchParams.set("token", o3 || ""), d2.searchParams.set("request", K(a2));
  let c = t({ location: d2.href });
  if (!c) throw r2.createAnalyticsEvent({ eventName: "cross_app_request_error", payload: { error: "Missing token", address: t3 } }), new s("Failed to initialize signature request");
  return new Promise(((e4, n2) => {
    let s5 = setTimeout((() => {
      d3(), n2(new s("Request timeout")), r2.createAnalyticsEvent({ eventName: "cross_app_request_error", payload: { error: "Request timeout", address: t3 } });
    }), 12e4), o4 = setInterval((() => {
      c.closed && (d3(), n2(new s("User rejected request")), r2.createAnalyticsEvent({ eventName: "cross_app_request_error", payload: { error: "User rejected request", address: t3 } }));
    }), 300), l4 = (s6) => {
      s6.data && ("set" === s6.data.token?.action && void 0 !== s6.data.token?.value ? r2.storeProviderAccessToken(i3.providerApp.id, s6.data.token.value) : "clear" === s6.data.token?.action && r2.storeProviderAccessToken(i3.providerApp.id, null), "PRIVY_CROSS_APP_ACTION_RESPONSE" === s6.data.type && s6.data.result && (d3(), e4(s6.data.result), r2.createAnalyticsEvent({ eventName: "cross_app_request_success", payload: { address: t3, method: a2.method } })), "PRIVY_CROSS_APP_ACTION_ERROR" === s6.data.type && s6.data.error && (d3(), n2(s6.data.error), r2.createAnalyticsEvent({ eventName: "cross_app_request_error", payload: { error: s6.data.error, address: t3 } })));
    };
    window.addEventListener("message", l4);
    let d3 = () => {
      c.close(), clearInterval(o4), clearTimeout(s5), window.removeEventListener("message", l4);
    };
  }));
};
var K = (e3) => JSON.stringify({ content: { request: { request: F(e3, U) } }, timestamp: Date.now(), callbackUrl: window.origin });
var F = (e3, t3) => "bigint" == typeof e3 ? t3(e3) : Array.isArray(e3) ? e3.map(((e4) => F(e4, t3))) : e3 && "object" == typeof e3 ? Object.fromEntries(Object.entries(e3).map((([e4, r2]) => [e4, F(r2, t3)]))) : e3;
var B = () => {
  let { user: r2, getAccessToken: a2 } = k(), { client: n, setUser: s4, openModal: i3, inProgressAuthFlowRef: o3, inProgressLoginOrLinkMethodRef: l3 } = l(), c = se(), p2 = u(), { setModalData: u2 } = g(), h2 = (0, import_react.useCallback)(((e3) => r2?.linkedAccounts.some(((t3) => "cross_app" === t3.type && t3.smartWallets.some(((t4) => t4.address === e3)))) ?? false), [r2]), v2 = (0, import_react.useCallback)((async ({ appId: e3, action: t3, disableSignup: r3 }) => {
    let s5 = await a2();
    if ("link" === t3 && !s5) throw p2("linkAccount", "onError", i.MUST_BE_AUTHENTICATED, { linkMethod: `privy:${e3}` }), new s("User must be authenticated before linking an account.");
    if ("login" === t3 && s5) throw p2("login", "onError", i.UNKNOWN_AUTH_ERROR), new s("Attempted to log in, but user is already logged in. Use a `link` helper instead.");
    l3.current = `privy:${e3}`, o3.current = t3;
    let d2 = t();
    return n.createAnalyticsEvent({ eventName: "cross_app_auth_started", payload: { providerAppId: e3 } }), new Promise((async (a3, s6) => {
      let { name: o4, logoUrl: l4 } = await O2({ api: n.api, providerAppId: e3, requesterAppId: c.id });
      u2({ crossAppAuth: { appId: e3, name: o4, logoUrl: l4, action: t3, popup: d2, disableSignup: r3, onSuccess: a3, onError: s6 } }), i3("CrossAppAuthScreen");
    }));
  }), [a2, p2, l3, o3, n, c.id, u2, i3]), A = (0, import_react.useCallback)((async ({ subject: e3 }) => {
    let t3 = r2?.linkedAccounts.find(((t4) => "cross_app" === t4.type && t4.subject === e3))?.providerApp;
    if (!t3) throw new s("Invalid subject");
    n.storeProviderAccessToken(t3.id, null);
    let a3 = await n.unlinkOAuth(`privy:${t3.id}`, e3);
    return s4(a3), a3;
  }), [r2, n, s4]), f3 = (0, import_react.useCallback)(((e3, { address: t3, chainId: a3 }) => z({ user: r2, client: n, address: t3, requesterAppId: c.id, request: { method: h2(t3) ? "privy_signSmartWalletMessage" : "personal_sign", params: [e3, t3], chainId: a3 }, reconnect: v2 })), [r2, n, c.id, h2, v2]), _ = (0, import_react.useCallback)(((e3, { address: t3, chainId: a3 }) => {
    let s5 = w(e3);
    return z({ user: r2, client: n, address: t3, requesterAppId: c.id, request: { method: h2(t3) ? "privy_signSmartWalletTypedData" : "eth_signTypedData_v4", params: [t3, s5], chainId: a3 }, reconnect: v2 });
  }), [r2, n, c.id, h2, v2]), g2 = (0, import_react.useCallback)(((e3, { address: t3 }) => z({ user: r2, client: n, address: t3, requesterAppId: c.id, request: { method: h2(t3) ? "privy_sendSmartWalletTx" : "eth_sendTransaction", params: [e3], chainId: e3.chainId }, reconnect: v2 })), [r2, n, c.id, h2, v2]), k2 = (0, import_react.useCallback)(((e3, { address: t3 }) => z({ user: r2, client: n, address: t3, requesterAppId: c.id, request: { method: h2(t3) ? "privy_signSmartWalletTx" : "eth_signTransaction", params: [e3], chainId: e3.chainId }, reconnect: v2 })), [r2, n, c.id, h2, v2]);
  return (0, import_react.useMemo)((() => ({ startCrossAppAuthFlow: v2, unlinkCrossAppAccount: A, signMessageWithCrossAppWallet: f3, signTypedDataWithCrossAppWallet: _, sendTransactionWithCrossAppWallet: g2, signTransactionWithCrossAppWallet: k2 })), [v2, A, f3, _, g2, k2]);
};
var V = () => {
  let { client: t3, setUser: r2 } = l();
  return { unlink: (0, import_react.useCallback)((async ({ address: e3 }) => {
    let a2 = await t3.unlinkEmail(e3);
    return r2(a2), a2;
  }), [t3, r2]) };
};
var H2 = () => {
  let { client: t3, setUser: r2 } = l();
  return { unlink: (0, import_react.useCallback)((async ({ fid: e3 }) => {
    let a2 = await t3.unlinkFarcaster(e3);
    return r2(a2), a2;
  }), [t3, r2]) };
};
var $ = () => {
  let { client: t3, setUser: r2 } = l();
  return { unlink: (0, import_react.useCallback)((async ({ provider: e3, subject: a2 }) => {
    let n = await t3.unlinkOAuth(e3, a2);
    return r2(n), n;
  }), [t3, r2]) };
};
var Y = () => {
  let { client: t3, setUser: r2, walletProxy: a2 } = l(), { getAccessToken: n } = k(), s4 = se(), i3 = s4?.passkeys?.shouldUnenrollMfaOnUnlink ?? false;
  return { unlink: (0, import_react.useCallback)((async ({ credentialId: e3 }) => {
    let s5 = await n();
    if (!s5) throw Error("Must have valid access token to enroll in MFA");
    if (!a2) throw Error("Wallet proxy not initialized.");
    await a2.unlinkPasskeyAccount({ credentialId: e3, accessToken: s5, removeAsMfa: i3 });
    let o3 = await t3.getAuthenticatedUser();
    return r2(o3), o3;
  }), [i3, t3, n, r2, a2]) };
};
var G2 = () => {
  let { client: t3, setUser: r2 } = l();
  return { unlink: (0, import_react.useCallback)((async ({ phoneNumber: e3 }) => {
    let a2 = await t3.unlinkPhone(e3);
    return r2(a2), a2;
  }), [t3, r2]) };
};
var J = () => {
  let { client: t3, setUser: r2 } = l();
  return { unlink: (0, import_react.useCallback)((async ({ telegramUserId: e3 }) => {
    let a2 = await t3.unlinkTelegram(e3);
    return r2(a2), a2;
  }), [t3, r2]) };
};
var Q = (e3) => e3.reduce(((e4, t3) => !e4 || e4.walletIndex < t3.walletIndex ? t3 : e4), null);
var X = async ({ appConfig: e3, getAccessToken: t3, initializeWalletProxy: r2, user: a2, privy: n, emitPrivyEvent: s4, recoverEmbeddedWallet: i3, setModalData: o3, openModal: l3, setUser: d2, options: c, timeoutDuration: p2, refreshSessionAndUser: u2, chainType: h2, idempotencyKey: m, additionalSigners: y }) => {
  let [v2, A] = await Promise.all([r2(p2), t3()]);
  if (!A || !a2) throw s4("createWallet", "onError", i.MUST_BE_AUTHENTICATED), Error("User must be authenticated before creating a Privy wallet");
  if (!v2 && e3.customAuth?.enabled) throw s4("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to connect to wallet proxy");
  if (y && "user-controlled-server-wallets-only" !== e3.embeddedWallets.mode) throw new s("Specifying additionalSigners is only supported for TEE execution and this app uses on-device execution. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide");
  if (c && "walletIndex" in c && "number" == typeof c.walletIndex) {
    if ("user-controlled-server-wallets-only" === e3.embeddedWallets.mode) throw s4("createWallet", "onError", i.INVALID_DATA), Error("Invalid input, use `createAdditional` instead of `walletIndex` to create additional wallets.");
    return Z({ accessToken: A, appConfig: e3, privy: n, emitPrivyEvent: s4, openModal: l3, proxy: v2, refreshSessionAndUser: u2, recoverEmbeddedWallet: i3, setModalData: o3, user: a2, walletIndex: c.walletIndex, chainType: h2, setUser: d2, additionalSigners: y });
  }
  let f3 = c && "createAdditional" in c && c.createAdditional, _ = l2(a2, { chainType: h2 });
  if (_[0] && !f3) throw s4("createWallet", "onError", i.EMBEDDED_WALLET_ALREADY_EXISTS), Error("User already has an embedded wallet.");
  return Z({ accessToken: A, appConfig: e3, privy: n, emitPrivyEvent: s4, openModal: l3, proxy: v2, recoverEmbeddedWallet: i3, setModalData: o3, user: a2, walletIndex: (Q(_)?.walletIndex ?? -1) + 1, chainType: h2, refreshSessionAndUser: u2, setUser: d2, idempotencyKey: m, additionalSigners: y });
};
var Z = async ({ accessToken: e3, appConfig: t3, privy: r2, emitPrivyEvent: a2, proxy: n, refreshSessionAndUser: s4, recoverEmbeddedWallet: i3, user: o3, walletIndex: l3, setModalData: d2, openModal: p2, chainType: u2, setUser: h2, idempotencyKey: m, additionalSigners: y }) => {
  if (l3 < 0) throw a2("createWallet", "onError", i.EMBEDDED_WALLET_CREATE_ERROR), Error(`A negative walletIndex (${l3}) is invalid.`);
  let v2 = h(o3);
  if (l3 > 0 && !v2) throw a2("createWallet", "onError", i.EMBEDDED_WALLET_NOT_FOUND), Error("Must have an existing embedded wallet to create an additional wallet.");
  if (t3.embeddedWallets.requireUserOwnedRecoveryOnCreate && "user-controlled-server-wallets-only" === t3.embeddedWallets.mode) throw a2("createWallet", "onError", i.EMBEDDED_WALLET_CREATE_ERROR), Error("User owned recovery not yet supported for this app.");
  if (!v2 && t3.embeddedWallets.requireUserOwnedRecoveryOnCreate) return await ee({ emitPrivyEvent: a2, setModalData: d2, openModal: p2, chainType: u2 });
  let w2 = l2(o3, { chainType: u2, walletIndex: l3 })[0];
  if (w2) return { user: o3, account: w2 };
  if (0 === l3 && !n) return ee({ emitPrivyEvent: a2, setModalData: d2, openModal: p2, chainType: u2 });
  if (!n) throw a2("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to connect to wallet proxy");
  return L({ appConfig: t3, walletIndex: l3, chainType: u2, user: o3, accessToken: e3, proxy: n, refreshSessionAndUser: s4, privy: r2, recoverEmbeddedWallet: i3, setUser: h2, idempotencyKey: m, additionalSigners: y });
};
var ee = async ({ emitPrivyEvent: e3, setModalData: t3, openModal: r2, chainType: a2 }) => new Promise(((n, s4) => {
  t3({ createWallet: { onSuccess: ({ user: t4, account: r3 }) => {
    e3("createWallet", "onSuccess", { wallet: r3 }), n({ user: t4, account: r3 });
  }, onFailure: (t4) => {
    e3("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), s4(t4);
  }, callAuthOnSuccessOnClose: false, shouldCreateEth: "ethereum" === a2, shouldCreateSol: "solana" === a2 } }), r2("EmbeddedWalletOnAccountCreateScreen");
}));
var te = () => {
  let e3 = se(), t3 = u(), { setModalData: r2 } = g(), { initializeWalletProxy: a2, recoverEmbeddedWallet: n, setUser: s4, openModal: i3, refreshSessionAndUser: o3, privy: l3, client: d2 } = l();
  return { create: async ({ chainType: c, options: p2, latestUser: u2, idempotencyKey: h2 }) => {
    let m = u2;
    if (m || (m = await o3()), !m) throw t3("createWallet", "onError", i.MUST_BE_AUTHENTICATED), Error("User must be authenticated before creating a Privy wallet");
    return await X({ appConfig: e3, privy: l3, getAccessToken: () => d2.getAccessToken(), refreshSessionAndUser: o3, initializeWalletProxy: a2, user: m, emitPrivyEvent: t3, recoverEmbeddedWallet: n, setModalData: r2, openModal: i3, setUser: s4, options: p2, timeoutDuration: O, chainType: c, idempotencyKey: h2, additionalSigners: p2?.signers });
  } };
};
function re(e3) {
  let { create: t3 } = te();
  return s3("createWallet", e3), { createWallet: async (e4) => {
    e4 && "target" in e4 && e4 && (e4 = void 0);
    let { account: r2 } = await t3({ chainType: "ethereum", options: e4 });
    return r2;
  } };
}
var ae = async ({ emitPrivyEvent: e3, getAccessToken: t3, initializeWalletProxy: r2, refreshSessionAndUser: a2, user: n, appConfig: s4 }, { privateKey: i3, chainType: o3, additionalSigners: l3 }) => {
  if (!n) throw e3("linkAccount", "onError", i.MUST_BE_AUTHENTICATED, { linkMethod: "siwe" }), new s("User must be authenticated before linking an account.");
  let d2 = "user-controlled-server-wallets-only" === s4.embeddedWallets.mode ? "tee" : "on-device";
  if (l3 && "on-device" === d2) throw new s("Specifying additionalSigners is only supported for TEE execution and this app uses on-device execution. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide");
  let [c, h2] = await Promise.all([t3(), r2(15e3)]);
  if (!h2 || !c) throw e3("linkAccount", "onError", i.MUST_BE_AUTHENTICATED, { linkMethod: "siwe" }), new s("User must be authenticated before linking an account.");
  let { address: m } = await h2.importWallet({ privateKey: i3, accessToken: c, chainType: o3, mode: d2, additionalSigners: l3 }), y = await a2(), v2 = "solana" === o3 ? o(y) : p(y), A = v2?.find(((e4) => e4.address === m));
  if (!A) throw e3("createWallet", "onError", i.UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to import wallet");
  return e3("createWallet", "onSuccess", { wallet: A }), A;
};
var ne = () => {
  let { user: t3 } = k(), { client: r2, refreshSessionAndUser: a2, initializeWalletProxy: n } = l(), s4 = u(), i3 = se();
  return { importWallet: (0, import_react.useCallback)((({ privateKey: e3, additionalSigners: o3 }) => ae({ getAccessToken: () => r2.getAccessToken(), user: t3, initializeWalletProxy: n, refreshSessionAndUser: a2, emitPrivyEvent: s4, appConfig: i3 }, { privateKey: e3, chainType: "ethereum", additionalSigners: o3 })), [t3, r2, a2, n, s4, i3]) };
};
var se2 = () => {
  let t3 = (0, import_react.useContext)(v), { importWallet: o3 } = ne(), { exportWallet: l3 } = W(), { createWallet: d2 } = re(), { unlinkCrossAppAccount: c } = B(), { unlink: p2 } = R(), { unlink: u2 } = V(), { unlink: m } = G2(), { unlink: y } = H2(), { unlink: v2 } = J(), { unlink: w2 } = Y(), { unlink: A } = $(), E = (0, import_react.useCallback)(((e3) => p2({ address: e3 })), [p2]), f3 = (0, import_react.useCallback)(((e3) => u2({ address: e3 })), [u2]), _ = (0, import_react.useCallback)(((e3) => m({ phoneNumber: e3 })), [m]), g2 = (0, import_react.useCallback)(((e3) => y({ fid: e3 })), [y]), k2 = (0, import_react.useCallback)(((e3) => v2({ telegramUserId: e3 })), [v2]), T = (0, import_react.useCallback)(((e3) => w2({ credentialId: e3 })), [w2]), W2 = (0, import_react.useCallback)(((e3) => A(e3)), [A]), U2 = (0, import_react.useCallback)(((e3) => A({ provider: "google", subject: e3 })), [A]), I2 = (0, import_react.useCallback)(((e3) => A({ provider: "twitter", subject: e3 })), [A]), b2 = (0, import_react.useCallback)(((e3) => A({ provider: "twitch", subject: e3 })), [A]), S = (0, import_react.useCallback)(((e3) => A({ provider: "discord", subject: e3 })), [A]), C = (0, import_react.useCallback)(((e3) => A({ provider: "github", subject: e3 })), [A]), D = (0, import_react.useCallback)(((e3) => A({ provider: "spotify", subject: e3 })), [A]), P2 = (0, import_react.useCallback)(((e3) => A({ provider: "instagram", subject: e3 })), [A]), M = (0, import_react.useCallback)(((e3) => A({ provider: "tiktok", subject: e3 })), [A]), R2 = (0, import_react.useCallback)(((e3) => A({ provider: "line", subject: e3 })), [A]), x = (0, import_react.useCallback)(((e3) => A({ provider: "linkedin", subject: e3 })), [A]), N2 = (0, import_react.useCallback)(((e3) => A({ provider: "apple", subject: e3 })), [A]), { update: O3 } = P(), { update: q2 } = j();
  return { ...t3, importWallet: o3, createWallet: d2, exportWallet: l3, unlinkCrossAppAccount: c, unlinkWallet: E, unlinkEmail: f3, unlinkPhone: _, unlinkGoogle: U2, unlinkTwitter: I2, unlinkTwitch: b2, unlinkDiscord: S, unlinkGithub: C, unlinkSpotify: D, unlinkInstagram: P2, unlinkTiktok: M, unlinkLine: R2, unlinkLinkedIn: x, unlinkApple: N2, unlinkFarcaster: g2, unlinkTelegram: k2, unlinkPasskey: T, unlinkOAuth: W2, updateEmail: O3, updatePhone: q2 };
};

export {
  t,
  q,
  j2 as j,
  L,
  B,
  Y,
  se2 as se
};
