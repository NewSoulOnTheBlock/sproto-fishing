import {
  f
} from "./chunk-LTBS5V6F.js";
import {
  _,
  d,
  k,
  s
} from "./chunk-SLTT5NIH.js";
import {
  i as i2,
  s as s2
} from "./chunk-W22FA2JU.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  C,
  E,
  S,
  a,
  ae,
  i,
  ie,
  n,
  o,
  r,
  se,
  t,
  w,
  x,
  y
} from "./chunk-MIVUYAK7.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/events-context-BJ75xIIf.mjs
var import_react = __toESM(require_react(), 1);
var r2 = { login: { onComplete: [], onError: [] }, logout: { onSuccess: [] }, connectWallet: { onSuccess: [], onError: [] }, connectOrCreateWallet: { onSuccess: [], onError: [] }, createWallet: { onSuccess: [], onError: [] }, linkAccount: { onSuccess: [], onError: [] }, update: { onSuccess: [], onError: [] }, configureMfa: { onMfaRequired: [] }, setWalletPassword: { onSuccess: [], onError: [] }, setWalletRecovery: { onSuccess: [], onError: [] }, signMessage: { onSuccess: [], onError: [] }, signTypedData: { onSuccess: [], onError: [] }, sendTransaction: { onSuccess: [], onError: [] }, signTransaction: { onSuccess: [], onError: [] }, accessToken: { onAccessTokenGranted: [], onAccessTokenRemoved: [] }, oAuthAuthorization: { onOAuthTokenGrant: [] }, fundWallet: { onUserExited: [] }, fundSolanaWallet: { onUserExited: [] }, customAuth: { onAuthenticated: [], onUnauthenticated: [] } };
var t2 = /* @__PURE__ */ (0, import_react.createContext)(void 0);
var c = () => (0, import_react.useContext)(t2);
function s3(e2, n3) {
  if (!n3) return;
  let r3 = c().current[e2];
  return (0, import_react.useEffect)((() => {
    for (let [o3, t3] of Object.entries(n3)) Object.prototype.hasOwnProperty.call(r3, o3) || console.warn(`Invalid event type "${o3}" for action "${e2}"`), r3[o3]?.push(t3);
    return () => {
      for (let [o3, t3] of Object.entries(n3)) Object.prototype.hasOwnProperty.call(r3, o3) || console.warn(`Invalid event type "${o3}" for action "${e2}"`), r3[o3] = r3[o3]?.filter(((o4) => o4 !== t3));
    };
  }), [n3]);
}
function a2(o3, e2, n3, ...r3) {
  for (let t3 of o3.current[e2][n3]) t3(...r3);
}
function u() {
  let o3 = c();
  return (e2, n3, ...r3) => a2(o3, e2, n3, ...r3);
}

// node_modules/@privy-io/react-auth/dist/esm/use-unlink-wallet-C3ud1SdY.mjs
var import_react2 = __toESM(require_react(), 1);
import { isAddress as b } from "viem/utils";
function k2(e2) {
  return ["ethereum", "solana"].includes(e2.chainType);
}
function A(e2) {
  let n3 = e2.replace("eip155:", "");
  if (n3) return parseInt(n3);
  throw Error("Chain ID not compatible with CAIP-2 format.");
}
var B = (e2) => e2.filter(((e3) => "wallets" === e3.method || ("exchange" === e3.method ? "coinbase" === e3.provider : "card" === e3.method || "payment-request" === e3.method ? "coinbase" === e3.provider || "moonpay" === e3.provider : (e3.method, false))));
var M = { [y.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", [E.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", [x.id]: "0x0b2c639c533813f4aa9d7837caf62653d097ff85", [S.id]: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7", [C.id]: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359", [w.id]: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582", [a.id]: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", [o.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", [r.id]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", [i.id]: "0x5425890298aed601595a70ab815c96711a31bc65", [t.id]: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", [n.id]: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d", [ie.id]: "0xb88339CB7199b77E23DB6E890353E22632Ba630f", [ae.id]: "0x754704Bc059F8C67012fEd69BC8A327a5aafb603" };
var T = ({ address: n3, appConfig: r3, fundWalletConfig: t3, methodScreen: o3, chainIdOverride: i3, comingFromSendTransactionScreen: a3 = false, onComplete: d2, onError: s4 }) => {
  let l2, c2;
  if (!r3.fundingConfig) throw Error("Wallet funding is not enabled");
  let u2 = B(r3.fundingConfig.options);
  if (u2.length < 1) throw Error("Wallet funding is not enabled");
  l2 = i3 || (t3?.chain ? t3.chain.id : A(r3.fundingConfig.defaultRecommendedCurrency.chain));
  let f2 = r3.chains.find(((e2) => e2.id === l2));
  if (!f2) throw new s2(`Funding chain ${l2} is not in PrivyProvider chains list`);
  let m = t3?.amount ?? r3.fundingConfig.defaultRecommendedAmount, h = false;
  function p() {
    if (!l2) return;
    let e2 = M[l2];
    u2.find(((e3) => "wallets" === e3.method)) && !e2 && console.warn("Attempting to fund with USDC on chain where USDC address is not known. Funding via external wallet will be disabled."), c2 = e2, h = true;
  }
  var g3;
  t3 && "asset" in t3 ? "USDC" === t3.asset ? p() : "string" != typeof t3.asset && "erc20" in t3.asset && (g3 = c2 = t3.asset.erc20, h = g3 === M[f2.id]) : "USDC" === r3.fundingConfig.defaultRecommendedCurrency.asset && p();
  let C3 = t3?.defaultFundingMethod;
  return { chainType: "ethereum", address: n3, amount: m, chain: f2, erc20Address: c2, erc20ContractInfo: h ? { symbol: "USDC", decimals: 6 } : void 0, isUSDC: h, methodScreen: o3, supportedOptions: u2, comingFromSendTransactionScreen: a3, defaultFundingMethod: C3, usingDefaultFundingMethod: !!C3, preferredCardProvider: t3?.card?.preferredProvider, crossChainBridgingEnabled: r3.fundingConfig.crossChainBridgingEnabled ?? false, solanaChain: "solana:mainnet", uiConfig: t3 && "uiConfig" in t3 ? t3.uiConfig : void 0, externalSolanaFundingScreen: null, onComplete: d2 ?? (() => {
  }), onError: s4 ?? (() => {
  }) };
};
function I({ address: e2, fundWalletConfig: n3, appConfig: r3, comingFromSendTransactionScreen: t3, externalSolanaFundingScreen: o3, methodScreen: i3 }) {
  if (!r3.fundingConfig) throw Error("Wallet funding is not enabled");
  let a3 = B(r3.fundingConfig.options);
  if (a3.length < 1) throw Error("Wallet funding is not enabled");
  if ("USDC" === n3?.asset && "solana:testnet" === n3?.chain) throw Error("USDC funding is not supported on the Solana testnet");
  let d2 = n3?.amount ?? r3.fundingConfig.defaultRecommendedAmount, s4 = n3?.defaultFundingMethod;
  return { chainType: "solana", address: e2, supportedOptions: a3, amount: d2, isUSDC: "USDC" === n3?.asset, methodScreen: i3, comingFromSendTransactionScreen: t3, chain: n3?.chain || "solana:mainnet", crossChainBridgingEnabled: r3.fundingConfig.crossChainBridgingEnabled ?? false, defaultFundingMethod: s4, preferredCardProvider: n3?.card?.preferredProvider, usingDefaultFundingMethod: !!s4, uiConfig: n3?.uiConfig, externalSolanaFundingScreen: o3, onComplete: () => {
  }, onError: () => {
  } };
}
function W() {
  let { user: n3, getAccessToken: r3 } = k(), { walletProxy: t3, openModal: o3, client: i3 } = l(), { setModalData: a3 } = g(), d2 = se();
  return (0, import_react2.useMemo)((() => ({ exportWallet: (s4) => new Promise((async (l2, c2) => {
    if (!n3) return void c2(Error("User must be authenticated before exporting their Privy wallet"));
    s4 && "target" in s4 && s4 && (s4 = void 0);
    let u2 = s4?.address ? _(n3, s4.address) : d(n3);
    if (!u2) return void c2(new s2("User must have an embedded wallet."));
    let f2 = u2.address, { entropyId: m, entropyIdVerifier: h } = f(n3, u2), p = s(u2);
    if (!f2) return void c2(Error("User does not have an HD Ethereum wallet. To export an imported wallet, pass the `address` of the wallet to `exportWallet`."));
    if (!b(f2)) return void c2(Error("Must provide a valid Ethereum address."));
    let g3 = { recoveryMethod: u2.recoveryMethod, connectingWalletAddress: u2.address, isUnifiedWallet: p, entropyId: m, entropyIdVerifier: h, onCompleteNavigateTo: "EmbeddedWalletKeyExportScreen", onFailure: c2, shouldForceMFA: true };
    await r3() && t3 ? k2(u2) ? (a3({ keyExport: { appId: d2.id, appClientId: d2.appClientId, origin: i3.apiUrl, address: u2.address, entropyId: m, entropyIdVerifier: h, hdWalletIndex: u2.walletIndex, chainType: u2.chainType, walletId: u2.id, isUnifiedWallet: p, imported: u2.imported, onSuccess: l2, onFailure: c2, showBackButton: s4?.showBackButton }, connectWallet: g3 }), o3("EmbeddedWalletConnectingScreen")) : c2(Error(`Export is not supported for ${u2.chainType} wallets`)) : c2(Error("Must have valid access token."));
  })) })), [n3, r3, t3, o3, i3, a3, d2]);
}
var P = () => {
  let { authenticated: r3, user: t3 } = k(), { openModal: o3, inProgressAuthFlowRef: i3, inProgressLoginOrLinkMethodRef: a3 } = l(), d2 = u();
  return { update: (0, import_react2.useCallback)((() => {
    if (!r3) throw d2("linkAccount", "onError", i2.MUST_BE_AUTHENTICATED, { linkMethod: "email" }), new s2("User must be authenticated before linking an account.");
    if (!t3?.email) throw new s2("User does not have an email linked to their account.");
    i3.current = "update", a3.current = "email", o3("UpdateEmailScreen");
  }), [r3, d2, i3, a3, o3, t3]) };
};
var j = () => {
  let { authenticated: r3, user: t3 } = k(), { openModal: o3, inProgressAuthFlowRef: i3, inProgressLoginOrLinkMethodRef: a3 } = l(), d2 = u();
  return { update: (0, import_react2.useCallback)((() => {
    if (!r3) throw d2("linkAccount", "onError", i2.MUST_BE_AUTHENTICATED, { linkMethod: "sms" }), new s2("User must be authenticated before linking an account.");
    if (!t3?.phone) throw new s2("User does not have a phone number linked to their account.");
    i3.current = "update", a3.current = "sms", o3("UpdatePhoneScreen");
  }), [r3, d2, i3, a3, o3, t3]) };
};
var R = () => {
  let { client: e2, setUser: n3 } = l();
  return { unlink: (0, import_react2.useCallback)((async ({ address: r3 }) => {
    let t3;
    return n3(t3 = r3.startsWith("0x") ? await e2.unlinkEthereumWallet(r3) : await e2.unlinkSolanaWallet(r3)), t3;
  }), [e2, n3]) };
};

export {
  r2 as r,
  t2 as t,
  s3 as s,
  a2 as a,
  u,
  k2 as k,
  A,
  B,
  T,
  I,
  W,
  P,
  j,
  R
};
