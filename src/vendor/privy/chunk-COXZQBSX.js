import {
  n
} from "./chunk-W22FA2JU.js";

// node_modules/@privy-io/react-auth/dist/esm/getPublicClient-Z_u6EviM.mjs
import { createPublicClient as r, http as t } from "viem";
import { tempo as e, tempoModerato as i } from "viem/chains";
var l = (l3, s2, c2, o2) => {
  let a2 = Number(l3), d2 = s2.find(((r3) => r3.id === a2));
  if (!d2) throw new n(`Unsupported chainId ${l3}`, 4901);
  let u2 = n2(d2, c2, o2.appId);
  if (a2 === e.id || a2 === i.id) {
    let p2 = a2 === e.id ? e : i;
    return r({ transport: t(u2), chain: p2 });
  }
  return r({ transport: t(u2), chain: d2 });
};
var n2 = (r3, t2, e2) => {
  let i3, l3 = r3.id, s2 = Number(r3.id);
  if (r3.rpcUrls.privyWalletOverride && r3.rpcUrls.privyWalletOverride.http[0]) i3 = r3.rpcUrls.privyWalletOverride.http[0];
  else if (t2.rpcUrls && t2.rpcUrls[s2]) i3 = t2.rpcUrls[s2];
  else if (r3.rpcUrls.privy?.http[0]) {
    let t3 = new URL(r3.rpcUrls.privy.http[0]);
    t3.searchParams.append("privyAppId", e2), i3 = t3.toString();
  } else i3 = r3.rpcUrls.public?.http[0] ? r3.rpcUrls.public.http[0] : r3.rpcUrls.default?.http[0];
  if (!i3) throw new n(`No RPC url found for ${l3}`);
  return i3;
};

// node_modules/@privy-io/react-auth/dist/esm/storage-ClxaIe6D.mjs
var i2 = (e2) => e2.isApexWallet ? "Apex Wallet" : e2.isAvalanche ? "Core Wallet" : e2.isBackpack ? "Backpack" : e2.isBifrost ? "Bifrost Wallet" : e2.isBitKeep ? "BitKeep" : e2.isBitski ? "Bitski" : e2.isBlockWallet ? "BlockWallet" : e2.isBraveWallet ? "Brave Wallet" : e2.isClover ? "Clover" : e2.isCoin98 ? "Coin98 Wallet" : e2.isCoinbaseWallet ? "Coinbase Wallet" : e2.isDawn ? "Dawn Wallet" : e2.isDefiant ? "Defiant" : e2.isDesig ? "Desig Wallet" : e2.isEnkrypt ? "Enkrypt" : e2.isExodus ? "Exodus" : e2.isFordefi ? "Fordefi" : e2.isFrame ? "Frame" : e2.isFrontier ? "Frontier Wallet" : e2.isGamestop ? "GameStop Wallet" : e2.isHaqqWallet ? "HAQQ Wallet" : e2.isHyperPay ? "HyperPay Wallet" : e2.isImToken ? "ImToken" : e2.isHaloWallet ? "Halo Wallet" : e2.isKuCoinWallet ? "KuCoin Wallet" : e2.isMathWallet ? "MathWallet" : e2.isNovaWallet ? "Nova Wallet" : e2.isOkxWallet || e2.isOKExWallet ? "OKX Wallet" : e2.isOneInchIOSWallet || e2.isOneInchAndroidWallet ? "1inch Wallet" : e2.isOneKey ? "OneKey Wallet" : e2.isOpera ? "Opera" : e2.isPhantom || "isPhantom" in e2 ? "Phantom" : e2.isPortal ? "Ripio Portal" : e2.isRabby ? "Rabby Wallet" : e2.isRainbow ? "Rainbow" : e2.isSafePal ? "SafePal Wallet" : e2.isStatus ? "Status" : e2.isSubWallet ? "SubWallet" : e2.isTalisman ? "Talisman" : e2.isTally || e2.isTaho ? "Taho" : e2.isTokenPocket ? "TokenPocket" : e2.isTokenary ? "Tokenary" : e2.isTrust || e2.isTrustWallet ? "Trust Wallet" : e2.isTTWallet ? "TTWallet" : e2.isXDEFI ? "XDEFI Wallet" : e2.isZeal ? "Zeal" : e2.isZerion ? "Zerion" : e2.isMetaMask ? "MetaMask" : void 0;
var a = (e2, t2) => {
  if (!e2.isMetaMask) return false;
  if (e2.isMetaMask && !t2) return true;
  if (e2.isBraveWallet && !e2._events && !e2._state || "MetaMask" !== i2(e2)) return false;
  if (e2.providers) {
    for (let t3 of e2.providers) if (!a(t3)) return false;
  }
  return true;
};
var n3 = () => {
  let e2 = window;
  if (!e2.ethereum) return false;
  if (e2.ethereum.isCoinbaseWallet) return true;
  if (e2.ethereum.providers) {
    for (let t2 of e2.ethereum.providers) if (t2 && t2.isCoinbaseWallet) return true;
  }
  return false;
};
var s = (e2, t2) => {
  let i3 = [], a2 = [];
  for (let [n4, s2] of e2.entries()) n4 < t2 ? i3.push(s2) : a2.push(s2);
  return [i3, a2];
};
var r2 = (e2) => !!String(e2).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
var l2 = (e2, t2) => {
  let i3 = e2.slice(0), a2 = [];
  for (; i3.length; ) a2.push(i3.splice(0, t2));
  return a2;
};
var o = (e2, t2 = 3, i3 = 4, a2 = "ethereum") => {
  if (!e2) return "";
  let n4 = "ethereum" === a2 ? 2 : 0;
  return t2 + i3 + n4 + 3 >= e2.length ? e2 : `${e2.slice(0, n4 + t2)}...${e2.slice(e2.length - i3, e2.length)}`;
};
var u = (e2, t2 = 3, i3 = 4) => o(e2, t2, i3, "solana");
var c = (e2) => new Promise(((t2) => setTimeout(t2, e2)));
function p(e2, { interval: t2 = 100, timeout: i3 = 5e3 } = {}) {
  return new Promise(((a2, n4) => {
    let s2, r3 = 0, l3 = () => {
      r3 >= i3 ? n4("Max attempts reached without result") : (s2 = e2(), r3 += t2, null == s2 ? setTimeout(l3, t2) : a2(s2));
    };
    l3();
  }));
}
var d = (e2, t2 = {}) => {
  let i3 = t2.delayMs || 150, a2 = t2.maxAttempts || 270;
  return new Promise((async (n4, s2) => {
    let r3 = false, l3 = 0;
    for (; !r3 && l3 < a2; ) {
      if (t2.abortSignal?.aborted) return;
      e2().then(((e3) => {
        r3 = true, n4(e3);
      }), ((...e3) => {
        r3 = true, s2(...e3);
      })), l3 += 1, await c(i3);
    }
    r3 || s2(Error("Exceeded max attempts before resolving function"));
  }));
};
var f = (e2) => e2.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "");
var m = (e2) => "string" == typeof e2 ? e2 : "0x" + e2.toString(16);
async function h({ store: e2, walletList: t2, externalWalletConfig: n4, walletChainType: s2, timeout: r3 = 3e3 }) {
  let l3 = false, o2 = window;
  return new Promise(((u2) => {
    function c2() {
      if (l3) return;
      l3 = true, window.removeEventListener("ethereum#initialized", c2);
      let r4 = e2.getProviders();
      console.debug("Detected injected providers:", r4.map(((e3) => e3.info)));
      let o3 = [];
      for (let e3 of r4) t2.includes("coinbase_wallet") && "com.coinbase.wallet" === e3.info.rdns || "solana-only" === s2 && "app.phantom" === e3.info.rdns || o3.push({ type: e3.info.name.toLowerCase().replace(/\s/g, "_"), eip6963InjectedProvider: e3 });
      if ("solana-only" !== s2) for (let e3 of (function() {
        let e4 = window, t3 = e4.ethereum;
        if (!t3) return [];
        let i3 = [];
        if (t3.providers?.length) for (let e5 of t3.providers) e5 && i3.push(e5);
        return i3.push(e4.ethereum), i3;
      })()) {
        let t3 = i2(e3);
        if (!r4.some(((e4) => e4.info.name === t3))) {
          if (a(e3, true) && !o3.find(((e4) => "metamask" === e4.type))) {
            o3.push({ type: "metamask", legacyInjectedProvider: e3 });
            continue;
          }
          if ("Phantom" === t3 && !o3.find(((e4) => "phantom" === e4.type))) {
            o3.push({ type: "phantom", legacyInjectedProvider: e3 });
            continue;
          }
          if ("Coinbase Wallet" === t3 && !o3.find(((e4) => "coinbase_wallet" === e4.type && "smartWalletOnly" !== n4.coinbaseWallet?.config?.preference?.options))) {
            o3.push({ type: "coinbase_wallet", legacyInjectedProvider: e3 });
            continue;
          }
          o3.find(((e4) => "unknown_browser_extension" === e4.type)) || o3.push({ type: "unknown_browser_extension", legacyInjectedProvider: e3 });
        }
      }
      u2(o3);
    }
    o2.ethereum ? c2() : (window.addEventListener("ethereum#initialized", c2, { once: true }), setTimeout((() => {
      c2();
    }), r3));
  }));
}
function y(e2) {
  return `eip155:${String(Number(e2))}`;
}
var W = (i3, a2, n4, s2) => {
  let r3 = Number(i3), l3 = a2.find(((e2) => e2.id === r3));
  if (!l3) throw new n(`Unsupported chainId ${i3}`, 4901);
  return n2(l3, n4, s2);
};
var g = (t2, i3) => {
  let a2 = Number(t2), n4 = i3.find(((e2) => e2.id === a2));
  if (!n4) throw new n(`Unsupported chainId ${t2}`, 4901);
  return n4.blockExplorers?.default.url;
};
var w = (e2) => {
  let t2 = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" }, i3 = e2.types.EIP712Domain ?? Object.entries(e2.domain).map((([e3, i4]) => {
    if (null != i4 && "string" == typeof e3 && e3 in t2) return { name: e3, type: t2[e3] };
  })).filter(((e3) => void 0 !== e3));
  return { ...e2, types: { ...e2.types, EIP712Domain: i3 } };
};
function v(e2, { min: t2, max: i3 }) {
  return Math.min(Math.max(e2, t2), i3);
}
var b = (e2) => e2?.map(((e3) => ({ signer_id: e3.signerId, override_policy_ids: e3.policyIds })));
var k = class {
  get(e2) {
    let t2 = localStorage.getItem(e2);
    return null === t2 ? void 0 : JSON.parse(t2);
  }
  put(e2, t2) {
    void 0 !== t2 ? localStorage.setItem(e2, JSON.stringify(t2)) : this.del(e2);
  }
  del(e2) {
    localStorage.removeItem(e2);
  }
  getKeys() {
    return Object.entries(localStorage).map((([e2]) => e2));
  }
};
function P() {
  try {
    let e2 = "privy:__session_storage__test", t2 = new k();
    return t2.put(e2, "blobby"), t2.del(e2), true;
  } catch (e2) {
    return false;
  }
}
var D = "undefined" != typeof window && window.localStorage ? new k() : new class {
  get(e2) {
    return this._cache[e2];
  }
  put(e2, t2) {
    void 0 !== t2 ? this._cache[e2] = t2 : this.del(e2);
  }
  del(e2) {
    delete this._cache[e2];
  }
  getKeys() {
    return Object.keys(this._cache);
  }
  constructor() {
    this._cache = {};
  }
}();

export {
  l,
  n2 as n,
  n3 as n2,
  s,
  r2 as r,
  l2,
  o,
  u,
  c,
  p,
  d,
  f,
  m,
  h,
  y,
  W,
  g,
  w,
  v,
  b,
  P,
  D
};
