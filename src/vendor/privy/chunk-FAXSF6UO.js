import {
  I as I2
} from "./chunk-44C3QNBW.js";
import {
  h as h2,
  l as l2,
  n as n3,
  o as o2,
  r,
  s as s3
} from "./chunk-MK657462.js";
import "./chunk-VEE35G7J.js";
import "./chunk-C2ILIC2D.js";
import {
  t as t2
} from "./chunk-E5F673JX.js";
import {
  o
} from "./chunk-I3STI6GC.js";
import "./chunk-WSIRTJK5.js";
import "./chunk-VC62FKIT.js";
import "./chunk-34BVSFPO.js";
import {
  CheckCircleIcon_default
} from "./chunk-E74RKHPY.js";
import "./chunk-EOSGBBZ3.js";
import {
  t as t3
} from "./chunk-4MCBV4ZR.js";
import {
  c,
  n as n2,
  s as s2
} from "./chunk-EIEISV5R.js";
import "./chunk-ELJY7WHB.js";
import {
  t
} from "./chunk-6HBDFDSF.js";
import {
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  a
} from "./chunk-75YLIS6S.js";
import {
  n
} from "./chunk-JC23ZM22.js";
import {
  I
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import {
  E
} from "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  u
} from "./chunk-COXZQBSX.js";
import {
  i,
  s
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  Pa,
  p,
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/AwaitingSolToEvmBridgingScreen-sg6-t6MQ.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { parseEther as c2 } from "viem";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/utils";
import "viem/chains";
var W = { component: function() {
  let W2 = se(), { closePrivyModal: M, createAnalyticsEvent: B, connectors: D } = l(), { navigate: $, setModalData: H, data: _ } = g(), O = se(), q = (0, import_react.useRef)(false), [G, Q] = (0, import_react.useState)(false), [V, Y] = (0, import_react.useState)(false), [z, J] = (0, import_react.useState)(null), [K, X] = (0, import_react.useState)(), [Z, ee] = (0, import_react.useState)();
  if (!_?.funding || "ethereum" !== _.funding.chainType) throw Error("Invalid funding data");
  let { amount: te, connectedWallet: re, chain: oe, solanaChain: ne, isUSDC: ae } = _.funding, ie = _.funding.address, se2 = _.funding.erc20Address, ce = _.funding.isUSDC ? "USDC" : oe.nativeCurrency.symbol, de = (0, import_react.useMemo)((() => "solana" === re?.type ? re.provider : (function({ connectors: e2, connectedWalletAddress: t5 }) {
    let r3 = e2.find(((e3) => "solana" === e3.chainType && e3.wallets.some(((e4) => e4.address === t5)))), o3 = r3?.wallet.accounts.find(((e3) => e3.address === t5));
    if (!r3 || !o3) throw new s("Unable to find source wallet connector");
    return new Pa({ wallet: r3.wallet, account: o3 });
  })({ connectors: D, connectedWalletAddress: re?.address || "" })), [re, D]), le = (0, import_react.useMemo)((() => {
    let e2 = n(a);
    if (!e2) throw new s("Unable to load solana plugin");
    let t5 = W2.solanaRpcs["solana:mainnet"];
    if (!t5) throw new s("Unable to load mainnet RPC");
    return e2.getSolanaRpcClient({ rpc: t5.rpc, rpcSubscriptions: t5.rpcSubscriptions, chain: "solana:mainnet", blockExplorerUrl: t5.blockExplorerUrl ?? "https://explorer.solana.com" });
  }), []), me = I(E(de?.standardWallet.name || "unknown")), ue = me?.name || "wallet";
  return (0, import_react.useEffect)((() => {
    (async function() {
      if (!de || !oe || q.current) return;
      let e2 = n(a);
      if (!e2) return void J(new s("Unable to solana plugin"));
      q.current = true, oe?.testnet && console.warn("Solana testnets are not supported for bridging");
      let t5 = ae ? 1e6 * parseFloat(te) : c2(te), r3 = await l2({ isTestnet: !!oe.testnet, input: o2({ appId: O.id, amount: t5.toString(), user: de.address, recipient: ie, destinationChainId: oe.id, originChainId: r, originCurrency: ae ? n3 : s3, destinationCurrency: ae ? se2 : void 0 }) }).catch(console.error);
      if (!r3) return void J(new s(`Unable to fetch quotes for bridging. Wallet ${u(de.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let o3 = await e2.createTransactionFromRelayQuote({ quote: r3, source: de.address, solanaClient: le });
      if (o3) try {
        Q(true);
        let t6 = await e2.simulateTransaction({ solanaClient: le, tx: o3 });
        if (t6.hasError) return t6.hasFunds ? (console.error("Transaction failed:", t6.error), void J(new s("Something went wrong", void 0, i.TRANSACTION_FAILURE))) : void J(new s(`Wallet ${u(de?.address)} does not have enough funds. ${r3.details.currencyIn.amountFormatted} ${ce} are needed to complete the transaction.`, void 0, i.INSUFFICIENT_BALANCE));
        let { signature: n5 } = await de.signAndSendTransaction({ chain: "solana:mainnet", transaction: o3 }), a3 = e2.getAddressFromBuffer(n5);
        X(a3), ee("pending");
      } catch (e3) {
        if (console.error(e3), /user rejected the request/gi.test(e3.message || "")) return void J(new s("Transaction was rejected by the user", void 0, i.TRANSACTION_FAILURE));
        J(new s("Something went wrong", void 0, i.TRANSACTION_FAILURE));
      }
      else J(new s(`Unable to select bridge option from quotes. Wallet ${u(de.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
    })().catch(console.error);
  }), []), h2({ transactionHash: K, isTestnet: false, bridgingStatus: Z, setBridgingStatus: ee, onSuccess({ transactionHash: e2 }) {
    Q(false), Y(true), B({ eventName: t3, payload: { provider: "external", status: "success", txHash: e2, address: de.address, chainType: "solana", clusterName: ne, token: "SOL", destinationAddress: ie, destinationChainId: oe.id, destinationChainType: "ethereum", destinationValue: te, destinationToken: ae ? "USDC" : "ETH" } });
  }, onFailure({ error: e2 }) {
    Q(false), J(e2);
  } }), (0, import_react.useEffect)((() => {
    if (!V) return;
    let e2 = setTimeout(M, p);
    return () => clearTimeout(e2);
  }), [V]), (0, import_react.useEffect)((() => {
    z && (H({ funding: _?.funding, solanaFundingData: _?.solanaFundingData, sendTransaction: _?.sendTransaction, errorModalData: { error: z, previousScreen: "TransferFromWalletScreen" } }), $("ErrorScreen", false));
  }), [z]), V ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCircleIcon_default, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { title: "Success!", description: `You\u2019ve successfully added ${te} ${ce} to your ${O.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] }) : G && de ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I2, { walletClientType: E(de?.standardWallet.name || "unknown"), displayName: ue, addressToFund: ie, isBridging: G, isErc20Flow: false, chainId: oe.id, chainName: oe.name, totalPriceInUsd: void 0, totalPriceInNativeCurrency: void 0, gasPriceInUsd: void 0, gasPriceInNativeCurrency: void 0 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
export {
  W as AwaitingSolToEvmBridgingScreen,
  W as default
};
