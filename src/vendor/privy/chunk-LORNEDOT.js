import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  A,
  T,
  g,
  p,
  u
} from "./chunk-EJB6TW3T.js";
import {
  create
} from "./chunk-H7FAMYXB.js";
import {
  D,
  c,
  d,
  y
} from "./chunk-COXZQBSX.js";
import {
  n
} from "./chunk-W22FA2JU.js";
import {
  I,
  L,
  W,
  ne,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/index-C3MAVCxp.mjs
var import_react = __toESM(require_react(), 1);
import { isAddress as r } from "viem";
import { getAddress as o, toHex as c2 } from "viem/utils";
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var k = __toESM(require_lib(), 1);
var T2 = create((() => ({ listings: [], loading: false })));
var x = T2.setState;
var P = (e2) => T2.getState().listings.find((({ slug: t }) => j(t) === j(e2)));
var z = (e2) => {
  let t;
  try {
    t = new URL(e2).hostname;
  } catch (e3) {
    return;
  }
  return T2.getState().listings.find((({ homepage: e3 }) => {
    let n2;
    try {
      n2 = new URL(e3).hostname;
    } catch (e4) {
      return false;
    }
    return t.includes(n2);
  }));
};
var _ = (t = true) => {
  let i = se(), a = T2(((e2) => e2.listings)), l = T2(((e2) => e2.loading)), s = !!a.length;
  return (0, import_react.useEffect)((() => {
    t && !s && (x({ listings: [], loading: true }), (async (e2) => {
      let t2 = new URL("v3/wallets", "https://explorer-api.walletconnect.com");
      t2.searchParams.append("projectId", e2);
      let n2 = await fetch(t2);
      return n2.ok ? Object.values((await n2.json()).listings).sort((({ slug: e3 }, { slug: t3 }) => "rainbow" === e3 && "metamask" === t3 ? 1 : "metamask" === e3 || "rainbow" === e3 ? -1 : 1)) : (console.debug(`Failed to fetch WalletConnect listings: ${await n2.text().catch((() => "No response."))}`), []);
    })(i.walletConnectCloudProjectId).then(((e2) => x({ listings: e2, loading: false }))).catch(((e2) => {
      console.error(e2), x({ listings: [], loading: false });
    })));
  }), [t, s, i.walletConnectCloudProjectId]), { listings: a, loading: l };
};
var I2 = (e2) => {
  let { listings: t } = _();
  return t.find((({ slug: t2 }) => j(t2) === j(e2)));
};
function j(e2) {
  return "cryptocom" === e2 ? "cryptocom-defi" : "binance" === e2 ? "binance-defi" : e2.replace(/[-_]wallet$/, "");
}
function S(e2) {
  return ["wallet_connect", "backpack", "binance", "binanceus", "bitget_wallet", "bybit_wallet", "cryptocom", "haha_wallet", "jupiter", "metamask", "okx_wallet", "phantom", "rabby_wallet", "rainbow", "ronin_wallet", "safe", "solflare", "uniswap", "zerion", "kraken_wallet", "robinhood_wallet"].some(((t) => e2?.includes(t)));
}
function E(e2) {
  return "ethereum" === e2.type;
}
function L2(e2, t) {
  if (e2.length !== t.length) return false;
  for (let n2 = 0; n2 < e2.length; n2++) {
    let i = e2[n2], a = t[n2];
    if (i?.address !== a?.address || i && a && E(i) && E(a) && i?.chainId !== a?.chainId || i?.connectorType !== a?.connectorType || i?.connectedAt !== a?.connectedAt || i?.walletClientType !== a?.walletClientType || i?.isConnected !== a?.isConnected || i?.linked !== a?.linked) return false;
  }
  return true;
}
var N = (e2, t) => e2.rpcTimeouts && e2.rpcTimeouts[t] || L;
function U(e2) {
  return "ethereum" === e2.chainType;
}
var $ = class extends g {
  buildConnectedWallet(e2, t, n2, i) {
    let a = async () => !!this.wallets.find(((t2) => o(t2.address) === o(e2)));
    return { type: "ethereum", address: o(e2), chainId: t, meta: n2, imported: i, switchChain: async (n3) => {
      let i2, l;
      if (!a) throw new n("Wallet is not currently connected.");
      let s = this.wallets.find(((t2) => o(t2.address) === o(e2)))?.chainId;
      if (!s) throw new n("Unable to determine current chainId.");
      if ("number" == typeof n3 ? (i2 = `0x${n3.toString(16)}`, l = n3) : (i2 = n3, l = Number(n3)), s === y(i2)) return;
      let r2 = this.chains.find(((e3) => e3.id === l));
      if (!r2) throw new n(`Unsupported chainId: ${n3}`);
      let c3 = async () => {
        await this.proxyProvider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: i2 }] });
      };
      try {
        return await c3();
      } catch (e3) {
        if (((e4, t2) => {
          switch (t2) {
            case "coinbase_wallet":
            case "base_account":
              return e4.message.includes("addEthereumChain");
            case "rabby_wallet":
              return e4.message.includes("Unrecognized chain ID");
            default:
              return 4902 === e4.code || e4.message?.includes("4902");
          }
        })(e3, this.walletClientType)) return "rabby_wallet" === this.walletClientType && await c(300), await this.proxyProvider.request({ method: "wallet_addEthereumChain", params: [{ chainId: i2, chainName: r2.name, nativeCurrency: r2.nativeCurrency, rpcUrls: [r2.rpcUrls.default?.http[0] ?? ""], blockExplorerUrls: [r2.blockExplorers?.default.url ?? ""] }] }), c3();
        if ("rainbow" === this.walletClientType && e3.message?.includes("wallet_switchEthereumChain")) throw new n(`Rainbow does not support the chainId ${t}`);
        throw e3;
      }
    }, connectedAt: Date.now(), walletClientType: this.walletClientType, connectorType: this.connectorType, isConnected: a, getEthereumProvider: async () => {
      if (!await a()) throw new n("Wallet is not currently connected.");
      return this.proxyProvider;
    }, sign: async (e3) => {
      if (!await a()) throw new n("Wallet is not currently connected.");
      return await this.sign(e3);
    }, disconnect: () => {
      this.disconnect();
    } };
  }
  async syncAccounts(e2) {
    let t;
    u.debug("Syncing accounts", { wallet: this.walletClientType });
    let n2 = e2;
    try {
      if (void 0 === n2) {
        u.rpcRequest("eth_accounts", this.walletClientType);
        let e3 = await d((() => this.proxyProvider.request({ method: "eth_accounts" })), { maxAttempts: 10, delayMs: 500 });
        u.rpcResponse("eth_accounts", this.walletClientType), Array.isArray(e3) && (n2 = e3);
      }
    } catch (e3) {
      u.warn("Wallet did not respond to eth_accounts, using prefetched accounts", { wallet: this.walletClientType });
    }
    if (!n2 || !Array.isArray(n2) || n2.length <= 0 || !n2[0]) return void u.debug("No accounts found", { wallet: this.walletClientType });
    let i = n2[0];
    if (!r(i)) return;
    let s = o(i), c3 = [];
    if ("privy" === this.walletClientType) {
      let e3 = D.get(W(s));
      this.chains.find(((t2) => t2.id === Number(e3))) || (D.del(W(s)), e3 = null), t = e3 || `0x${this.defaultChain.id.toString(16)}`;
      try {
        await this.proxyProvider.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t }] });
      } catch (e4) {
        u.warn("Unable to switch embedded wallet chain on initialization", { wallet: this.walletClientType, chainId: t });
      }
    } else try {
      u.rpcRequest("eth_chainId", this.walletClientType);
      let e3 = await d((() => this.proxyProvider.request({ method: "eth_chainId" })), { maxAttempts: 10, delayMs: 500 });
      if (u.rpcResponse("eth_chainId", this.walletClientType), "string" == typeof e3) t = e3;
      else {
        if ("number" != typeof e3) throw Error("Invalid chainId returned from provider");
        t = `0x${e3.toString(16)}`;
      }
    } catch (e3) {
      u.warn("Failed to get chainId from provider, using default", { wallet: this.walletClientType, defaultChainId: I }), t = I;
    }
    let h = y(t);
    if (!c3.find(((e3) => o(e3.address) === s))) {
      let e3 = { name: this.walletBranding.name, icon: this.walletBranding.icon, id: this.walletBranding.id };
      c3.push(this.buildConnectedWallet(o(i), h, e3, "embedded_imported" === this.connectorType));
    }
    L2(c3, this.wallets) || (u.debug("Wallets updated", { wallet: this.walletClientType, address: s, chainId: h }), this.wallets = c3, this.emit("walletsUpdated"));
  }
  async getConnectedWallet() {
    let e2 = await this.proxyProvider.request({ method: "eth_accounts" });
    return this.wallets.sort(((e3, t) => t.connectedAt - e3.connectedAt)).find(((t) => e2.find(((e3) => o(e3) === o(t.address))))) || null;
  }
  async isConnected() {
    let e2 = await this.proxyProvider.request({ method: "eth_accounts" });
    return Array.isArray(e2) && e2.length > 0;
  }
  async sign(e2) {
    return await this.connect({ showPrompt: false }), this.proxyProvider.request({ method: "personal_sign", params: [c2(e2), this.wallets[0]?.address] });
  }
  subscribeListeners() {
    this.proxyProvider.on("accountsChanged", this.onAccountsChanged), this.proxyProvider.on("chainChanged", this.onChainChanged), this.proxyProvider.on("disconnect", this.onDisconnect), this.proxyProvider.on("connect", this.onConnect);
  }
  unsubscribeListeners() {
    this.proxyProvider.removeListener("accountsChanged", this.onAccountsChanged), this.proxyProvider.removeListener("chainChanged", this.onChainChanged), this.proxyProvider.removeListener("disconnect", this.onDisconnect), this.proxyProvider.removeListener("connect", this.onConnect);
  }
  constructor(e2, t, n2, i) {
    super(e2), this.chainType = "ethereum", this.onAccountsChanged = (e3) => {
      u.providerEvent("accountsChanged", this.walletClientType, { accountsCount: e3.length }), 0 === e3.length ? this.onDisconnect() : this.syncAccounts(e3);
    }, this.onChainChanged = (e3) => {
      u.providerEvent("chainChanged", this.walletClientType, { chainId: e3 }), this.wallets.forEach(((t2) => {
        t2.chainId = y(e3), "privy" === this.walletClientType && D.put(W(t2.address), e3);
      })), this.emit("walletsUpdated");
    }, this.onDisconnect = () => {
      u.providerEvent("disconnect", this.walletClientType), this.connected = false, this.wallets = [], this.emit("walletsUpdated");
    }, this.onConnect = async () => {
      u.providerEvent("connect", this.walletClientType), "base_account" === this.connectorType && this.connected || (this.connected = true, "coinbase_wallet" === this.connectorType && await c(500), this.syncAccounts());
    }, this.wallets = [], this.walletClientType = e2, this.chains = t, this.defaultChain = n2, this.rpcConfig = i, this.rpcTimeoutDuration = N(i, e2), this.connected = false, this.initialized = false;
  }
};
var A2 = class {
  on(e2, t) {
    if (this.walletProvider) return this.addWalletProviderListener(e2, t);
    this._subscriptions.push({ eventName: e2, listener: t });
  }
  addWalletProviderListener(e2, t) {
    if ("function" == typeof this.walletProvider?.on) try {
      return this.walletProvider.on(e2, t);
    } catch (e3) {
      console.warn("Unable to subscribe to wallet provider event");
    }
    else console.warn("Wallet provider does not support event subscriptions");
  }
  async request(e2) {
    if (!this.walletProvider) throw new n(`A wallet request of type ${e2.method} was made before setting a wallet provider.`);
    return Promise.race([this.walletProvider.request(e2), this.walletTimeout()]).catch(((e3) => {
      throw p(e3);
    }));
  }
  constructor(e2, t) {
    this.removeListener = (e3, t2) => {
      if (this.walletProvider) try {
        return this.walletProvider.removeListener(e3, t2);
      } catch (e4) {
        console.warn("Unable to remove wallet provider listener");
      }
    }, this.walletTimeout = (e3 = new A(), t2 = this.rpcTimeoutDuration) => new Promise(((n2, i) => setTimeout((() => {
      i(e3);
    }), t2))), this.setWalletProvider = (e3) => {
      this.walletProvider && this._subscriptions.forEach(((e4) => {
        this.removeListener(e4.eventName, e4.listener);
      })), this.walletProvider = e3, this._subscriptions.forEach(((e4) => {
        this.addWalletProviderListener(e4.eventName, e4.listener);
      }));
    }, this.walletProvider = e2, this.rpcTimeoutDuration = t || L, this._subscriptions = [];
  }
};
var W2 = class extends $ {
  get walletBranding() {
    return { id: this.id, name: this.name, icon: this.icon };
  }
  async initialize() {
    this.initialized = true, this.emit("initialized");
  }
  async connect() {
    throw Error("connect called for an uninstalled wallet via the EthereumNullConnector");
  }
  disconnect() {
    throw Error("disconnect called for an uninstalled wallet via the EthereumNullConnector");
  }
  promptConnection(e2) {
    throw Error(`promptConnection called for an uninstalled wallet via the EthereumNullConnector for ${e2}`);
  }
  constructor({ id: e2, name: t, icon: n2, walletClientType: a, defaultChain: l }) {
    super(a, [], l, {}), this.connectorType = "null", this.proxyProvider = new A2(void 0, L), this.id = e2, this.name = t, this.icon = n2;
  }
};
var O = ({ ...e2 } = {}) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", ...e2, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { width: "32", height: "32", rx: "6", fill: "#121314" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { transform: "translate(4, 4)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 318.6 318.6", children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: ".s1{stroke-linecap:round;stroke-linejoin:round}.s2{fill:#e4761b;stroke:#e4761b}.s3{fill:#f6851b;stroke:#f6851b}" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#e2761b", stroke: "#e2761b", className: "s1", d: "m274.1 35.5-99.5 73.9L193 65.8z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z", className: "s1 s2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z", className: "s1 s2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#d7c1b3", stroke: "#d7c1b3", className: "s1", d: "m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#233447", stroke: "#233447", className: "s1", d: "m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#cd6116", stroke: "#cd6116", className: "s1", d: "m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#e4751f", stroke: "#e4751f", className: "s1", d: "m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z", className: "s3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#c0ad9e", stroke: "#c0ad9e", className: "s1", d: "m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#161616", stroke: "#161616", className: "s1", d: "m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "#763d16", stroke: "#763d16", className: "s1", d: "m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z", className: "s3" })] }) })] });
var R = Object.freeze({ phantom: { client: "phantom", name: "Phantom", installLink: k.isFirefox ? "https://addons.mozilla.org/en-US/firefox/addon/phantom-app/" : "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en", chainTypes: ["ethereum", "solana"], get isInstalled() {
  if ("phantom" in window) {
    let e2 = window;
    if (e2?.phantom?.ethereum?.isPhantom && e2?.phantom?.ethereum?.chainId || e2?.phantom?.solana?.isPhantom) return true;
  }
  return false;
}, getMobileRedirect({ useUniversalLink: e2, isSolana: t, connectOnly: n2 }) {
  let i = B({ client: this.client, isSolana: t, connectOnly: n2 });
  return `${e2 ? "phantom://" : "https://phantom.app/ul/"}browse/${i}?ref=${i}`;
} }, solflare: { client: "solflare", name: "Solflare", installLink: k.isFirefox ? "https://addons.mozilla.org/es/firefox/addon/solflare-wallet/" : "https://chromewebstore.google.com/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic", chainTypes: ["solana"], get isInstalled() {
  return "solflare" in window && !!window?.solflare?.isSolflare;
}, getMobileRedirect({ useUniversalLink: e2, isSolana: t, connectOnly: n2 }) {
  let i = B({ client: this.client, isSolana: t, connectOnly: n2 });
  return `${e2 ? "solflare://ul/v1/" : "https://solflare.com/ul/v1/"}browse/${i}?ref=${i}`;
} }, jupiter: { client: "jupiter", name: "Jupiter Wallet", installLink: "https://chromewebstore.google.com/detail/jupiter-wallet/iledlaeogohbilgbfhmbgkgmpplbfboh", chainTypes: ["solana"], get isInstalled() {
  return "jupiter" in window && !!window?.jupiter?.isJupiter;
}, getMobileRedirect({ isSolana: e2, connectOnly: t }) {
  let n2 = B({ client: this.client, isSolana: e2, connectOnly: t });
  return `jupjupjup://jup.ag/browse/${n2}?ref=${n2}`;
} }, backpack: { client: "backpack", name: "Backpack", installLink: "https://chromewebstore.google.com/detail/backpack/aflkmfhebedbjioipglgcbcmnbpgliof", chainTypes: ["ethereum", "solana"], get isInstalled() {
  return !(!("backpack" in window) || !window?.backpack?.ethereum?.isBackpack && !window?.backpack?.solana?.isBackpack);
}, getMobileRedirect({ useUniversalLink: e2, isSolana: t, connectOnly: n2 }) {
  let i = B({ client: this.client, isSolana: t, connectOnly: n2 });
  return `${e2 ? "backpack://ul/v1/" : "https://backpack.app/ul/v1/"}browse/${i}?ref=${i}`;
} }, okx_wallet: { client: "okx_wallet", name: "OKX Wallet", installLink: "https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge", chainTypes: ["ethereum", "solana"], get isInstalled() {
  return "okxwallet" in window && !!window?.okxwallet?.isOkxWallet;
}, getMobileRedirect({ isSolana: e2, connectOnly: t }) {
  return `okx://wallet/dapp/url?dappUrl=${B({ client: this.client, isSolana: e2, connectOnly: t })}`;
} } });
function q({ connectorType: e2, walletClientType: t }) {
  for (let n2 of ne) if (e2 === n2 || t === n2) return R[n2];
}
function M({ isMobile: e2, walletConfig: t }) {
  return !e2 && "phantom" === t?.client;
}
function B({ client: e2, isSolana: t, connectOnly: n2 }) {
  let i = new URL(window.location.href);
  return i.searchParams.set("privy_connector", t ? "solana_adapter" : "injected"), i.searchParams.set("privy_wallet_client", e2), i.searchParams.set("privy_connect_only", String(n2)), encodeURIComponent(i.href.replace(/\/$/g, ""));
}
var D2 = class extends T {
  get walletBranding() {
    return { id: this.id, name: this.name, icon: this.icon };
  }
  async initialize() {
    this.initialized = true, this.emit("initialized");
  }
  async connect() {
    throw Error("connect called for an uninstalled wallet via the SolanaNullConnector");
  }
  constructor({ id: e2, name: t, icon: n2 }) {
    super({ name: t }, false), this.connectorType = "null", this.proxyProvider = new A2(void 0, L), this.disconnect = async () => {
      throw Error("disconnect called for an uninstalled wallet via the SolanaNullConnector");
    }, this.promptConnection = async () => {
      throw Error("promptConnection called for an uninstalled wallet via the SolanaNullConnector");
    }, this.id = e2, this.name = t, this.icon = n2;
  }
};
function F(e2) {
  return "solana" === e2.chainType;
}
function J(e2) {
  return "solana" === e2.type;
}

export {
  P,
  z,
  _,
  I2 as I,
  S,
  E,
  L2 as L,
  N,
  U,
  $,
  A2 as A,
  W2 as W,
  O,
  R,
  q,
  M,
  D2 as D,
  F,
  J
};
