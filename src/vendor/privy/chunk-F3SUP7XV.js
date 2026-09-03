import {
  G,
  te
} from "./chunk-K7OVQEWY.js";
import {
  S,
  f as f2
} from "./chunk-W2GJWPY6.js";
import "./chunk-6EXMXTND.js";
import {
  i
} from "./chunk-OY52FFSF.js";
import {
  f
} from "./chunk-UAWFTMBF.js";
import {
  compileTransaction,
  decompileTransactionMessage4,
  fetchAddressesForLookupTables,
  getBase58Decoder,
  getCompiledTransactionMessageDecoder,
  getTransactionEncoder,
  l as l2,
  m,
  n as n3,
  o as o4,
  p,
  pipe,
  setTransactionMessageLifetimeUsingBlockhash
} from "./chunk-4UX7BEZG.js";
import "./chunk-VAKKZBAS.js";
import "./chunk-RSVXHVWT.js";
import "./chunk-FUH2YWOK.js";
import "./chunk-NH742RS2.js";
import "./chunk-52LU76MD.js";
import "./chunk-5ZNWNVDZ.js";
import "./chunk-EPRUW2QI.js";
import "./chunk-JFVQGRVD.js";
import "./chunk-KDNCCGXL.js";
import "./chunk-RN3TQCJB.js";
import "./chunk-KLSNZW7N.js";
import "./chunk-YR2QF5GA.js";
import "./chunk-CPWWWFCX.js";
import "./chunk-76DEAMJ5.js";
import "./chunk-OBV6VSAS.js";
import "./chunk-3FZKW4WI.js";
import "./chunk-VIKQUUIS.js";
import "./chunk-SGK7A445.js";
import {
  t as t2
} from "./chunk-4M5GFLTB.js";
import {
  C,
  a,
  b as b2,
  d,
  e,
  n,
  o as o3,
  r
} from "./chunk-FDAXBPM5.js";
import "./chunk-ZZ27HOQC.js";
import "./chunk-W3FIRIBO.js";
import "./chunk-WLRIHMQB.js";
import {
  t
} from "./chunk-NOC53GNL.js";
import "./chunk-AIDDSJF6.js";
import "./chunk-QM2ZBVYE.js";
import "./chunk-QB7GMZ7D.js";
import "./chunk-GIDVL7W3.js";
import "./chunk-P6V6I22J.js";
import "./chunk-MK657462.js";
import {
  e as e2,
  n as n2,
  s as s2,
  t as t3
} from "./chunk-C2ILIC2D.js";
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
  s
} from "./chunk-EIEISV5R.js";
import "./chunk-623CPBW2.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import {
  L,
  b,
  h2
} from "./chunk-RPCD4HAF.js";
import "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import {
  $
} from "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import {
  h,
  k,
  o
} from "./chunk-SLTT5NIH.js";
import "./chunk-JC23ZM22.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
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

// node_modules/@privy-io/react-auth/dist/esm/StandardSignAndSendTransactionScreen-BNiMv4dk.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var tt = gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${(t5) => t5.color ?? "var(--privy-color-accent)"};
    background-color: ${(t5) => t5.color ?? "var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
`;
var nt = ({ instruction: e4, fees: a3, transactionInfo: r3, solPrice: o6, chain: i2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(t3, { children: [r3?.action && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Action" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { children: r3.action })] }), null != e4?.total && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { children: e4.total })] }), !e4?.total && null != e4?.amount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f2, { quantities: [e4.amount, a3], tokenPrice: o6 }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "Fees" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f2, { quantities: [a3], tokenPrice: o6 }) })] }), e4?.to && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e2, { children: "To" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { walletAddress: e4.to, chainId: i2, chainType: "solana" }) })] })] });
var et = ({ fees: a3, onClose: r3, receiptHeader: o6, receiptDescription: i2, transactionInfo: s3, solPrice: c, signOnly: l3, instruction: m2, chain: d2 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(L, { onClose: r3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { style: { marginBottom: "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tt, { color: "var(--privy-color-success-light)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCircleIcon_default, { height: 38, width: 38, strokeWidth: 2, stroke: "var(--privy-color-success)" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o2, { title: o6 ?? `Transaction ${l3 ? "signed" : "complete"}!`, description: i2 ?? "You're all set." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(nt, { solPrice: c, instruction: m2, fees: a3, transactionInfo: s3, chain: d2 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(at, { loading: false, onClick: r3, children: "Close" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h2, {})] });
var at = gt(b)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;
async function rt(t5, n5) {
  try {
    return await t5;
  } catch {
    return n5;
  }
}
function ot(t5) {
  switch (t5) {
    case "solana:mainnet":
      return "mainnet-beta";
    case "solana:devnet":
      return "devnet";
    case "solana:testnet":
      return "testnet";
  }
}
async function it({ privyClient: t5, chain: n5, mint: e4 }) {
  let a3 = n[n5];
  if (!a3[e4]) {
    let r3 = await t5.getSplTokenMetadata({ mintAddress: e4, cluster: ot(n5) });
    r3 && (a3[e4] = { address: e4, symbol: r3.symbol, decimals: r3.decimals });
  }
  return a3[e4];
}
async function st({ tx: t5, solanaClient: n5, privyClient: e4, checkFunds: a3 }) {
  let r3 = getCompiledTransactionMessageDecoder().decode(l2(t5)), o6 = r3.staticAccounts[0] ?? "", i2 = await n3({ solanaClient: n5, tx: t5 }), s3 = a3 ? await rt(o4({ solanaClient: n5, tx: t5 })) : void 0, c = s3?.hasFunds ?? true, l3 = {}, m2 = [], d2 = await (async function({ solanaClient: t6, message: n6 }) {
    if (!("addressTableLookups" in n6) || !n6.addressTableLookups) return [...n6.staticAccounts];
    let e5 = n6.addressTableLookups.map(((t7) => t7.lookupTableAddress)), a4 = await fetchAddressesForLookupTables(e5, t6.rpc), r4 = e5.map(((t7, e6) => [...n6.addressTableLookups[e6]?.writableIndexes.map(((n7) => {
      let r5 = a4[t7]?.[n7];
      if (r5) return { key: r5, isWritable: true, altIdx: e6 };
    })) ?? [], ...n6.addressTableLookups[e6]?.readonlyIndexes.map(((n7) => {
      let r5 = a4[t7]?.[n7];
      if (r5) return { key: r5, isWritable: false, altIdx: e6 };
    })) ?? []])).flat().filter(((t7) => !!t7)).sort(((t7, n7) => t7.isWritable !== n7.isWritable ? t7.isWritable ? -1 : 1 : t7.altIdx - n7.altIdx)).map((({ key: t7 }) => t7));
    return [...n6.staticAccounts, ...r4];
  })({ solanaClient: n5, message: r3 });
  for (let t6 of r3.instructions) {
    let a4 = r3.staticAccounts[t6.programAddressIndex] || "";
    if (a4 !== e && a4 !== d) if (a4 !== a) {
      if (a4 === C) {
        let n6 = await rt((function(t7, n7, e5) {
          let [a5, r4, o7, i3] = t7.accountIndices?.map(((t8) => n7[t8])) ?? [];
          return { type: "ata-creation", program: e5, payer: a5, ata: r4, owner: o7, mint: i3 };
        })(t6, d2, a4));
        if (!n6) {
          m2.push({ type: "unknown", program: a4, discriminator: t6.data?.[0] });
          continue;
        }
        if (m2.push(n6), n6.ata && n6.owner && n6.mint) {
          l3[n6.ata] = { owner: n6.owner, mint: n6.mint };
          continue;
        }
      }
      if (o3.includes(a4)) {
        let r4 = await rt(dt(t6, d2, n5, e4, a4));
        if (!r4) {
          m2.push({ type: "unknown", program: a4, discriminator: t6.data?.[0] });
          continue;
        }
        m2.push(r4);
      } else if (b2.includes(a4)) {
        let r4 = await rt(ut(t6, d2, n5, e4, a4));
        if (!r4) {
          m2.push({ type: "unknown", program: a4, discriminator: t6.data?.[0] });
          continue;
        }
        m2.push(r4);
      } else m2.push({ type: "unknown", program: a4, discriminator: t6.data?.[0] });
    } else {
      let n6 = await rt(mt(t6, d2));
      if (!n6) {
        m2.push({ type: "unknown", program: a4, discriminator: t6.data?.[0] });
        continue;
      }
      m2.push(n6);
    }
    else {
      let r4 = await rt(lt(t6, d2, n5, e4, l3, a4));
      if (!r4) {
        m2.push({ type: "unknown", program: a4, discriminator: t6.data?.[0] });
        continue;
      }
      m2.push(r4), "spl-transfer" === r4.type && (r4.fromAta && r4.fromAccount && r4.token.address && (l3[r4.fromAta] ??= { owner: r4.fromAccount, mint: r4.token.address }), r4.toAta && r4.toAccount && r4.token.address && (l3[r4.toAta] ??= { owner: r4.toAccount, mint: r4.token.address }));
    }
  }
  return { spender: o6, fee: i2, instructions: m2, hasFunds: !!c };
}
function ct(t5, n5 = 0) {
  try {
    return (function(t6, n6 = 0) {
      let e5 = 0n;
      for (let a3 = 0; a3 < 8; a3++) e5 |= BigInt(t6[n6 + a3]) << BigInt(8 * a3);
      return e5;
    })(t5, n5);
  } catch {
  }
  try {
    return t5.readBigInt64LE(n5);
  } catch {
  }
  let e4 = p(t5);
  try {
    return ((t6, n6 = 0) => {
      let e5 = t6[n6], a3 = t6[n6 + 7];
      if (!e5 || !a3) throw Error(`Buffer offset out of range: first: ${e5}, last: ${a3}.`);
      return (BigInt(t6[n6 + 4] + 256 * t6[n6 + 5] + 65536 * t6[n6 + 6] + (a3 << 24)) << 32n) + BigInt(e5 + 256 * t6[++n6] + 65536 * t6[++n6] + 16777216 * t6[++n6]);
    })(e4);
  } catch {
  }
  try {
    return e4.subarray(n5).readBigInt64LE();
  } catch {
  }
  try {
    return e4.readBigInt64LE(n5);
  } catch {
  }
  return 0n;
}
async function lt(t5, n5, e4, a3, r3, o6) {
  let i2 = t5.data?.[0], s3 = t5.accountIndices?.map(((t6) => n5[t6])) ?? [];
  if (1 === i2) {
    let [t6, n6, e5] = s3;
    return { type: "spl-init-account", program: o6, account: t6, mint: n6, owner: e5 };
  }
  if (3 === i2) {
    let n6, i3, [c, l3, m2] = s3, d2 = "", u = l3 ? r3[l3] : void 0;
    if (u) n6 = u.owner, d2 = u.mint;
    else if (l3) {
      let t6 = await e4.rpc.getAccountInfo(l3, { commitment: "confirmed", encoding: "jsonParsed" }).send(), a4 = t6.value?.data;
      n6 = a4?.parsed?.info?.owner, d2 = a4?.parsed?.info?.mint ?? "", i3 = a4?.parsed?.info?.tokenAmount?.decimals;
    }
    if (!d2 && c) {
      let t6 = await e4.rpc.getAccountInfo(c, { commitment: "confirmed", encoding: "jsonParsed" }).send(), n7 = t6.value?.data;
      d2 = n7?.parsed?.info?.mint ?? "";
    }
    let p2 = await it({ privyClient: a3, chain: e4.chain, mint: d2 }), f3 = p2?.symbol ?? "";
    return i3 ??= p2?.decimals ?? 9, { type: "spl-transfer", program: o6, fromAta: c, fromAccount: m2, toAta: l3, toAccount: n6, value: ct(t5.data, 1), token: { symbol: f3, decimals: i3, address: d2 } };
  }
  if (9 === i2) {
    let [t6, n6, e5] = s3;
    return { type: "spl-close-account", program: o6, source: t6, destination: n6, owner: e5 };
  }
  if (17 === i2) return { type: "spl-sync-native", program: o6 };
  throw Error(`Token program instruction type ${i2} not supported`);
}
async function mt(t5, n5) {
  let e4 = t5.data?.[0], a3 = t5.accountIndices?.map(((t6) => n5[t6])) ?? [];
  if (0 === e4) {
    let [, n6] = a3;
    return { type: "create-account", program: a, account: n6?.toString(), value: ct(t5.data, 4), withSeed: false };
  }
  if (2 === e4) {
    let [n6, e5] = a3;
    return { type: "sol-transfer", program: a, fromAccount: n6, toAccount: e5, token: { symbol: "SOL", decimals: 9 }, value: ct(t5.data, 4), withSeed: false };
  }
  if (3 === e4) {
    let [, n6] = a3;
    return { type: "create-account", program: a, account: n6, withSeed: true, value: ct(t5.data.slice(t5.data.length - 32 - 8 - 8)) };
  }
  if (11 === e4) {
    let [n6, e5] = a3;
    return { type: "sol-transfer", program: a, fromAccount: n6, toAccount: e5, value: ct(t5.data, 4), token: { symbol: "SOL", decimals: 9 }, withSeed: true };
  }
  throw Error(`System program instruction type ${e4} not supported`);
}
async function dt(t5, n5, e4, a3, r3) {
  let o6 = t5.accountIndices?.map(((t6) => n5[t6])) ?? [], i2 = t5.data?.[0];
  if (143 === i2) {
    let n6 = o6[10], i3 = o6[11];
    return { type: "raydium-swap-base-input", program: r3, mintIn: n6, mintOut: i3, tokenIn: n6 ? await it({ privyClient: a3, chain: e4.chain, mint: n6 }) : void 0, tokenOut: i3 ? await it({ privyClient: a3, chain: e4.chain, mint: i3 }) : void 0, amountIn: ct(t5.data, 8), minimumAmountOut: ct(t5.data, 16) };
  }
  if (55 === i2) {
    let n6 = o6[10], i3 = o6[11];
    return { type: "raydium-swap-base-output", program: r3, mintIn: n6, mintOut: i3, tokenIn: n6 ? await it({ privyClient: a3, chain: e4.chain, mint: n6 }) : void 0, tokenOut: i3 ? await it({ privyClient: a3, chain: e4.chain, mint: i3 }) : void 0, maxAmountIn: ct(t5.data, 8), amountOut: ct(t5.data, 16) };
  }
  throw Error(`Raydium swap program instruction type ${i2} not supported`);
}
async function ut(t5, n5, e4, a3, r3) {
  let o6 = t5.data?.[0], i2 = t5.accountIndices?.map(((t6) => n5[t6])) ?? [];
  if ([208, 51, 239, 151, 123, 43, 237, 92].includes(o6)) {
    let n6 = i2[5], o7 = i2[6];
    return { type: "jupiter-swap-exact-out-route", program: r3, mintIn: n6, mintOut: o7, tokenIn: n6 ? await it({ privyClient: a3, chain: e4.chain, mint: n6 }) : void 0, tokenOut: o7 ? await it({ privyClient: a3, chain: e4.chain, mint: o7 }) : void 0, outAmount: ct(t5.data, t5.data.length - 1 - 2 - 8 - 8), quotedInAmount: ct(t5.data, t5.data.length - 1 - 2 - 8) };
  }
  if ([176, 209, 105, 168, 154, 125, 69, 62].includes(o6)) {
    let n6 = i2[7], o7 = i2[8];
    return { type: "jupiter-swap-exact-out-route", program: r3, mintIn: n6, mintOut: o7, tokenIn: n6 ? await it({ privyClient: a3, chain: e4.chain, mint: n6 }) : void 0, tokenOut: o7 ? await it({ privyClient: a3, chain: e4.chain, mint: o7 }) : void 0, outAmount: ct(t5.data, t5.data.length - 1 - 2 - 8 - 8), quotedInAmount: ct(t5.data, t5.data.length - 1 - 2 - 8) };
  }
  if ([193, 32, 155, 51, 65, 214, 156, 129].includes(o6)) {
    let n6 = i2[7], o7 = i2[8];
    return { type: "jupiter-swap-shared-accounts-route", program: r3, mintIn: n6, mintOut: o7, tokenIn: n6 ? await it({ privyClient: a3, chain: e4.chain, mint: n6 }) : void 0, tokenOut: o7 ? await it({ privyClient: a3, chain: e4.chain, mint: o7 }) : void 0, inAmount: ct(t5.data, t5.data.length - 1 - 2 - 8 - 8), quotedOutAmount: ct(t5.data, t5.data.length - 1 - 2 - 8) };
  }
  throw [62, 198, 214, 193, 213, 159, 108, 210].includes(o6) && console.warn("Jupiter swap program instruction 'claim' not implemented"), [116, 206, 27, 191, 166, 19, 0, 73].includes(o6) && console.warn("Jupiter swap program instruction 'claim_token' not implemented"), [26, 74, 236, 151, 104, 64, 183, 249].includes(o6) && console.warn("Jupiter swap program instruction 'close_token' not implemented"), [229, 194, 212, 172, 8, 10, 134, 147].includes(o6) && console.warn("Jupiter swap program instruction 'create_open_orders' not implemented"), [28, 226, 32, 148, 188, 136, 113, 171].includes(o6) && console.warn("Jupiter swap program instruction 'create_program_open_orders' not implemented"), [232, 242, 197, 253, 240, 143, 129, 52].includes(o6) && console.warn("Jupiter swap program instruction 'create_token_ledger' not implemented"), [147, 241, 123, 100, 244, 132, 174, 118].includes(o6) && console.warn("Jupiter swap program instruction 'create_token_account' not implemented"), [229, 23, 203, 151, 122, 227, 173, 42].includes(o6) && console.warn("Jupiter swap program instruction 'route' not implemented"), [150, 86, 71, 116, 167, 93, 14, 104].includes(o6) && console.warn("Jupiter swap program instruction 'route_with_token_ledger' not implemented"), [228, 85, 185, 112, 78, 79, 77, 2].includes(o6) && console.warn("Jupiter swap program instruction 'set_token_ledger' not implemented"), [230, 121, 143, 80, 119, 159, 106, 170].includes(o6) && console.warn("Jupiter swap program instruction 'shared_accounts_route_with_token_ledger' not implemented"), Error(`Jupiter swap program instruction type ${o6} not supported`);
}
var pt = { component: () => {
  let { data: t5, onUserCloseViaDialogOrKeybindRef: e4, setModalData: g2, navigate: h3 } = g(), { client: y, closePrivyModal: w, walletProxy: k2, showFiatPrices: v } = l(), b3 = se(), { user: A } = k(), I = m()(t5?.standardSignAndSendTransaction?.chain ?? "solana:mainnet"), [j, S2] = (0, import_react.useState)(t5?.standardSignAndSendTransaction?.transaction), [C2, T] = (0, import_react.useState)(), [x, O] = (0, import_react.useState)(), [M, q] = (0, import_react.useState)({ value: 0n, isLoading: false }), [V, z] = (0, import_react.useState)(false), [G2, X] = (0, import_react.useState)({}), [Q, Y] = (0, import_react.useState)(), K = t5?.standardSignAndSendTransaction?.account, Z = !!t5?.standardSignAndSendTransaction?.signOnly, N = !!t5?.standardSignAndSendTransaction?.isSponsored, tt2 = K?.imported ? o(A).find(((t6) => t6.address === K.address)) : h(A), { solPrice: nt2, isSolPriceLoading: at2 } = t({ enabled: v }), rt2 = (0, import_react.useMemo)((() => {
    if (!C2) return;
    let t6 = C2.spender, n5 = t2(C2.fee), e5 = t2(M.value, 3, true), a3 = C2.instructions.filter(((t7) => ["sol-transfer", "spl-transfer", "raydium-swap-base-input", "raydium-swap-base-output", "jupiter-swap-shared-accounts-route", "jupiter-swap-exact-out-route"].includes(t7.type))), r3 = a3.at(0);
    if (!r3 || a3.length > 1) return { fee: n5, spender: t6, balance: e5 };
    if ("sol-transfer" === r3.type) return { fee: n5, spender: t6, balance: e5, total: t2(r3.value) };
    if ("spl-transfer" === r3.type) return { fee: n5, spender: t6, balance: e5, total: `${qi({ amount: r3.value, decimals: r3.token.decimals })} ${r3.token.symbol}` };
    if ("raydium-swap-base-input" === r3.type && r3.tokenIn && r3.tokenOut) {
      return { fee: n5, spender: t6, balance: e5, swap: `${`${qi({ amount: r3.amountIn, decimals: r3.tokenIn.decimals })} ${r3.tokenIn.symbol}`} \u2192 ${`${qi({ amount: r3.minimumAmountOut, decimals: r3.tokenOut.decimals })} ${r3.tokenOut.symbol}`}` };
    }
    if ("raydium-swap-base-output" === r3.type && r3.tokenIn && r3.tokenOut) {
      return { fee: n5, spender: t6, balance: e5, swap: `${`${qi({ amount: r3.maxAmountIn, decimals: r3.tokenIn.decimals })} ${r3.tokenIn.symbol}`} \u2192 ${`${qi({ amount: r3.amountOut, decimals: r3.tokenOut.decimals })} ${r3.tokenOut.symbol}`}` };
    }
    if ("jupiter-swap-shared-accounts-route" === r3.type && r3.tokenIn && r3.tokenOut) {
      return { fee: n5, spender: t6, balance: e5, swap: `${`${qi({ amount: r3.inAmount, decimals: r3.tokenIn.decimals })} ${r3.tokenIn.symbol}`} \u2192 ${`${qi({ amount: r3.quotedOutAmount, decimals: r3.tokenOut.decimals })} ${r3.tokenOut.symbol}`}` };
    }
    if ("jupiter-swap-exact-out-route" === r3.type && r3.tokenIn && r3.tokenOut) {
      return { fee: n5, spender: t6, balance: e5, swap: `${`${qi({ amount: r3.quotedInAmount, decimals: r3.tokenIn.decimals })} ${r3.tokenIn.symbol}`} \u2192 ${`${qi({ amount: r3.outAmount, decimals: r3.tokenOut.decimals })} ${r3.tokenOut.symbol}`}` };
    }
    return { fee: n5, spender: t6, balance: e5 };
  }), [C2, K?.address, M]), ot2 = (0, import_react.useMemo)((() => {
    let t6;
    if (!C2 || !v || !nt2 || at2) return;
    function n5(...t7) {
      return r(t7.reduce(((t8, n6) => t8 + n6), 0n), nt2 ?? 0);
    }
    K?.address === C2.spender && (t6 = n5(C2.fee));
    let e5 = n5(M.value), a3 = C2.instructions.filter(((t7) => "sol-transfer" === t7.type || "spl-transfer" === t7.type)).at(0);
    return !a3 || C2.instructions.length > 1 ? { fee: t6, balance: e5 } : "sol-transfer" === a3.type ? { fee: t6, balance: e5, total: n5(a3.value, K?.address === C2.spender ? C2.fee : 0n) } : "spl-transfer" === a3.type ? { fee: t6, balance: e5, total: `${qi({ amount: a3.value, decimals: a3.token.decimals })} ${a3.token.symbol}` } : { fee: t6, balance: e5 };
  }), [C2, v, nt2, at2, K?.address, M]);
  if ((0, import_react.useEffect)((() => {
    !(async function() {
      if (j && y) try {
        O(void 0);
        let t6 = await st({ tx: j, solanaClient: I, privyClient: y, checkFunds: !Z && !N });
        T(t6);
      } catch (t6) {
        console.error("Failed to prepare transaction", t6), O(t6);
      }
    })();
  }), [j, I, y, Z]), (0, import_react.useEffect)((() => {
    (async function() {
      if (!K) return;
      q({ value: M.value, isLoading: true });
      let { value: t6 } = await I.rpc.getBalance(K.address, { commitment: "confirmed" }).send();
      q({ value: t6 ?? 0n, isLoading: false });
    })().catch(console.error);
  }), [C2]), !j || !t5?.standardSignAndSendTransaction || !K) {
    let e5 = Error("Invalid transaction request");
    return (0, import_jsx_runtime.jsx)(f, { error: e5, allowlistConfig: b3.allowlistConfig, onRetry: () => {
      t5?.standardSignAndSendTransaction?.onFailure(e5), w({ shouldCallAuthOnSuccess: false });
    } });
  }
  let it2 = () => {
    if (!V) return G2.signature || G2.signedTransaction ? t5?.standardSignAndSendTransaction?.onSuccess({ signature: G2.signature, signedTransaction: G2.signedTransaction }) : t5?.standardSignAndSendTransaction?.onFailure(Q ?? x ?? Error("User exited the modal before submitting the transaction")), w({ shouldCallAuthOnSuccess: false });
  };
  e4.current = it2;
  let ct2 = t5.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: t5.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl, alt: t5.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText }) : null, lt2 = !!(t5.funding && t5.funding.supportedOptions.length > 0), mt2 = !C2?.hasFunds && lt2 && !N;
  if (G2.signature || G2.signedTransaction) {
    let e5 = C2?.instructions.filter(((t6) => "sol-transfer" === t6.type || "spl-transfer" === t6.type)), a3 = 1 === e5?.length ? e5?.at(0) : void 0;
    return (0, import_jsx_runtime.jsx)(et, { fees: G2.fees ?? 0n, onClose: it2, transactionInfo: t5.standardSignAndSendTransaction?.uiOptions.transactionInfo, solPrice: nt2, receiptHeader: t5.standardSignAndSendTransaction?.uiOptions.successHeader, receiptDescription: t5.standardSignAndSendTransaction?.uiOptions.successDescription, chain: I.chain, signOnly: Z, instruction: "sol-transfer" === a3?.type ? { to: a3.toAccount, amount: a3.value } : { to: a3?.toAccount || a3?.toAta, total: rt2?.total } });
  }
  return Q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(te, { transactionError: Q, chainId: I.chain, onClose: it2, chainType: "solana", onRetry: async () => {
    Y(void 0);
    let { value: t6 } = await I.rpc.getLatestBlockhash().send();
    var n5, e5;
    S2((n5 = j, e5 = t6, pipe(getCompiledTransactionMessageDecoder().decode(l2(n5)), ((t7) => decompileTransactionMessage4(t7)), ((t7) => setTransactionMessageLifetimeUsingBlockhash(e5, t7)), ((t7) => compileTransaction(t7)), ((t7) => new Uint8Array(getTransactionEncoder().encode(t7))))));
  } }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(G, { img: ct2, title: t5.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.title || "Confirm transaction", subtitle: t5.standardSignAndSendTransaction?.uiOptions?.description || `${b3.name} wants your permission to approve the following transaction.`, cta: mt2 ? "Add funds" : t5.standardSignAndSendTransaction?.uiOptions?.buttonText || "Approve", instructions: C2?.instructions ?? [], network: "solana:mainnet" == I.chain ? "Solana" : I.chain.replace("solana:", ""), blockExplorerUrl: I.blockExplorerUrl, total: v ? ot2?.total : rt2?.total, fee: v ? ot2?.fee : rt2?.fee, balance: v ? ot2?.balance : rt2?.balance, swap: rt2?.swap, transactingWalletAddress: K.address, disabled: !C2?.hasFunds && !lt2, isSubmitting: V, isPreparing: !C2 || M.isLoading, isTokenPriceLoading: v && at2, isMissingFunds: !C2?.hasFunds, submitError: Q ?? void 0, isSponsored: !!t5.standardSignAndSendTransaction?.isSponsored, parseError: x, onClick: mt2 ? async () => {
    if (!K) return;
    if (!lt2) throw Error("Funding wallet is not enabled");
    let n5 = "FundingMethodSelectionScreen";
    g2({ ...t5, funding: { ...t5.funding, methodScreen: n5 }, solanaFundingData: t5?.solanaFundingData }), h3(n5);
  } : async () => {
    try {
      if (z(true), V || !K || !k2 || !A || !tt2) return;
      let n5 = await t5.standardSignAndSendTransaction.onConfirm(j);
      if ("signature" in n5) {
        let t6 = await (async function({ solanaClient: t7, signature: n6 }) {
          let e5 = getBase58Decoder().decode(n6), a3 = await t7.rpc.getTransaction(e5, { maxSupportedTransactionVersion: 0, commitment: "confirmed", encoding: "base64" }).send().catch((() => null));
          return a3 ? { fee: a3.meta?.fee ?? 0n } : null;
        })({ solanaClient: I, signature: n5.signature });
        return void X({ ...n5, fees: t6?.fee });
      }
      X(n5);
    } catch (t6) {
      console.warn({ transaction: j, error: t6 }), Y(t6);
    } finally {
      z(false);
    }
  }, onClose: it2 });
} };
export {
  pt as StandardSignAndSendTransactionScreen,
  pt as default
};
