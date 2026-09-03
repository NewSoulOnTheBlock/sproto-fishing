import {
  m
} from "./chunk-64VFK6PP.js";
import {
  r
} from "./chunk-ZZ27HOQC.js";
import {
  n as n3
} from "./chunk-RDL3SKLR.js";
import {
  n as n2
} from "./chunk-PZMIZGJH.js";
import "./chunk-KZ4OUGKV.js";
import "./chunk-LBSQU3JN.js";
import {
  i
} from "./chunk-VEE35G7J.js";
import {
  t
} from "./chunk-E5F673JX.js";
import {
  o
} from "./chunk-I3STI6GC.js";
import "./chunk-WSIRTJK5.js";
import "./chunk-EOSGBBZ3.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  L,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  Ji
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import {
  D,
  I as I2,
  T
} from "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import {
  p
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import {
  St,
  Wt
} from "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import {
  F,
  I,
  M,
  q
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  n2 as n
} from "./chunk-COXZQBSX.js";
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

// node_modules/@privy-io/react-auth/dist/esm/TransferFromWalletScreen-CS3ClwWr.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem";
import "viem/utils";
import "viem/accounts";
import "viem/chains";
var I3 = ({ provider: t3, displayName: a, logo: i2, connectOnly: r2, connector: c }) => {
  let p2, { navigate: m2, setModalData: d } = g(), { connectWallet: w, walletConnectionStatus: C } = l(), g2 = D(), [v, j] = (0, import_react.useState)(false), x = "wallet_connect_v2" === c.connectorType ? t3 : c.walletClientType, [k, $] = (0, import_react.useState)(false);
  (0, import_react.useEffect)((() => {
    k && ("connected" === C?.status || C?.connectError) && (m2(r2 ? "ConnectOnlyStatusScreen" : "ConnectionStatusScreen"), $(false));
  }), [k, C]);
  let O = I(t3), I4 = window.matchMedia("(display-mode: standalone)").matches, L3 = q({ connectorType: c.connectorType, walletClientType: x });
  p2 = L3 && L3.chainTypes.includes(c.chainType) ? () => {
    L3.isInstalled || "solana" === c.chainType && "isInstalled" in c && c.isInstalled ? (w(c, x), m2(r2 ? "ConnectOnlyStatusScreen" : "ConnectionStatusScreen")) : M({ isMobile: import_react_device_detect.isMobile, walletConfig: L3 }) ? (d(((e2) => ({ ...e2, externalConnectWallet: { ...e2?.externalConnectWallet, preSelectedWalletId: t3, walletChainType: "solana" === c.chainType ? "solana-only" : "ethereum-only" } }))), m2(r2 ? "ConnectOnlyLandingScreen" : "AuthenticateWithWalletScreen")) : import_react_device_detect.isMobile ? (d({ installWalletModalData: { walletConfig: L3, chainType: c.chainType, connectOnly: r2 } }), m2("WalletInterstitialScreen")) : (d({ installWalletModalData: { walletConfig: L3, chainType: c.chainType, connectOnly: r2 } }), m2("InstallWalletScreen"));
  } : "coinbase_wallet" !== c.connectorType || "eoaOnly" !== c.coinbaseWalletConfig.preference?.options || !import_react_device_detect.isMobile || I4 || n() ? () => {
    if (!Ji(window.navigator.userAgent) || event?.isTrusted) {
      if ("mobile_wallet_adapter" === c.walletClientType) return w(c, x), void $(true);
      w(c, x), r2 ? "wallet_connect_v2" === c.connectorType ? (d(((e2) => ({ ...e2, externalConnectWallet: { ...e2?.externalConnectWallet, preSelectedWalletId: "wallet_connect_qr" } }))), m2("ConnectOnlyLandingScreen")) : m2("ConnectOnlyStatusScreen") : m2("ConnectionStatusScreen");
    }
  } : () => {
    window.location.href = `https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`;
  };
  let F3 = a || O?.metadata?.shortName || O?.name || c.walletClientType;
  return (0, import_jsx_runtime.jsxs)(M2, { onClick: () => {
    v || (j(true), setTimeout((() => j(false)), 2e3), p2());
  }, disabled: v, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { icon: i2 || O?.image_url?.md, name: F3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: F3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(E, { id: "chip-container", children: [g2?.walletClientType === x && g2?.chainType === c.chainType ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(D2, { color: "gray", children: "Recent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { id: "connect-text", children: "Connect" }), "solana" === c.chainType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(D2, { color: "gray", children: "Solana" })] })] });
};
var M2 = gt(I2)`
  /* Wallet name text color */
  > span {
    color: var(--privy-color-foreground);
  }

  /* Show "Connect" on hover */
  > #chip-container > #connect-text {
    font-weight: 500;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #chip-container > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #chip-container > #connect-text {
      display: none;
    }
  }
`;
var D2 = gt(n2)`
  margin-left: auto;
`;
var E = gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
`;
var L2 = ["coinbase_wallet", "base_account"];
var F2 = ["metamask", "okx_wallet", "rainbow", "uniswap", "bybit_wallet", "ronin_wallet", "haha_wallet", "uniswap_extension", "zerion", "rabby_wallet", "cryptocom", "binance", "kraken_wallet", "robinhood_wallet"];
var A = ["safe"];
var B = ["phantom", "backpack", "solflare", "jupiter", "universal_profile"];
var N = { component: () => {
  let s, { connectors: p2 } = l(), { setModalData: y, data: u, navigate: h2 } = g(), _2 = se(), { wallets: x } = p(), S = p2.filter(F).flatMap(((e2) => e2.wallets)), [W, b] = (0, import_react.useState)("default"), k = "solana" === u?.funding?.chainType, O = !!u?.funding?.crossChainBridgingEnabled;
  s = "ethereum" === u?.funding?.chainType ? u.funding.erc20Address && !u.funding.isUSDC ? "ethereum-only" : O && !u.funding.chain.testnet ? "ethereum-and-solana" : "ethereum-only" : O && !u.funding?.isUSDC ? "ethereum-and-solana" : "solana-only";
  let M3 = x.filter(((e2) => "privy" !== e2.walletClientType)), D3 = M3.map(((e2) => e2.walletClientType)), E2 = S.filter(((e2) => "privy" !== e2.walletClientType)), N2 = E2.map(((e2) => e2.walletClientType)), q2 = [], z = { ...u.funding };
  z.usingDefaultFundingMethod && (z.usingDefaultFundingMethod = false);
  let H = ({ wallet: e2, walletChainType: n5 }) => {
    y({ ...u, funding: { ...z, connectedWallet: e2, onContinueWithExternalWallet: () => h2(U({ destChainType: k ? "solana" : "ethereum", sourceChainType: n5 })) }, solanaFundingData: u?.solanaFundingData ? { ...u.solanaFundingData, sourceWalletData: { address: e2.address, walletClientType: e2.walletClientType } } : void 0 }), h2("FundingAmountEditScreen");
  };
  "solana-only" !== s && q2.push(...M3.map(((e2, t3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { onClick: () => H({ wallet: e2, walletChainType: "ethereum" }), icon: e2.meta.icon, name: e2.meta.name, chainType: e2.type }, t3)))), "ethereum-only" !== s && q2.push(...E2.map(((e2, t3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { onClick: () => H({ wallet: e2, walletChainType: "solana" }), icon: e2.meta.icon, name: e2.meta.name, chainType: e2.type }, t3)))), q2.push(...(({ walletList: e2, walletChainType: t3, connectors: l3, connectOnly: o3, ignore: a, walletConnectEnabled: i2, forceWallet: r2 }) => {
    let c = [], s2 = [], p3 = [], m2 = l3.filter(((e3) => "ethereum-only" === t3 ? "ethereum" === e3.chainType : "solana-only" !== t3 || "solana" === e3.chainType)), d = m2.find(((e3) => "wallet_connect_v2" === e3.connectorType));
    for (let [l4, y2] of (r2 ? [r2.wallet] : e2).entries()) {
      if ("detected_ethereum_wallets" === y2) for (let [e3, t4] of m2.filter((({ chainType: e4, connectorType: n5, walletClientType: t5 }) => "solana" !== e4 && ("uniswap_wallet_extension" === t5 || "uniswap_extension" === t5 ? !a.includes("uniswap") : "crypto.com_wallet_extension" === t5 || "crypto.com_onchain" === t5 ? !a.includes("cryptocom") : "injected" === n5 && !a.includes(t5)))).entries()) {
        let { walletClientType: a2, walletBranding: i3, chainType: r3 } = t4;
        ("unknown" === a2 ? s2 : c).push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: a2, logo: i3.icon, displayName: i3.name, connector: t4 }, `${l4}-${y2}-${a2}-${r3}-${e3}`));
      }
      if ("detected_solana_wallets" === y2) for (let [e3, i3] of m2.filter((({ chainType: e4, walletClientType: n5 }) => {
        if ("solana" === e4) return "ethereum-only" !== t3 && !a.includes(n5);
      })).entries()) {
        let { walletClientType: t4, walletBranding: a2, chainType: r3 } = i3;
        ("unknown" === t4 ? s2 : c).push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: t4, logo: a2.icon, displayName: a2.name, connector: i3 }, `${l4}-${y2}-${t4}-${r3}-${e3}`));
      }
      if (B.includes(y2)) {
        let e3 = m2.find(((e4) => "injected" === e4.connectorType && e4.walletClientType === y2 || e4.connectorType === y2));
        if (e3 && c.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: e3 }, `${l4}-${y2}`)), "solana-only" === t3 || "ethereum-and-solana" === t3) {
          let e4 = m2.find((({ chainType: e5, walletClientType: n5 }) => "solana" === e5 && n5 === y2));
          e4 && c.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: e4 }, `${y2}-solana`));
        }
      } else if (F2.includes(y2)) {
        let e3 = m2.find(((e4) => "uniswap" === y2 ? "uniswap_wallet_extension" === e4.walletClientType || "uniswap_extension" === e4.walletClientType : "cryptocom" === y2 ? "crypto.com_wallet_extension" === e4.walletClientType || "crypto.com_onchain" === e4.walletClientType : "injected" === e4.connectorType && e4.walletClientType === y2));
        if (i2 && !e3 && (e3 = d), e3 && c.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: e3, logo: "injected" === e3.connectorType ? e3.walletBranding.icon : void 0, displayName: "injected" === e3.connectorType ? e3.walletBranding.name : void 0 }, `${l4}-${y2}`)), "solana-only" === t3 || "ethereum-and-solana" === t3) {
          let e4 = m2.find((({ chainType: e5, walletClientType: n5 }) => "solana" === e5 && n5 === y2));
          e4 && c.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: e4 }, `${y2}-solana`));
        }
      } else if (L2.includes(y2)) {
        let e3 = m2.find((({ connectorType: e4 }) => e4 === y2));
        e3 && c.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: e3, displayName: "coinbase_wallet" === e3.walletClientType ? "Coinbase" : "Base", logo: "coinbase_wallet" === e3.walletClientType ? St : Wt }, `${l4}-${y2}`));
      } else if (A.includes(y2)) d && p3.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: d }, `${l4}-${y2}`));
      else if ("wallet_connect" === y2) d && p3.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, connector: d, logo: d.walletBranding.icon, displayName: "WalletConnect" }, `${l4}-${y2}`));
      else if (y2 === r2?.wallet) {
        let t4 = "ethereum" === r2.chainType && e2.includes("detected_ethereum_wallets"), a2 = "solana" === r2.chainType && e2.includes("detected_solana_wallets");
        if (t4 || a2) {
          let e3 = m2.find((({ walletClientType: e4 }) => e4 === y2));
          e3 && c.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I3, { connectOnly: o3, provider: y2, displayName: e3.walletBranding?.name, logo: e3.walletBranding?.icon, connector: e3 }, `${l4}-${y2}`));
        }
      }
    }
    return [...s2, ...c, ...p3];
  })({ walletList: _2.appearance.walletList.filter(((e2) => !M3.some(((n5) => n5.walletClientType === e2)) && !E2.some(((n5) => n5.walletClientType === e2)))), walletChainType: s, connectors: p2, connectOnly: true, ignore: [..._2.appearance.walletList, ...D3, ...N2], walletConnectEnabled: _2.externalWallets.walletConnect.enabled }));
  let R = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { text: "More wallets", onClick: () => b("overflow") }), U = ({ sourceChainType: e2, destChainType: n5 }) => "ethereum" === e2 && "solana" === n5 ? "AwaitingEvmToSolBridgingScreen" : "ethereum" === e2 && "ethereum" === n5 ? "AwaitingExternalEthereumTransferScreen" : "solana" === e2 && "ethereum" === n5 ? "AwaitingSolToEvmBridgingScreen" : z.externalSolanaFundingScreen;
  return (0, import_react.useEffect)((() => {
    y({ ...u, externalConnectWallet: { onCompleteNavigateTo: ({ address: e2, walletClientType: n5, walletChainType: t3 }) => {
      let l3 = t3 ?? "ethereum", o3 = "ethereum" === l3 ? M3.find(((t4) => t4.address === e2 && t4.walletClientType === n5)) : E2.find(((t4) => t4.address === e2 && t4.walletClientType === n5));
      return y({ ...u, funding: { ...z, connectedWallet: o3, onContinueWithExternalWallet: () => {
        h2(U({ destChainType: k ? "solana" : "ethereum", sourceChainType: l3 }));
      } }, solanaFundingData: u?.solanaFundingData ? { ...u.solanaFundingData, sourceWalletData: { address: e2 || "", walletClientType: n5 || "" } } : void 0 }), "FundingAmountEditScreen";
    } } });
  }), []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, "overflow" === W ? { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { backFn: () => b("default") }, "header"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { style: { color: "var(--privy-color-foreground-3)", textAlign: "left" }, children: "More wallets" }), q2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] } : { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { title: "Transfer from wallet", description: "Connect a wallet to deposit funds or send funds manually to your wallet address." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T, { children: [q2.length > 4 ? q2.slice(0, 3) : q2, q2.length > 4 && R] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
var P = ({ onClick: t3, icon: l3, name: o3, chainType: a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I2, { onClick: t3, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n3, { style: { width: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { icon: l3, name: o3 }) }), o3, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { color: "gray", style: { marginLeft: "auto" }, children: "Connected" }), "solana" === a && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { color: "gray", children: "Solana" })] });
export {
  N as TransferFromWalletScreen,
  N as default
};
