import {
  address,
  appendTransactionMessageInstruction,
  compileTransaction,
  createTransactionMessage,
  getBase58Decoder,
  getTransactionDecoder,
  getTransactionEncoder,
  l as l2,
  m,
  n as n4,
  o as o3,
  p as p3,
  pipe,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  u
} from "./chunk-4UX7BEZG.js";
import {
  n as n3
} from "./chunk-WVISDMZL.js";
import {
  e as e2,
  r,
  s as s4
} from "./chunk-FDAXBPM5.js";
import {
  e
} from "./chunk-DNNT7Y2Z.js";
import {
  c as c3
} from "./chunk-2HYLPLOV.js";
import "./chunk-NOC53GNL.js";
import {
  i as i3
} from "./chunk-VEE35G7J.js";
import {
  e as e3,
  n as n2,
  s as s5,
  t as t5
} from "./chunk-C2ILIC2D.js";
import {
  t as t3
} from "./chunk-E5F673JX.js";
import {
  o as o2
} from "./chunk-I3STI6GC.js";
import "./chunk-WSIRTJK5.js";
import {
  CheckCircleIcon_default
} from "./chunk-E74RKHPY.js";
import "./chunk-EOSGBBZ3.js";
import {
  t as t4
} from "./chunk-4MCBV4ZR.js";
import {
  c as c2,
  n,
  s as s3,
  t as t2
} from "./chunk-EIEISV5R.js";
import {
  t
} from "./chunk-6HBDFDSF.js";
import {
  b,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  findAssociatedTokenPda,
  getCreateAssociatedTokenIdempotentInstruction,
  getTransferInstruction,
  i as i2
} from "./chunk-XDDJQ3UG.js";
import {
  se as se2
} from "./chunk-5IEXBHIB.js";
import {
  I
} from "./chunk-PANVPNZ2.js";
import {
  f,
  p as p2
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-NFV3EFLQ.js";
import {
  _,
  c,
  o,
  s
} from "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import {
  E
} from "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import {
  i,
  s as s2
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g as g2
} from "./chunk-2LSC5KMF.js";
import {
  a,
  l
} from "./chunk-THXMRURJ.js";
import {
  F,
  Gi,
  Pa,
  eventemitter3_default,
  g,
  p,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import {
  base58
} from "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/FundSolWalletWithExternalSolanaWallet-DnUaDPFx.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/@privy-io/react-auth/dist/esm/Table-BYZc06y7.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function o4({ rows: o5 }) {
  return (0, import_jsx_runtime.jsx)(t5, { children: o5.filter(((r5) => !!r5)).map(((e6, o6) => null != e6.value || e6.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s5, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e3, { children: e6.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { $isLoading: e6.isLoading, children: e6.value })] }, o6) : null)) });
}

// node_modules/@privy-io/react-auth/dist/esm/useWallets-DNK5FqjA.mjs
var import_react = __toESM(require_react(), 1);
var W = ["solana:mainnet", "solana:devnet", "solana:testnet"];
function M(e6, n7) {
  if (!Object.prototype.hasOwnProperty.call(e6, n7)) throw TypeError("attempted to use private field on non-instance");
  return e6;
}
var P = 0;
var U = "__private_" + P++ + "__implementation";
function C(e6, n7) {
  if (!Object.prototype.hasOwnProperty.call(e6, n7)) throw TypeError("attempted to use private field on non-instance");
  return e6;
}
var F2 = 0;
function D(e6) {
  return "__private_" + F2++ + "_" + e6;
}
var N = /* @__PURE__ */ D("_address");
var B = /* @__PURE__ */ D("_publicKey");
var x = /* @__PURE__ */ D("_chains");
var R = /* @__PURE__ */ D("_features");
var L = /* @__PURE__ */ D("_label");
var V = /* @__PURE__ */ D("_icon");
var k = class _k {
  get address() {
    return C(this, N)[N];
  }
  get publicKey() {
    return C(this, B)[B].slice();
  }
  get chains() {
    return C(this, x)[x].slice();
  }
  get features() {
    return C(this, R)[R].slice();
  }
  get label() {
    return C(this, L)[L];
  }
  get icon() {
    return C(this, V)[V];
  }
  constructor({ address: e6, publicKey: n7, label: t8, icon: a3 }) {
    Object.defineProperty(this, N, { writable: true, value: void 0 }), Object.defineProperty(this, B, { writable: true, value: void 0 }), Object.defineProperty(this, x, { writable: true, value: void 0 }), Object.defineProperty(this, R, { writable: true, value: void 0 }), Object.defineProperty(this, L, { writable: true, value: void 0 }), Object.defineProperty(this, V, { writable: true, value: void 0 }), C(this, N)[N] = e6, C(this, B)[B] = n7, C(this, x)[x] = W, C(this, L)[L] = t8, C(this, V)[V] = a3, C(this, R)[R] = ["solana:signAndSendTransaction", "solana:signTransaction", "solana:signMessage"], new.target === _k && Object.freeze(this);
  }
};
function Q(e6, n7) {
  if (!Object.prototype.hasOwnProperty.call(e6, n7)) throw TypeError("attempted to use private field on non-instance");
  return e6;
}
var G = 0;
function K(e6) {
  return "__private_" + G++ + "_" + e6;
}
var J = /* @__PURE__ */ K("_listeners");
var Y = /* @__PURE__ */ K("_version");
var H = /* @__PURE__ */ K("_name");
var Z = /* @__PURE__ */ K("_icon");
var z = /* @__PURE__ */ K("_injection");
var q = /* @__PURE__ */ K("_isPrivyWallet");
var X = /* @__PURE__ */ K("_accounts");
var $ = /* @__PURE__ */ K("_on");
var ee = /* @__PURE__ */ K("_emit");
var ne = /* @__PURE__ */ K("_off");
var te = /* @__PURE__ */ K("_connected");
var ae = /* @__PURE__ */ K("_connect");
var ie = /* @__PURE__ */ K("_disconnect");
var se3 = /* @__PURE__ */ K("_signMessage");
var re = /* @__PURE__ */ K("_signAndSendTransaction");
var oe = /* @__PURE__ */ K("_signTransaction");
function ce(e6, ...n7) {
  Q(this, J)[J][e6]?.forEach(((e7) => e7.apply(null, n7)));
}
function le(e6, n7) {
  Q(this, J)[J][e6] = Q(this, J)[J][e6]?.filter(((e7) => n7 !== e7));
}
function de(e6, n7, t8) {
  let a3 = structuredClone(getTransactionDecoder().decode(e6)), i5 = address(n7);
  return i5 in a3.signatures && (a3.signatures[i5] = t8), new Uint8Array(getTransactionEncoder().encode(a3));
}
function ue() {
  let { isHeadlessSigning: e6, walletProxy: n7, initializeWalletProxy: t8, recoverEmbeddedWallet: i5, openModal: r5, privy: l3, client: d } = l(), { user: p4 } = se2(), { setModalData: h2 } = g2(), { signWithUserSigner: f2 } = i2();
  return { signMessage: ({ message: s6, address: u2, options: w }) => new Promise((async (m2, v) => {
    let T = _(p4, u2);
    if ("privy" !== T?.walletClientType) return void v(new s2("Wallet is not a Privy wallet", void 0, i.EMBEDDED_WALLET_NOT_FOUND));
    let { entropyId: S, entropyIdVerifier: O } = f(p4, T), _2 = s(T), E2 = p3(s6).toString("base64");
    if (E2.length < 1) return void v(new s2("Message must be a non-empty string", void 0, i.INVALID_MESSAGE));
    let I2 = async () => {
      let e7;
      if (!p4) throw Error("User must be authenticated before signing with a Privy wallet");
      let s7 = await d.getAccessToken();
      if (!s7) throw Error("User must be authenticated to use their embedded wallet.");
      let r6 = n7 ?? await t8(15e3);
      if (!r6) throw Error("Failed to initialize embedded wallet proxy.");
      if (!await i5({ address: T.address })) throw Error("Unable to connect to wallet");
      if (_2) {
        let n8 = await F(l3, f2, { chain_type: "solana", method: "signMessage", params: { message: E2, encoding: "base64" }, wallet_id: T.id });
        if (!n8.data || !("signature" in n8.data)) throw Error("Failed to sign message");
        e7 = n8.data.signature;
      } else {
        let { response: n8 } = await r6.rpc({ accessToken: s7, entropyId: S, entropyIdVerifier: O, chainType: "solana", hdWalletIndex: T.walletIndex ?? 0, requesterAppId: w?.uiOptions?.requesterAppId, request: { method: "signMessage", params: { message: E2 } } });
        e7 = n8.data.signature;
      }
      return e7;
    };
    if (e6({ showWalletUIs: w?.uiOptions?.showWalletUIs })) try {
      let e7 = await I2(), n8 = new Uint8Array(p3(e7, "base64"));
      m2({ signature: n8 });
    } catch (e7) {
      v(e7);
    }
    else h2({ signMessage: { method: "solana_signMessage", data: E2, confirmAndSign: I2, onSuccess: (e7) => {
      m2({ signature: new Uint8Array(p3(e7, "base64")) });
    }, onFailure: (e7) => {
      v(e7);
    }, uiOptions: w?.uiOptions ?? {} }, connectWallet: { recoveryMethod: T.recoveryMethod, connectingWalletAddress: T.address, entropyId: S, entropyIdVerifier: O, isUnifiedWallet: _2, onCompleteNavigateTo: "SignRequestScreen", onFailure: (e7) => {
      v(new s2("Failed to connect to wallet", e7, i.UNKNOWN_CONNECT_WALLET_ERROR));
    } } }), r5("EmbeddedWalletConnectingScreen");
  })) };
}
function ge() {
  let { isHeadlessSigning: e6, openModal: n7, privy: t8 } = l(), { setModalData: i5 } = g2(), { signMessage: r5 } = ue(), { signWithUserSigner: l3 } = i2(), { user: d } = se2();
  return { signTransaction: async ({ transaction: s6, options: u2, chain: p4 = "solana:mainnet", address: h2 }) => {
    let f2 = _(d, h2);
    if ("privy" !== f2?.walletClientType) throw new s2("Wallet is not a Privy wallet", void 0, i.EMBEDDED_WALLET_NOT_FOUND);
    let w = s(f2);
    async function m2(e7) {
      if (w) {
        let n9 = await F(t8, l3, { chain_type: "solana", method: "signTransaction", params: { transaction: g.base64.fromBytes(e7), encoding: "base64" }, wallet_id: f2.id });
        if (n9.data && "signed_transaction" in n9.data && null != n9.data.signed_transaction) return { signedTransaction: new Uint8Array(g.base64.toBytes(n9.data.signed_transaction)) };
        throw Error("Failed to sign transaction");
      }
      let { signature: n8 } = await r5({ message: l2(e7), address: h2, options: { ...u2, uiOptions: { ...u2?.uiOptions, showWalletUIs: false } } });
      return { signedTransaction: de(e7, h2, n8) };
    }
    return e6({ showWalletUIs: u2?.uiOptions?.showWalletUIs }) ? m2(s6) : new Promise((async (e7, t9) => {
      let { entropyId: a3, entropyIdVerifier: r6 } = f(d, f2);
      function o5(e8) {
        return (n8) => {
          t9(n8 instanceof s2 ? n8 : new s2("Failed to connect to wallet", n8, e8));
        };
      }
      let c4 = { account: f2, transaction: new Uint8Array(s6), chain: p4, signOnly: true, uiOptions: u2?.uiOptions || {}, onConfirm: m2, onSuccess: e7, onFailure: o5(i.TRANSACTION_FAILURE) };
      i5({ connectWallet: { recoveryMethod: f2.recoveryMethod, connectingWalletAddress: f2.address, entropyId: a3, entropyIdVerifier: r6, isUnifiedWallet: w, onCompleteNavigateTo: "StandardSignAndSendTransactionScreen", onFailure: o5(i.UNKNOWN_CONNECT_WALLET_ERROR) }, standardSignAndSendTransaction: c4 }), n7("EmbeddedWalletConnectingScreen");
    }));
  } };
}
function pe() {
  let e6 = se(), { isHeadlessSigning: n7, openModal: t8, privy: i5 } = l(), { setModalData: r5 } = g2(), { signTransaction: l3 } = ge(), d = m(), { user: p4 } = se2(), { signWithUserSigner: h2 } = i2();
  return { signAndSendTransaction: async ({ transaction: s6, address: u2, chain: w = "solana:mainnet", options: m2 }) => {
    let v = _(p4, u2);
    if ("privy" !== v?.walletClientType) throw new s2("Wallet is not a Privy wallet", void 0, i.EMBEDDED_WALLET_NOT_FOUND);
    let T = s(v);
    async function S(e7) {
      let n8 = m2?.skipSimulation ? { "x-privy-skip-simulation": "true" } : void 0;
      if (m2?.sponsor) return await (async (e8) => {
        if (!T) throw new s2("Sponsoring transactions is only supported for wallets on the TEE stack", i.INVALID_DATA);
        let t10 = await F(i5, h2, { chain_type: "solana", method: "signAndSendTransaction", sponsor: true, params: { transaction: p3(e8).toString("base64"), encoding: "base64" }, caip2: `solana:${(await d(w).rpc.getGenesisHash().send()).substring(0, 32)}`, wallet_id: v.id, optimistic_broadcast: m2?.optimisticBroadcast ?? false, headers: n8 });
        if (t10.data && "hash" in t10.data) return { signature: base58.decode(t10.data.hash) };
        throw Error("Failed to sign and send transaction");
      })(e7);
      let { signedTransaction: t9 } = await l3({ transaction: e7, address: u2, chain: w, options: { ...m2, uiOptions: { ...m2?.uiOptions, showWalletUIs: false } } }), { signature: s7 } = await d(w).sendAndConfirmTransaction(t9, { skipPreflight: m2?.skipSimulation, skipConfirmation: m2?.optimisticBroadcast });
      return { signature: s7 };
    }
    return n7({ showWalletUIs: m2?.uiOptions?.showWalletUIs }) ? S(s6) : new Promise((async (n8, a3) => {
      let i6, o5, { entropyId: c4, entropyIdVerifier: l4 } = f(p4, v);
      function d2(e7) {
        return (n9) => {
          a3(n9 instanceof s2 ? n9 : new s2("Failed to connect to wallet", n9, e7));
        };
      }
      let h3 = { account: v, transaction: new Uint8Array(s6), chain: w, signOnly: false, uiOptions: m2?.uiOptions || {}, onConfirm: S, onSuccess: n8, onFailure: d2(i.TRANSACTION_FAILURE), isSponsored: !!m2?.sponsor }, f2 = { recoveryMethod: v.recoveryMethod, connectingWalletAddress: v.address, entropyId: c4, entropyIdVerifier: l4, isUnifiedWallet: T, onCompleteNavigateTo: "StandardSignAndSendTransactionScreen", onFailure: d2(i.UNKNOWN_CONNECT_WALLET_ERROR) };
      e6.fundingConfig && (i6 = I({ address: u2, appConfig: e6, methodScreen: "FundingMethodSelectionScreen", fundWalletConfig: { ...m2, asset: "native-currency", chain: w }, externalSolanaFundingScreen: "FundSolWalletWithExternalSolanaWallet" }), o5 = { amount: e6.fundingConfig.defaultRecommendedAmount, asset: "SOL", chain: w, destinationAddress: u2, afterSuccessScreen: "StandardSignAndSendTransactionScreen", sourceWalletData: void 0 }), r5({ connectWallet: f2, standardSignAndSendTransaction: h3, funding: i6, solanaFundingData: o5 }), t8("EmbeddedWalletConnectingScreen");
    }));
  } };
}
var he = new class extends eventemitter3_default {
  setImplementation(e6) {
    M(this, U)[U] = e6;
  }
  async signMessage(e6) {
    return M(this, U)[U].signMessage(e6);
  }
  async signAndSendTransaction(e6) {
    return M(this, U)[U].signAndSendTransaction(e6);
  }
  async signTransaction(e6) {
    return M(this, U)[U].signTransaction(e6);
  }
  constructor(e6) {
    super(), Object.defineProperty(this, U, { writable: true, value: void 0 }), M(this, U)[U] = e6;
  }
}({ signTransaction: a("signTransaction was not injected"), signAndSendTransaction: a("signAndSendTransaction was not injected"), signMessage: a("signMessage was not injected") });
var fe = new class {
  get version() {
    return Q(this, Y)[Y];
  }
  get name() {
    return Q(this, H)[H];
  }
  get icon() {
    return Q(this, Z)[Z];
  }
  get chains() {
    return W.slice();
  }
  get features() {
    return { "standard:connect": { version: "1.0.0", connect: Q(this, ae)[ae] }, "standard:disconnect": { version: "1.0.0", disconnect: Q(this, ie)[ie] }, "standard:events": { version: "1.0.0", on: Q(this, $)[$] }, "solana:signAndSendTransaction": { version: "1.0.0", supportedTransactionVersions: ["legacy", 0], signAndSendTransaction: Q(this, re)[re] }, "solana:signTransaction": { version: "1.0.0", supportedTransactionVersions: ["legacy", 0], signTransaction: Q(this, oe)[oe] }, "solana:signMessage": { version: "1.0.0", signMessage: Q(this, se3)[se3] }, "privy:": { privy: { signMessage: Q(this, z)[z].signMessage, signTransaction: Q(this, z)[z].signTransaction, signAndSendTransaction: Q(this, z)[z].signAndSendTransaction } } };
  }
  get accounts() {
    return Q(this, X)[X].slice();
  }
  get isPrivyWallet() {
    return Q(this, q)[q];
  }
  constructor({ name: e6, icon: n7, version: t8, injection: a3, wallets: i5 }) {
    Object.defineProperty(this, ee, { value: ce }), Object.defineProperty(this, ne, { value: le }), Object.defineProperty(this, J, { writable: true, value: void 0 }), Object.defineProperty(this, Y, { writable: true, value: void 0 }), Object.defineProperty(this, H, { writable: true, value: void 0 }), Object.defineProperty(this, Z, { writable: true, value: void 0 }), Object.defineProperty(this, z, { writable: true, value: void 0 }), Object.defineProperty(this, q, { writable: true, value: void 0 }), Object.defineProperty(this, X, { writable: true, value: void 0 }), Object.defineProperty(this, $, { writable: true, value: void 0 }), Object.defineProperty(this, te, { writable: true, value: void 0 }), Object.defineProperty(this, ae, { writable: true, value: void 0 }), Object.defineProperty(this, ie, { writable: true, value: void 0 }), Object.defineProperty(this, se3, { writable: true, value: void 0 }), Object.defineProperty(this, re, { writable: true, value: void 0 }), Object.defineProperty(this, oe, { writable: true, value: void 0 }), Q(this, J)[J] = {}, Q(this, $)[$] = (e7, n8) => (Q(this, J)[J][e7]?.push(n8) || (Q(this, J)[J][e7] = [n8]), () => Q(this, ne)[ne](e7, n8)), Q(this, te)[te] = (e7) => {
      null != e7 && (Q(this, X)[X] = e7.map((({ address: e8 }) => new k({ address: e8, publicKey: base58.decode(e8) })))), Q(this, ee)[ee]("change", { accounts: this.accounts });
    }, Q(this, ae)[ae] = async () => (Q(this, ee)[ee]("change", { accounts: this.accounts }), { accounts: this.accounts }), Q(this, ie)[ie] = async () => {
      Q(this, ee)[ee]("change", { accounts: this.accounts });
    }, Q(this, se3)[se3] = async (...e7) => {
      let n8 = [];
      for (let { account: t9, ...a4 } of e7) {
        let { signature: e8 } = await Q(this, z)[z].signMessage({ ...a4, address: t9.address });
        n8.push({ signedMessage: a4.message, signature: e8 });
      }
      return n8;
    }, Q(this, re)[re] = async (...e7) => {
      let n8 = [];
      for (let t9 of e7) {
        let { signature: e8 } = await Q(this, z)[z].signAndSendTransaction({ ...t9, transaction: t9.transaction, address: t9.account.address, chain: t9.chain || "solana:mainnet", options: t9.options });
        n8.push({ signature: e8 });
      }
      return n8;
    }, Q(this, oe)[oe] = async (...e7) => {
      let n8 = [];
      for (let { transaction: t9, account: a4, options: i6, chain: s6 } of e7) {
        let { signedTransaction: e8 } = await Q(this, z)[z].signTransaction({ transaction: t9, address: a4.address, chain: s6 || "solana:mainnet", options: i6 });
        n8.push({ signedTransaction: e8 });
      }
      return n8;
    }, Q(this, H)[H] = e6, Q(this, Z)[Z] = n7, Q(this, Y)[Y] = t8, Q(this, z)[z] = a3, Q(this, X)[X] = [], Q(this, q)[q] = true, a3.on("accountChanged", Q(this, te)[te], this), Q(this, te)[te](i5);
  }
}({ name: "Privy", version: "1.0.0", icon: "data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==", wallets: [], injection: he });
function we() {
  let { client: a3 } = l(), { ready: i5, wallet: r5 } = (function() {
    let { ready: t8 } = p2(), { user: a4 } = se2(), { signMessage: i6 } = ue(), { signTransaction: s6 } = ge(), { signAndSendTransaction: r6 } = pe(), o6 = (0, import_react.useMemo)((() => {
      let e6 = [...c(a4).sort(((e7, n8) => (e7.walletIndex ?? 0) - (n8.walletIndex ?? 0)))], n7 = o(a4);
      return n7.length ? [...e6, ...n7] : e6;
    }), [a4]), c5 = (0, import_react.useMemo)((() => ({ signMessage: async ({ message: e6, address: n7, options: t9 }) => await i6({ message: e6, address: n7, options: t9 }), signTransaction: async ({ transaction: e6, address: n7, chain: t9, options: a5 }) => await s6({ transaction: e6, address: n7, chain: t9, options: a5 }), async signAndSendTransaction({ transaction: e6, address: n7, chain: t9, options: a5 }) {
      let { signature: i7 } = await r6({ transaction: e6, address: n7, chain: t9, options: a5 });
      return { signature: i7 };
    } })), [i6, s6, r6]);
    return (0, import_react.useEffect)((() => {
      he?.setImplementation(c5);
    }), [c5]), (0, import_react.useEffect)((() => {
      var e6;
      !t8 || (e6 = fe.accounts).length === o6.length && e6.every(((e7, n7) => e7.address === o6[n7]?.address)) || he?.emit("accountChanged", o6);
    }), [t8, o6]), { ready: t8, wallet: fe };
  })(), [o5, c4] = (0, import_react.useState)([]), [g3, h2] = (0, import_react.useState)([]);
  return (0, import_react.useEffect)((() => {
    let e6 = [r5, ...o5.filter(((e7) => "solana" === e7.chainType && !!e7.wallet.features)).map(((e7) => e7.wallet))];
    h2(e6);
    let n7 = o5.flatMap(((n8) => {
      let t9 = () => h2([...e6]);
      return n8.on("walletsUpdated", t9), { connector: n8, off: t9 };
    })), t8 = e6.map(((n8) => n8.features["standard:events"]?.on("change", (() => {
      h2([...e6]);
    }))));
    return () => {
      t8.forEach(((e7) => e7?.())), n7.forEach((({ connector: e7, off: n8 }) => e7.off("walletsUpdated", n8)));
    };
  }), [o5]), (0, import_react.useEffect)((() => {
    c4(a3.connectors?.walletConnectors.filter(((e7) => "solana" === e7.chainType)) ?? []);
    let e6 = () => {
      c4(a3.connectors?.walletConnectors.filter(((e7) => "solana" === e7.chainType)) ?? []);
    };
    return a3.connectors?.on("connectorInitialized", e6), () => {
      a3.connectors?.off("connectorInitialized", e6);
    };
  }), [i5, a3.connectors]), { ready: i5, wallets: g3 };
}
function ye() {
  let { ready: n7, wallets: t8 } = we();
  return { ready: n7, wallets: (0, import_react.useMemo)((() => t8.flatMap(((e6) => e6.accounts.map(((n8) => new Pa({ wallet: e6, account: n8 })))))), [t8]) };
}

// src/vendor/stubs/solana-program-system.js
function unused(name) {
  return () => {
    throw new Error(`[stub] ${name} is not implemented \u2014 Solana wallet funding is not enabled in this game.`);
  };
}
var getTransferSolInstruction = unused("getTransferSolInstruction");

// node_modules/@privy-io/react-auth/dist/esm/getAddressFromBuffer-B3izNS1n.mjs
function r3(r5) {
  return getBase58Decoder().decode(r5);
}

// node_modules/@privy-io/react-auth/dist/esm/FundSolWalletWithExternalSolanaWallet-DnUaDPFx.mjs
import "viem/utils";
import "viem";
import "viem/chains";
function Q2(t8) {
  return BigInt(Math.floor(1e9 * parseFloat(t8)));
}
function X2(t8) {
  return +Z2.format(parseFloat(t8.toString()) / 1e9);
}
var Z2 = Intl.NumberFormat(void 0, { maximumFractionDigits: 8 });
async function J2({ tx: t8, solanaClient: e6, amount: a3, asset: o5, tokenPrice: n7 }) {
  if (!t8) return null;
  if ("SOL" === o5 && n7) {
    let o6 = Q2(a3), r5 = r(o6, n7), s6 = await n4({ solanaClient: e6, tx: t8 });
    return { amountInUsd: r5, feeInUsd: n7 ? r(s6, n7) : void 0, totalInUsd: r(o6 + s6, n7) };
  }
  if ("USDC" === o5 && n7) {
    let o6 = "$" + a3, r5 = await n4({ solanaClient: e6, tx: t8 }), s6 = (function(t9, e7) {
      let a4 = parseFloat(t9.toString()) / s4 * e7;
      return a4 < 0.01 ? 0 : a4;
    })(r5, n7);
    return { amountInUsd: o6, feeInUsd: r(r5, n7), totalInUsd: "$" + (parseFloat(a3) + s6).toFixed(2) };
  }
  if ("SOL" === o5) {
    let o6 = Q2(a3), n8 = await n4({ solanaClient: e6, tx: t8 });
    return { amountInSol: a3 + " SOL", feeInSol: X2(n8) + " SOL", totalInSol: X2(o6 + n8) + " SOL" };
  }
  return { amountInUsdc: a3 + " USDC", feeInSol: X2(await n4({ solanaClient: e6, tx: t8 })) + " SOL" };
}
var K2 = { component: function() {
  let B2 = se(), { closePrivyModal: R2, createAnalyticsEvent: X3 } = l(), { data: Z3, setModalData: K3, navigate: tt } = g2(), { wallets: et } = ye(), [at, ot] = (0, import_react2.useState)("preparing"), [nt, rt] = (0, import_react2.useState)(), [st, it] = (0, import_react2.useState)(), [mt, lt] = (0, import_react2.useState)();
  if (!Z3?.solanaFundingData) throw Error("Funding config is missing");
  if (!Z3.solanaFundingData.sourceWalletData) throw Error("Funding config is missing source wallet data");
  let { amount: ct, asset: ut, chain: dt, sourceWalletData: pt, destinationAddress: ft, afterSuccessScreen: gt } = Z3.solanaFundingData, ht = et.find(((t8) => t8.address === pt.address && E(pt.walletClientType) === E(t8.standardWallet.name))), jt = m()(dt), { tokenPrice: It, isTokenPriceLoading: vt } = c3("solana");
  return (0, import_react2.useEffect)((() => {
    if ("preparing" !== at || vt || !ht) return;
    let t8 = "SOL" === ut ? Q2(ct) : (function(t9) {
      return BigInt(Math.floor(1e6 * parseFloat(t9)));
    })(ct);
    it({ amount: ("SOL" === ut && It ? r(t8, It) : ct) ?? ct }), ("SOL" === ut ? (async function({ solanaClient: t9, source: e6, destination: a3, amountInLamports: o5 }) {
      let { value: n7 } = await t9.rpc.getLatestBlockhash().send(), r5 = { address: e6 }, s6 = pipe(createTransactionMessage({ version: 0 }), ((t10) => setTransactionMessageFeePayerSigner(r5, t10)), ((t10) => setTransactionMessageLifetimeUsingBlockhash(n7, t10)), ((t10) => appendTransactionMessageInstruction(getTransferSolInstruction({ amount: o5, source: r5, destination: a3 }), t10)), ((t10) => compileTransaction(t10)));
      return new Uint8Array(getTransactionEncoder().encode(s6));
    })({ solanaClient: jt, source: ht.address, destination: ft, amountInLamports: t8 }) : (async function({ solanaClient: t9, source: e6, destination: a3, amountInBaseUnits: o5 }) {
      let n7 = n3(t9.chain), { value: r5 } = await t9.rpc.getLatestBlockhash().send(), s6 = { address: e6 }, [i5] = await findAssociatedTokenPda({ mint: n7, owner: e6, tokenProgram: e2 }), [m2] = await findAssociatedTokenPda({ mint: n7, owner: a3, tokenProgram: e2 }), [l3, c4] = await Promise.all([t9.rpc.getAccountInfo(i5, { commitment: "confirmed", encoding: "jsonParsed" }).send().catch((() => null)), t9.rpc.getAccountInfo(m2, { commitment: "confirmed", encoding: "jsonParsed" }).send().catch((() => null))]);
      if (!l3?.value) throw Error(`Source token account does not exist for address: ${e6}`);
      let u2 = getCreateAssociatedTokenIdempotentInstruction({ payer: s6, ata: m2, owner: a3, mint: n7 }), d = pipe(createTransactionMessage({ version: 0 }), ((t10) => setTransactionMessageFeePayerSigner(s6, t10)), ((t10) => setTransactionMessageLifetimeUsingBlockhash(r5, t10)), ((t10) => c4?.value ? t10 : appendTransactionMessageInstruction(u2, t10)), ((t10) => appendTransactionMessageInstruction(getTransferInstruction({ source: i5, destination: m2, authority: s6, amount: o5 }), t10)), ((t10) => compileTransaction(t10)));
      return new Uint8Array(getTransactionEncoder().encode(d));
    })({ solanaClient: jt, source: ht.address, destination: ft, amountInBaseUnits: t8 })).then(rt).catch(((t9) => {
      ot("error"), lt(t9);
    }));
  }), [at, ct, ut, dt, ht, ft, vt, It]), (0, import_react2.useEffect)((() => {
    "preparing" === at && nt && J2({ tx: nt, solanaClient: jt, amount: ct, asset: ut, tokenPrice: It }).then(((t8) => {
      ot("loaded"), it({ amount: t8?.amountInUsd ?? t8?.amountInUsdc ?? t8?.amountInSol ?? ct, fee: t8?.feeInUsd ?? t8?.feeInSol, total: t8?.totalInUsd ?? t8?.totalInSol });
    })).catch(((t8) => {
      ot("error"), lt(t8);
    }));
  }), [nt, ct, ut, at, It]), (0, import_react2.useEffect)((() => {
    "error" === at && mt && (K3({ errorModalData: { error: mt, previousScreen: "FundSolWalletWithExternalSolanaWallet" }, solanaFundingData: Z3.solanaFundingData }), tt("ErrorScreen", false));
  }), [at, tt]), (0, import_react2.useEffect)((() => {
    if ("success" !== at) return;
    let t8 = setTimeout(gt ? () => tt(gt) : R2, p);
    return () => clearTimeout(t8);
  }), [at]), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, "success" === at ? { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(t3, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(c2, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(n, { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckCircleIcon_default, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(o2, { title: "Success!", description: `You\u2019ve successfully added ${ct} ${ut} to your ${B2.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(s3, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(h, {})] } : "preparing" === at || "loaded" === at || "sending" === at ? { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(t3, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(t2, { style: { marginTop: "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(i3, { icon: ht?.standardWallet.icon, name: ht?.standardWallet.name }) }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(o2, { style: { marginTop: "8px", marginBottom: "12px" }, title: "sending" === at && ht ? `Confirming with ${ht.standardWallet.name}` : "Confirm transaction" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(o4, { rows: [{ label: "Source", value: Gi(pt.address) }, { label: "Destination", value: Gi(ft) }, { label: "Network", value: e(dt) }, { label: "Amount", value: st?.amount, isLoading: "preparing" === at }, { label: "Estimated fee", value: st?.fee, isLoading: "preparing" === at }, { label: "Total", value: st?.total, isLoading: "preparing" === at }] }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(b, { style: { marginTop: "1rem" }, loading: "preparing" === at || "sending" === at, onClick: function() {
    "loaded" === at && nt && ht && (ot("sending"), (async function({ transaction: t8, chain: e6, sourceWallet: a3, solanaClient: o5 }) {
      let { hasFunds: n7 } = await o3({ solanaClient: o5, tx: t8 });
      if (!n7) throw new s2(`Wallet ${Gi(a3.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE);
      let r5 = r3((await a3.signAndSendTransaction({ transaction: t8, chain: e6 }).catch(((t9) => {
        throw new s2("Transaction was rejected by the user", t9, i.TRANSACTION_FAILURE);
      }))).signature);
      return await u({ rpcSubscriptions: o5.rpcSubscriptions, signature: r5, timeout: 2e4 }), r5;
    })({ solanaClient: jt, transaction: nt, chain: dt, sourceWallet: ht }).then(((t8) => {
      ot("success"), X3({ eventName: t4, payload: { provider: "external", status: "success", txHash: t8, address: ht.address, value: ct, chainType: "solana", clusterName: dt, token: ut, destinationAddress: ft, destinationValue: ct, destinationChainType: "solana", destinationClusterName: dt, destinationToken: ut } });
    })).catch(((t8) => {
      ot("error"), lt(t8);
    })));
  }, children: "Confirm" }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(h, {})] } : { children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(t3, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(h, {})] });
} };
export {
  K2 as FundSolWalletWithExternalSolanaWallet,
  K2 as default
};
