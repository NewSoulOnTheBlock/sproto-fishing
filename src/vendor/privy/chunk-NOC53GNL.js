import {
  l
} from "./chunk-THXMRURJ.js";
import {
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/useGetSolPrice-x7gfUIHJ.mjs
var import_react = __toESM(require_react(), 1);
var t = ({ enabled: t2 = true } = {}) => {
  let { showFiatPrices: i, getUsdPriceForSol: a } = l(), [c, l2] = (0, import_react.useState)(true), [s, n] = (0, import_react.useState)(void 0), [d, f] = (0, import_react.useState)(void 0);
  return (0, import_react.useEffect)((() => {
    (async () => {
      if (i && t2) try {
        l2(true);
        let r2 = await a();
        r2 ? f(r2) : n(Error("Unable to fetch SOL price"));
      } catch (r2) {
        n(r2);
      } finally {
        l2(false);
      }
      else l2(false);
    })();
  }), []), { solPrice: d, isSolPriceLoading: c, solPriceError: s };
};

export {
  t
};
