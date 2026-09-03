import {
  i,
  s
} from "./chunk-W22FA2JU.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/reservoir-B7XIq5qj.mjs
var import_react = __toESM(require_react(), 1);
var r = 792703809;
var s2 = "11111111111111111111111111111111";
var n = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
var i2 = "0x0000000000000000000000000000000000000000";
var o = ({ appId: t2, originCurrency: e, destinationCurrency: a, ...r2 }) => ({ tradeType: "EXPECTED_OUTPUT", originCurrency: e ?? i2, destinationCurrency: a ?? i2, referrer: `privy|${t2}`, ...r2 });
var c = "https://api.relay.link";
var d = "https://api.testnets.relay.link";
var l = async ({ input: t2, isTestnet: e }) => {
  let a = await fetch((e ? d : c) + "/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t2) }), r2 = await a.json();
  if (!(a.ok || "string" == typeof r2.message && r2.message.startsWith("Invalid address"))) throw console.error("Relay error:", r2), Error(r2.message ?? "Error fetching quote from relay");
  return r2;
};
var u = (t2) => {
  let e = t2.steps[0]?.items?.[0];
  if (e) return { from: e.data.from, to: e.data.to, value: Number(e.data.value), chainId: Number(e.data.chainId), data: e.data.data };
};
var f = (t2) => t2.steps.flatMap(((t3) => t3.items?.filter(((t4) => "incomplete" === t4.status)) ?? [])).map(((t3) => ({ from: t3.data.from, to: t3.data.to, value: Number(t3.data.value), chainId: Number(t3.data.chainId), data: t3.data.data })));
async function p({ transactionHash: t2, isTestnet: e }) {
  let a = await fetch((e ? d : c) + "/requests/v2?hash=" + t2), r2 = await a.json();
  if (!a.ok) {
    if ("message" in r2 && "string" == typeof r2.message) throw Error(r2.message);
    throw Error("Error fetching request from relay");
  }
  return r2.requests.at(0)?.status ?? "pending";
}
function h({ transactionHash: e, isTestnet: a, bridgingStatus: r2, setBridgingStatus: s3, onSuccess: n2, onFailure: i3 }) {
  (0, import_react.useEffect)((() => {
    if (e && r2) {
      if (["delayed", "waiting", "pending"].includes(r2)) {
        let t2 = setInterval((async () => {
          try {
            let t3 = await p({ transactionHash: e, isTestnet: a });
            s3(t3);
          } catch (t3) {
            console.error(t3);
          }
        }), 1e3);
        return () => clearInterval(t2);
      }
      "success" === r2 ? n2({ transactionHash: e }) : ["refund", "failure"].includes(r2) && i3({ error: new m(e, a) });
    }
  }), [r2, e, a]);
}
var m = class extends s {
  constructor(t2, e) {
    super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.", void 0, i.TRANSACTION_FAILURE), this.relayLink = e ? `https://testnets.relay.link/transaction/${t2}` : `https://relay.link/transaction/${t2}`;
  }
};

export {
  r,
  s2 as s,
  n,
  o,
  l,
  u,
  f,
  h,
  m
};
