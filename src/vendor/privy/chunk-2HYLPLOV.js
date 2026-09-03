import {
  t
} from "./chunk-NOC53GNL.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import {
  H,
  P
} from "./chunk-MIVUYAK7.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/useGetTokenPrice-BnrFxAWK.mjs
var import_react = __toESM(require_react(), 1);
function c(c2) {
  let { tokenPrice: a, isTokenPriceLoading: s, tokenPriceError: l2 } = ((t2) => {
    let { showFiatPrices: c3, getUsdTokenPrice: a2, chains: s2 } = l(), [l3, P3] = (0, import_react.useState)(true), [d2, k2] = (0, import_react.useState)(void 0), [m, f] = (0, import_react.useState)(void 0);
    return (0, import_react.useEffect)((() => {
      t2 ||= H;
      let r2 = P(s2).find(((r3) => r3.id === Number(t2)));
      (async () => {
        if (c3) {
          if (!r2) return P3(false), void k2(Error(`Unable to fetch token price on chain id ${t2}`));
          try {
            P3(true);
            let e2 = await a2(r2);
            e2 ? f(e2) : k2(Error(`Unable to fetch token price on chain id ${r2.id}`));
          } catch (r3) {
            k2(r3);
          } finally {
            P3(false);
          }
        } else P3(false);
      })();
    }), [t2]), { tokenPrice: m, isTokenPriceLoading: l3, tokenPriceError: d2 };
  })("solana" === c2 ? -1 : c2), { solPrice: P2, isSolPriceLoading: d, solPriceError: k } = t({ enabled: "solana" === c2 });
  return "solana" === c2 ? { tokenPrice: P2, isTokenPriceLoading: d, tokenPriceError: k } : { tokenPrice: a, isTokenPriceLoading: s, tokenPriceError: l2 };
}

export {
  c
};
