import {
  a,
  t as t5
} from "./chunk-Q3DIV3BS.js";
import {
  U,
  X
} from "./chunk-7L6BVFPL.js";
import {
  t as t4
} from "./chunk-FAFNMCNW.js";
import {
  n as n3
} from "./chunk-CIPV5FN4.js";
import "./chunk-ZZ27HOQC.js";
import "./chunk-DNNT7Y2Z.js";
import {
  c as c3,
  i as i2,
  n as n4,
  o as o4
} from "./chunk-W3FIRIBO.js";
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
  f,
  h as h2,
  l as l2,
  o as o3,
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
  $i
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

// node_modules/@privy-io/react-auth/dist/esm/AwaitingExternalEthereumTransferScreen-DXocAp35.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import { parseEther as o5, createWalletClient as s3, custom as d, publicActions as c4, createPublicClient as m, http as l3, encodeFunctionData as u2, formatUnits as p3 } from "viem";
import "viem/utils";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
import "viem/chains";
var Z = { component: () => {
  let { rpcConfig: Z2, appId: J, closePrivyModal: K, createAnalyticsEvent: ee } = l(), { navigate: te, setModalData: re, data: ie } = g(), ae = se(), { wallets: ne } = p2(), [oe, se2] = (0, import_react.useState)(false), [de, ce] = (0, import_react.useState)(0n), [me, le] = (0, import_react.useState)(false), [ue, pe] = (0, import_react.useState)(null), [he, fe] = (0, import_react.useState)(null), [ge, ve] = (0, import_react.useState)([]), [ye, je] = (0, import_react.useState)(0), [Ce, Ie] = (0, import_react.useState)([]), [we, Te] = (0, import_react.useState)(false), [be, Ee] = (0, import_react.useState)(false), [Se, Ne] = (0, import_react.useState)(false), [Ae, xe] = (0, import_react.useState)(false), [Fe, ke] = (0, import_react.useState)(), [Pe, Be] = (0, import_react.useState)();
  if (!ie?.funding || "ethereum" !== ie.funding.chainType) throw Error("Invalid funding data");
  let { erc20ContractInfo: Me, chain: Le, connectedWallet: We } = ie.funding, Ue = ie.funding.address, qe = ie.funding.erc20Address, [He, $e] = (0, import_react.useState)(ie.funding.amount);
  (0, import_react.useEffect)((() => {
    qe && !Me && pe(Error("Unable to fetch token details"));
  }), []);
  let Ge = !!qe && !!Me, _e = Ge ? BigInt(parseFloat(He) * 10 ** Me.decimals) : o5(He), Qe = ("ethereum" === We?.type ? We : void 0) ?? ne[0], Re = I(Qe?.walletClientType || "unknown"), De = Re?.name || "wallet", [Oe, Ve] = (0, import_react.useState)(null);
  (0, import_react.useEffect)((() => {
    (async () => {
      if (!Qe) return;
      let e2 = await Qe.getEthereumProvider();
      Ve(s3({ account: Qe.address, transport: d(e2) }).extend(c4));
    })().catch(console.error);
  }), [Qe]);
  let [ze, Xe] = (0, import_react.useState)(0n);
  (0, import_react.useEffect)((() => {
    m({ chain: Le, transport: l3(n(Le, Z2, J)) }).getBalance({ address: Ue }).then(Xe).catch(console.error);
  }), []);
  let [Ye, Ze] = (0, import_react.useState)(0n);
  (0, import_react.useEffect)((() => {
    Ge && n3({ chain: Le, address: Ue, appId: J, rpcConfig: Z2, erc20Address: qe }).then(((e2) => Ze(e2.balance))).catch(console.error);
  }), []);
  let { tokenPrice: Je } = c2(Le.id), [Ke, et] = (0, import_react.useState)({ to: Ue, chain: Le, value: _e, data: void 0 });
  (0, import_react.useEffect)((() => {
    (async () => {
      let e2, t7;
      if (!Oe || !Qe || we || Se) return;
      Te(true);
      let r2 = m({ chain: Ke.chain, transport: l3(n(Ke.chain, Z2, J)) });
      if (Ge && !Ke.data) return await r2.simulateContract({ address: qe, chain: Ke.chain, abi: t5, functionName: "transfer", args: [Ue, _e], account: Qe.address }).catch(((e3) => {
        if ("ContractFunctionZeroDataError" === e3?.cause?.name || e3?.message?.includes("returned no data")) return r2.simulateContract({ address: qe, chain: Ke.chain, abi: a, functionName: "transfer", args: [Ue, _e], account: Qe.address }).catch(((e4) => {
          console.warn("Simulated token transfer failed with error, fetching bridge options.", e4);
        }));
        console.warn("Simulated token transfer failed with error, fetching bridge options.", e3);
      })) ? (Te(false), void et({ to: qe, chain: Ke.chain, data: u2({ abi: t5, functionName: "transfer", args: [Ue, _e] }), value: "0x0" })) : (Te(false), void le(true));
      try {
        e2 = await r2.prepareTransactionRequest({ account: Qe.address, to: Ke.to, chain: Ke.chain, data: Ke.data, value: BigInt(Ke.value ?? 0) });
      } catch (e3) {
        if (console.error(e3), ge.length > 1) fe(e3.shortMessage ?? "Something went wrong");
        else if (be && 0 === ge.length) return void pe(new s(`Wallet ${o(Qe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      }
      if (!e2) return Te(false), void le(true);
      "eip1559" === e2.type || "eip4844" === e2.type || "eip7702" === e2.type ? void 0 !== e2.gasPrice && delete e2.gasPrice : ("legacy" === e2.type || "eip2930" === e2.type) && (void 0 !== e2.maxFeePerGas && delete e2.maxFeePerGas, void 0 !== e2.maxPriorityFeePerGas && delete e2.maxPriorityFeePerGas), Te(false), Ne(true), se2(true), ce(e2.gas);
      try {
        await Oe.switchChain({ id: Ke.chain.id });
      } catch (e3) {
        await Oe.addChain({ chain: Ke.chain }), await Oe.switchChain({ id: Ke.chain.id });
      }
      try {
        t7 = await Oe.sendTransaction(e2);
      } catch (e3) {
        if (console.error(e3), "TransactionExecutionError" === e3.name) if (ge.length < 1) {
          let t8 = e3.shortMessage;
          (e3.shortMessage.includes("rejected the request") || e3.details.includes("rejected the request")) && (t8 = "User rejected the request."), pe(new s(t8, void 0, i.TRANSACTION_FAILURE));
        } else fe(e3.shortMessage ?? "Something went wrong");
      }
      if (t7) {
        if (await Oe.waitForTransactionReceipt({ hash: t7 }), Ne(false), be) {
          if (Ce.length > 0) {
            let [e3, ...t8] = Ce;
            if (!e3) return;
            return Ie(t8), void et(e3);
          }
          return ke(t7), void Be("pending");
        }
        xe(true), re($i(ie, "completed", t7, Qe?.walletClientType, Ge, Me, Le)), ee({ eventName: t3, payload: { provider: "external", status: "success", txHash: t7, address: Qe.address, chainId: Ke.chain.id, chainType: "ethereum", value: Ke.value ? p3(BigInt(Ke.value), Me?.decimals ?? 18) : void 0, token: Me?.symbol ?? qe ?? "ETH", destinationAddress: Ue, destinationChainId: Le.id, destinationChainType: "ethereum", destinationValue: _e ? p3(_e, Me?.decimals ?? 18) : void 0, destinationToken: Me?.symbol ?? qe ?? Le.nativeCurrency.name } });
      } else Ne(false);
    })().catch(console.error);
  }), [Oe, Ke]), (0, import_react.useEffect)((() => {
    (async () => {
      if (!me || !Oe || !Qe) return;
      let e2 = P(ae.chains).filter(((e3) => e3.id !== Le.id && !!e3.testnet == !!Le.testnet));
      Ge && e2.unshift(Le);
      let t7 = await U({ chains: e2, address: Qe.address, appId: J, rpcConfig: Z2 }), r2 = Ge ? t7.filter(((e3) => e3.balance > 0n)) : t7.filter(((e3) => e3.balance > _e)), i3 = Ge && t7.every(((e3) => 0n === e3.balance));
      if (r2.length < 1) return void pe(new s(i3 ? `Wallet ${o(Qe.address)} doesn't have enough funds to cover gas fees. Top up your wallet and try again.` : `Wallet ${o(Qe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      r2.sort(((e3, t8) => Number(Ge ? (t8.erc20Balance ?? 0n) - (e3.erc20Balance ?? 0n) : t8.balance - e3.balance)));
      let a3 = r2.flatMap(((e3) => {
        let t8 = [{ ...e3, isErc20Quote: false, isTestnet: !!Le.testnet, input: o3({ appId: J, amount: _e.toString(), user: Qe.address, recipient: Ue, destinationChainId: Le.id, destinationCurrency: qe, originChainId: e3.chain.id }) }];
        return Ge && qe && (e3.erc20Balance ?? 0n) > 0n && t8.push({ ...e3, isErc20Quote: true, isTestnet: !!Le.testnet, input: o3({ appId: J, amount: _e.toString(), user: Qe.address, recipient: Ue, destinationChainId: Le.id, destinationCurrency: qe, originChainId: e3.chain.id, originCurrency: e3.erc20Address }) }), t8;
      })), n6 = (await Promise.allSettled(a3.map((async (e3) => ({ ...e3, quote: await l2(e3) }))))).filter(((e3) => "fulfilled" === e3.status)).map(((e3) => e3.value));
      if (n6.length < 1) return void pe(new s(`Wallet ${o(Qe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let o6 = n6.map(((e3) => ({ bridgeTx: u(e3.quote), allTxSteps: f(e3.quote), balance: e3.balance, chain: e3.chain, erc20Balance: e3.erc20Balance, isErc20Quote: e3.isErc20Quote }))).filter(((e3) => !!e3.bridgeTx));
      if (o6.length > 1) return void ve(o6);
      let s4 = o6[0];
      if (!s4) return void pe(new s(`Wallet ${o(Qe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
      let [d2, ...c5] = s4.allTxSteps ?? [s4.bridgeTx];
      d2 ? (Ee(true), Ie(c5.map(((e3) => ({ ...e3, chain: s4.chain })))), et({ data: d2.data, to: d2.to, value: d2.value, chain: s4.chain })) : pe(new s(`Wallet ${o(Qe.address)} does not have enough funds.`, void 0, i.INSUFFICIENT_BALANCE));
    })().catch(console.error);
  }), [me]), h2({ transactionHash: Fe, isTestnet: !!Le.testnet, bridgingStatus: Pe, setBridgingStatus: Be, onSuccess({ transactionHash: e2 }) {
    Ee(false), xe(true), re($i(ie, "completed", e2, Qe?.walletClientType, Ge, Me, Le)), ee({ eventName: t3, payload: { provider: "external", status: "success", txHash: e2, address: Qe?.address, chainId: Ke.chain.id, chainType: "ethereum", value: Ke.value ? p3(BigInt(Ke.value), Me?.decimals ?? 18) : void 0, token: Me?.symbol ?? qe ?? "ETH", destinationAddress: Ue, destinationChainId: Le.id, destinationChainType: "ethereum", destinationValue: _e ? p3(_e, Me?.decimals ?? 18) : void 0, destinationToken: Me?.symbol ?? qe ?? Le.nativeCurrency.name } });
  }, onFailure({ error: e2 }) {
    Ee(false), pe(e2);
  } }), (0, import_react.useEffect)((() => {
    ue && (re({ funding: ie?.funding, solanaFundingData: ie?.solanaFundingData, sendTransaction: ie?.sendTransaction, errorModalData: { error: ue, previousScreen: "TransferFromWalletScreen" } }), te("ErrorScreen", false));
  }), [ue]);
  let tt = !Ge && Je ? o4(He ?? "0", Je) : void 0, rt = Ge ? de : i2([de, _e]), it = rt && Je ? n4(rt, Je) : void 0, at = rt ? c3(rt, ie?.funding?.erc20Address ? ie?.funding?.erc20ContractInfo?.symbol || "ETH" : ie?.funding?.chain.nativeCurrency.symbol || "ETH") : void 0, nt = de && Je ? n4(de, Je) : void 0, ot = de ? c3(de, Le?.nativeCurrency?.symbol || "ETH") : void 0;
  if ((0, import_react.useEffect)((() => {
    if (!Ae) return;
    let e2 = setTimeout(K, p);
    return () => clearTimeout(e2);
  }), [Ae]), Ae) return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(n2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCircleIcon_default, { color: "var(--privy-color-success)", width: "64px", height: "64px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o2, { title: "Success!", description: `You\u2019ve successfully added ${He} ${Ge ? Me.symbol : Le.nativeCurrency.symbol} to your ${ae.name} wallet. It may take a minute before the funds are available to use.` })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
  let st = Ge ? `${t4({ amount: Ye, decimals: Me.decimals })}  ${Me.symbol}` : c3(ze, Le.nativeCurrency.symbol, 3, true), dt = ge[ye];
  return ge.length > 1 && dt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { displayName: De, configuredFundingChain: Le, formattedBalance: st, fundingAmount: He, fundingCurrency: Ge ? Me.symbol : Le.nativeCurrency.symbol, fundingAmountInUsd: tt, options: ge, selectedOption: dt, isPreparing: we, isSubmitting: Se, addressToFund: Ue, fundingWalletAddress: Qe?.address || "", errorMessage: he, onSubmit: () => {
    if (ie.funding?.amount === He) {
      let [e2, ...t7] = dt.allTxSteps ?? [dt.bridgeTx];
      if (!e2) return;
      return Ee(true), Ie(t7.map(((e3) => ({ ...e3, chain: dt.chain })))), void et({ to: e2.to, data: e2.data, value: e2.value, chain: dt.chain });
    }
    (async function() {
      if (Qe && dt) try {
        let e2 = await l2({ isTestnet: !!Le.testnet, input: o3({ appId: J, amount: _e.toString(), user: Qe.address, recipient: Ue, destinationChainId: Le.id, destinationCurrency: qe, originChainId: dt.chain.id }) }), [t7, ...r2] = f(e2);
        if (!t7) throw Error("Invalid transaction request");
        Ee(true), Ie(r2.map(((e3) => ({ ...e3, chain: dt.chain })))), et({ data: t7.data, to: t7.to, value: t7.value, chain: dt.chain });
      } catch (e2) {
        console.error(e2), pe(new s("Unable to fetch quotes for bridging", e2, i.INSUFFICIENT_BALANCE));
      }
    })().catch(console.error);
  }, onSelect: (e2) => {
    e2 !== ye && (fe(null), je(e2));
  }, onAmountChange: $e }) : oe && de && Qe && ie?.funding ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I2, { walletClientType: Qe?.walletClientType || "unknown", displayName: De, addressToFund: Ue, isBridging: be, isErc20Flow: Ge, totalPriceInUsd: it, totalPriceInNativeCurrency: at, gasPriceInUsd: nt, gasPriceInNativeCurrency: ot, chainId: Le.id, chainName: Le.name }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "1rem" } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h, {})] });
} };
export {
  Z as AwaitingExternalEthereumTransferScreen,
  Z as default
};
