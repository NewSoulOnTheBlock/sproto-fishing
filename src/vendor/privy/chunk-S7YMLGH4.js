import {
  n as n3,
  t as t4
} from "./chunk-4M5GFLTB.js";
import "./chunk-FDAXBPM5.js";
import {
  U,
  X
} from "./chunk-7L6BVFPL.js";
import "./chunk-FAFNMCNW.js";
import "./chunk-CIPV5FN4.js";
import "./chunk-ZZ27HOQC.js";
import {
  e
} from "./chunk-DNNT7Y2Z.js";
import "./chunk-W3FIRIBO.js";
import "./chunk-WLRIHMQB.js";
import "./chunk-RDL3SKLR.js";
import {
  c as c2
} from "./chunk-2HYLPLOV.js";
import "./chunk-NOC53GNL.js";
import "./chunk-75JACRL2.js";
import "./chunk-S5KBLGPR.js";
import "./chunk-PZMIZGJH.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-QM2ZBVYE.js";
import "./chunk-QB7GMZ7D.js";
import "./chunk-KZ4OUGKV.js";
import "./chunk-LBSQU3JN.js";
import {
  I as I2
} from "./chunk-44C3QNBW.js";
import {
  h as h2,
  l as l2,
  o as o3,
  r,
  s as s3,
  u
} from "./chunk-MK657462.js";
import "./chunk-VEE35G7J.js";
import "./chunk-C2ILIC2D.js";
import {
  t as t2
} from "./chunk-E5F673JX.js";
import {
  o as o2
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
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import {
  t
} from "./chunk-6HBDFDSF.js";
import {
  h2 as h
} from "./chunk-RPCD4HAF.js";
import {
  Qi
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import {
  p as p2
} from "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import {
  I
} from "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import {
  n,
  o
} from "./chunk-COXZQBSX.js";
import {
  i,
  s
} from "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import "./chunk-FOFSNBXR.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  P,
  p,
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

// node_modules/@privy-io/react-auth/dist/esm/AwaitingEvmToSolBridgingScreen-DSsRxCEV.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { createWalletClient as n4, custom as s4, publicActions as m, createPublicClient as d, http as c3, formatUnits as l3 } from "viem";
import "viem/utils";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
import "viem/chains";
var V = { component: () => {
  let V2 = se(), { rpcConfig: $, appId: Q, closePrivyModal: z, createAnalyticsEvent: X2 } = l(), { navigate: Y, setModalData: J, data: K } = g(), Z = se(), { wallets: ee } = p2(), [te, ie] = (0, import_react.useState)(null), [re, oe] = (0, import_react.useState)(null), [ae, ne] = (0, import_react.useState)([]), [se2, me] = (0, import_react.useState)(0), [de, ce] = (0, import_react.useState)(false), [le, pe] = (0, import_react.useState)(false), [ue, he] = (0, import_react.useState)(false), [ge, fe] = (0, import_react.useState)(false), [ve, je] = (0, import_react.useState)(), [ye, Ie] = (0, import_react.useState)();
  if (!K?.funding || "solana" !== K.funding.chainType) throw Error("Invalid funding data");
  let { address: we, chain: Te, connectedWallet: Ce } = K.funding, [be, Se] = (0, import_react.useState)(K.funding.amount), xe = ("ethereum" === Ce?.type ? Ce : void 0) ?? ee[0], Ne = I(xe?.walletClientType || "unknown"), Pe = Ne?.name || "wallet", [Fe, ke] = (0, import_react.useState)(null);
  (0, import_react.useEffect)((() => {
    (async () => {
      if (!xe) return;
      let e3 = await xe.getEthereumProvider();
      ke(n4({ account: xe.address, transport: s4(e3) }).extend(m));
    })().catch(console.error);
  }), [xe]);
  let [Ee, Ae] = (0, import_react.useState)(0n), Le = t4(Ee);
  (0, import_react.useEffect)((() => {
    let e3 = V2.solanaRpcs[Te];
    e3 ? Qi({ rpc: e3.rpc, address: we }).then(((e4) => Ae(BigInt(e4)))).catch(console.error) : console.warn("Unable to load solana rpc, skipping balance");
  }), []);
  let [Be, Ue] = (0, import_react.useState)(), { tokenPrice: Me } = c2("solana"), { fundingAmountInBaseUnit: We, fundingAmountInUsd: qe } = n3({ amount: be, fee: 0n, tokenPrice: Me, isUsdc: K.funding.isUSDC });
  if ((0, import_react.useEffect)((() => {
    (async () => {
      if (!Fe || !xe) return;
      let e3 = ["solana:testnet", "solana:devnet"].includes(Te);
      e3 && console.warn("Solana testnets are not supported for bridging");
      let t6 = P(Z.chains).filter((({ testnet: t7 }) => !!t7 === e3)), i3 = (await U({ chains: t6, address: xe.address, appId: Q, rpcConfig: $ })).filter(((e4) => e4.balance > 0n));
      if (i3.length < 1) return void ie(new s(`Wallet ${o(xe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      i3.sort(((e4, t7) => Number(t7.balance - e4.balance)));
      let r2 = (await Promise.allSettled(i3.map((async (e4) => ({ ...e4, quote: await l2({ isTestnet: false, input: o3({ appId: Q, amount: We.toString(), user: xe.address, recipient: we, destinationChainId: r, destinationCurrency: s3, originChainId: e4.chain.id }) }) }))))).filter(((e4) => "fulfilled" === e4.status)).map(((e4) => e4.value));
      if (r2.length < 1) return void ie(new s(`Unable to fetch quotes for bridging. Wallet ${o(xe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let o5 = r2.map((({ quote: e4, balance: t7, chain: i4 }) => ({ bridgeTx: u(e4), balance: t7, chain: i4, isErc20Quote: false }))).filter((({ bridgeTx: e4 }) => !!e4));
      if (o5.length > 1) return void ne(o5);
      let a2 = o5.at(0);
      a2 ? (pe(true), Ue({ data: a2.bridgeTx.data, to: a2.bridgeTx.to, value: a2.bridgeTx.value, chain: a2.chain })) : ie(new s(`Unable to select bridge option from quotes. Wallet ${o(xe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
    })().catch(console.error);
  }), [Fe]), (0, import_react.useEffect)((() => {
    (async () => {
      let e3, t6;
      if (!Fe || !xe || de || ue || !Be) return;
      ce(true);
      let i3 = d({ chain: Be.chain, transport: c3(n(Be.chain, $, Q)) });
      try {
        e3 = await i3.prepareTransactionRequest({ account: xe.address, to: Be.to, chain: Be.chain, data: Be.data, value: BigInt(Be.value ?? 0) });
      } catch (e4) {
        console.error(e4), ae.length > 1 && oe(e4.shortMessage ?? "Something went wrong");
      }
      if (e3) {
        "eip1559" === e3.type || "eip4844" === e3.type || "eip7702" === e3.type ? void 0 !== e3.gasPrice && delete e3.gasPrice : ("legacy" === e3.type || "eip2930" === e3.type) && (void 0 !== e3.maxFeePerGas && delete e3.maxFeePerGas, void 0 !== e3.maxPriorityFeePerGas && delete e3.maxPriorityFeePerGas), ce(false), he(true);
        try {
          await Fe.switchChain({ id: Be.chain.id });
        } catch (e4) {
          await Fe.addChain({ chain: Be.chain }), await Fe.switchChain({ id: Be.chain.id });
        }
        try {
          t6 = await Fe.sendTransaction(e3);
        } catch (e4) {
          console.error(e4), "TransactionExecutionError" === e4.name && (ae.length < 1 ? ie(new s(e4.shortMessage, void 0, i.TRANSACTION_FAILURE)) : oe(e4.shortMessage ?? "Something went wrong"));
        }
        if (t6) return await Fe.waitForTransactionReceipt({ hash: t6 }), le ? (Ie("pending"), void je(t6)) : (he(false), fe(true), void X2({ eventName: t3, payload: { provider: "external", status: "success", txHash: t6, address: xe.address, chainId: Be.chain.id, chainType: "ethereum", value: Be.value ? l3(BigInt(Be.value), 18) : void 0, token: "ETH", destination: we, destinationClusterName: "mainnet-beta", destinationChainType: "solana", destinationValue: l3(We, 9), destinationToken: "SOL" } }));
        he(false);
      } else ce(false);
    })().catch(console.error);
  }), [Fe, Be]), h2({ transactionHash: ve, isTestnet: false, bridgingStatus: ye, setBridgingStatus: Ie, onSuccess({ transactionHash: e3 }) {
    pe(false), fe(true), X2({ eventName: t3, payload: { provider: "external", status: "success", txHash: e3, address: xe?.address, chainId: Be?.chain.id, chainType: "ethereum", value: Be?.value ? l3(BigInt(Be.value), 18) : void 0, token: "ETH", destination: we, destinationClusterName: "mainnet-beta", destinationChainType: "solana", destinationValue: l3(We, 9), destinationToken: "SOL" } });
  }, onFailure({ error: e3 }) {
    pe(false), ie(e3);
  } }), (0, import_react.useEffect)((() => {
    te && (J({ funding: K?.funding, solanaFundingData: K?.solanaFundingData, sendTransaction: K?.sendTransaction, errorModalData: { error: te, previousScreen: "TransferFromWalletScreen" } }), Y("ErrorScreen", false));
  }), [te]), (0, import_react.useEffect)((() => {
    if (!ge) return;
    let e3 = setTimeout(z, p);
    return () => clearTimeout(e3);
  }), [ge]), ge) return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCircleIcon_default, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o2, { title: "Success!", description: `You\u2019ve successfully added ${be} SOL to your ${Z.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
  let He = ae[se2];
  return ae.length > 1 && He ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { displayName: Pe, configuredFundingChain: Te, formattedBalance: Le, fundingAmount: be, fundingCurrency: "SOL", fundingAmountInUsd: qe, options: ae, selectedOption: He, isPreparing: de, isSubmitting: ue, addressToFund: we, fundingWalletAddress: xe?.address || "", errorMessage: re, onSubmit: () => {
    K.funding?.amount !== be ? (async function() {
      if (xe && He) try {
        let e3 = await l2({ isTestnet: false, input: o3({ appId: Q, amount: We.toString(), user: xe.address, recipient: we, destinationChainId: r, destinationCurrency: s3, originChainId: He.chain.id }) }), t6 = u(e3);
        if (!t6) throw Error("Invalid transaction request");
        pe(true), Ue({ data: t6.data, to: t6.to, value: t6.value, chain: He.chain });
      } catch (e3) {
        console.error(e3), ie(new s("Unable to fetch quotes for bridging", e3, i.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error) : Ue({ to: He.bridgeTx.to, data: He.bridgeTx.data, value: He.bridgeTx.value, chain: He.chain });
  }, onSelect: (e3) => {
    e3 !== se2 && (oe(null), me(e3));
  }, onAmountChange: Se }) : ue && xe ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I2, { walletClientType: xe?.walletClientType || "unknown", displayName: Pe, addressToFund: we, isBridging: le, isErc20Flow: false, chainId: "solana", chainName: e(Te), totalPriceInUsd: void 0, totalPriceInNativeCurrency: void 0, gasPriceInUsd: void 0, gasPriceInNativeCurrency: void 0 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
export {
  V as AwaitingEvmToSolBridgingScreen,
  V as default
};
