import {
  L
} from "./chunk-RPCD4HAF.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  require_jsx_runtime
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/FundWalletMethodHeader-DiPRuEDA.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function t({ title: t2 }) {
  let { currentScreen: r, navigateBack: i, navigate: o, data: d, setModalData: u } = g();
  return (0, import_jsx_runtime.jsx)(L, { title: t2, backFn: "ManualTransferScreen" === r ? i : r === d?.funding?.methodScreen ? d.funding.comingFromSendTransactionScreen ? () => o("SendTransactionScreen") : void 0 : d?.funding?.methodScreen ? () => {
    let n2 = d.funding;
    n2.usingDefaultFundingMethod && (n2.usingDefaultFundingMethod = false), u({ funding: n2, solanaFundingData: d?.solanaFundingData }), o(n2.methodScreen);
  } : void 0 });
}

export {
  t
};
