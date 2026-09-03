import {
  s
} from "./chunk-YH7HVATI.js";
import {
  n as n2
} from "./chunk-WVISDMZL.js";
import {
  t as t4
} from "./chunk-3X5UVGJ4.js";
import {
  j
} from "./chunk-FUH2YWOK.js";
import "./chunk-NH742RS2.js";
import "./chunk-OBV6VSAS.js";
import {
  require_browser,
  x
} from "./chunk-4BHOTT2W.js";
import {
  t as t3
} from "./chunk-4M5GFLTB.js";
import "./chunk-FDAXBPM5.js";
import {
  n
} from "./chunk-CIPV5FN4.js";
import {
  r
} from "./chunk-ZZ27HOQC.js";
import {
  e
} from "./chunk-DNNT7Y2Z.js";
import {
  e as e2
} from "./chunk-WLRIHMQB.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-QB7GMZ7D.js";
import {
  t
} from "./chunk-E5F673JX.js";
import "./chunk-VC62FKIT.js";
import {
  t as t2
} from "./chunk-4MCBV4ZR.js";
import {
  d
} from "./chunk-EIEISV5R.js";
import "./chunk-ELJY7WHB.js";
import {
  b,
  h2 as h
} from "./chunk-RPCD4HAF.js";
import "./chunk-HBMGI65L.js";
import {
  Qi,
  gr
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import {
  p
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import {
  F
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  o
} from "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  Ki,
  qi,
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

// node_modules/@privy-io/react-auth/dist/esm/ManualTransferScreen-3yi1Rb6a.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { formatUnits as a } from "viem";
var import_qrcode = __toESM(require_browser(), 1);
import "viem/utils";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/chains";
import "viem/accounts";
var x2 = { component: () => {
  let { wallets: A } = p(), { connectors: x3 } = l(), E = x3.filter(F).flatMap(((e4) => e4.wallets)), { data: L, setModalData: $, navigate: P, lastScreen: W } = g(), { rpcConfig: N, appId: O, createAnalyticsEvent: q, closePrivyModal: Q } = l(), R = se(), [z, H] = (0, import_react.useState)(void 0), [X, J] = (0, import_react.useState)(false), V = L?.funding, { reloadBalance: Y } = s({ rpcConfig: N, appId: O, address: "ethereum" === V.chainType ? V.address : void 0, chain: "ethereum" === V.chainType ? V.chain : void 0 }), G = "solana" === V.chainType, K = G ? V.isUSDC ? "USDC" : "SOL" : V.erc20Address ? V.erc20ContractInfo?.symbol : V.chain.nativeCurrency.symbol, Z = G ? E.find((({ address: e4 }) => e4 === V.address)) : A.find((({ address: e4 }) => o(e4) === o(V.address)));
  if (!V) return $({ errorModalData: { error: Error("Couldn't find funding config"), previousScreen: W || "FundingMethodSelectionScreen" }, funding: L?.funding, solanaFundingData: L?.solanaFundingData, sendTransaction: L?.sendTransaction }), P("ErrorScreen"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  (0, import_react.useEffect)((() => {
    let e4 = G ? async function() {
      if ("solana" !== V.chainType) return;
      let e5 = R.solanaRpcs[V.chain];
      e5 ? (V.isUSDC ? (async function({ rpc: e6, address: r4, mintAddress: t6 }) {
        let o3 = await e6.getTokenAccountsByOwner(r4, { mint: t6 }, { encoding: "jsonParsed", commitment: "confirmed" }).send(), i2 = o3.value[0]?.account;
        return i2 ? BigInt(i2.data.parsed.info.tokenAmount.amount) : 0n;
      })({ rpc: e5.rpc, address: V.address, mintAddress: n2(V.chain) }) : Qi({ rpc: e5.rpc, address: V.address })).then(((e6) => {
        let r4 = BigInt(e6);
        z && r4 > z && (J(true), q({ eventName: t2, payload: { provider: "manual", status: "success", chainType: "solana", address: Z?.address, value: V.isUSDC ? a(r4 - z, 6) : a(r4 - z, 9), token: V.isUSDC ? "USDC" : "SOL" } })), H(r4);
      })) : console.warn("Unable to load solana rpc, skipping balance");
    } : async function() {
      "ethereum" === V.chainType && (async () => {
        if (!V.erc20Address) return await Y() ?? BigInt(0);
        {
          let { balance: e5 } = await n({ chain: V.chain, address: V.address, erc20Address: V.erc20Address, rpcConfig: N, appId: O });
          return e5;
        }
      })().then(((e5) => {
        z && e5 > z && (J(true), q({ eventName: t2, payload: { provider: "manual", status: "success", chainType: "ethereum", address: Z?.address, chainId: V.chain.id, value: a(e5 - z, V.erc20ContractInfo?.decimals ?? 18), token: V.erc20ContractInfo?.symbol ?? V.erc20Address ?? "ETH" } })), H(e5);
      })).catch((() => H(void 0)));
    }, r3 = setInterval(e4, 2e3);
    return e4(), () => clearInterval(r3);
  }), [z]);
  let _ = (0, import_react.useMemo)((() => null == z ? "" : V.isUSDC ? qi({ amount: z, decimals: 6 }) : G ? t3(z, 3, true, true) : null != V.erc20ContractInfo?.decimals ? qi({ amount: z, decimals: V.erc20ContractInfo.decimals }) : Ki({ wei: z })), [z, G, V]), ee = "ethereum" === V.chainType ? V.chain.name : e(V.chain), re = (0, import_react.useMemo)((() => "" === V.uiConfig?.receiveFundsTitle ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: V.uiConfig?.receiveFundsTitle ?? `Receive ${V.amount} ${K ?? ""}`.trim() })), [V.uiConfig?.receiveFundsTitle, V.amount, K]), te = (0, import_react.useMemo)((() => "" === V.uiConfig?.receiveFundsSubtitle ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { children: V.uiConfig?.receiveFundsSubtitle ?? `Scan this code or copy your wallet address to receive funds on ${ee}.` })), [V.uiConfig?.receiveFundsSubtitle, ee]), oe = "solana" === V.chainType && V.isUSDC && n2(V.chain) ? `?spl-token=${n2(V.chain)}` : "";
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), re, te, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(d, { style: { gap: "1rem", margin: re || te ? "1rem 0" : "0" }, children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x, { url: `${V.chainType}:${V.address}${oe}`, size: 200, squareLogoElement: B }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t4, { theme: R.appearance.palette.colorScheme, children: ["Make sure to send funds on ", ee, "."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(j, { title: "Your wallet", errMsg: void 0, showCopyButton: true, balance: `${_} ${K}`, address: V.address }), X && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b, { onClick: () => Q({ shouldCallAuthOnSuccess: false, isSuccess: true }), children: "Continue" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
var B = ({ ...r3 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(gr, { color: "black", ...r3 });
export {
  x2 as ManualTransferScreen,
  x2 as default
};
