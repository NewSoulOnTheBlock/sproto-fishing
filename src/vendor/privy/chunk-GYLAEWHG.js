import {
  K,
  R,
  U,
  X
} from "./chunk-NWYVEAVB.js";
import "./chunk-JIT2Z6LY.js";
import "./chunk-W2GJWPY6.js";
import "./chunk-U2USAYHI.js";
import "./chunk-OY52FFSF.js";
import "./chunk-JFVQGRVD.js";
import "./chunk-RN3TQCJB.js";
import "./chunk-KLSNZW7N.js";
import "./chunk-SGK7A445.js";
import "./chunk-4M5GFLTB.js";
import "./chunk-FDAXBPM5.js";
import "./chunk-W3FIRIBO.js";
import "./chunk-2HYLPLOV.js";
import "./chunk-NOC53GNL.js";
import "./chunk-QM2ZBVYE.js";
import "./chunk-P6V6I22J.js";
import "./chunk-EIEISV5R.js";
import "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  Dr
} from "./chunk-2IJQ6F4F.js";
import "./chunk-XDDJQ3UG.js";
import "./chunk-Q77PGVYO.js";
import "./chunk-KH2OFJFK.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-5QJKWR6B.js";
import "./chunk-5IEXBHIB.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import "./chunk-75YLIS6S.js";
import "./chunk-2DL5TNP5.js";
import "./chunk-NFV3EFLQ.js";
import {
  k
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
import "./chunk-2LSC5KMF.js";
import "./chunk-THXMRURJ.js";
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

// node_modules/@privy-io/react-auth/dist/esm/MfaVerifyFlowScreen-Cvb08yHS.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var u = ({ onClose: u2 }) => {
  let { user: d } = k(), j = se(), h = (0, import_react.useMemo)((() => d?.mfaMethods.filter(((o2) => "passkey" !== o2 || !j.globalDisablePasskeys)) ?? []), [d?.mfaMethods, j.globalDisablePasskeys]), [f, y] = (0, import_react.useState)(h[0] ?? null), { init: v, cancel: k2, submit: g } = Dr(), [b, w] = (0, import_react.useState)(false), [x, C] = (0, import_react.useState)(null), [I, P] = (0, import_react.useState)();
  (0, import_react.useEffect)((() => {
    y(h[0] ?? null);
  }), [h]);
  let S = (0, import_react.useRef)(false);
  async function M(o2) {
    P(void 0);
    try {
      if (!o2 || !f) return;
      await g(f, o2), w(true), P(void 0), u2();
    } catch (o3) {
      throw X(o3).error;
    }
  }
  async function A(o2) {
    if ("passkey" !== o2) try {
      y(o2), await v(o2);
    } catch (o3) {
      console.error(o3);
    }
    else try {
      y(o2);
      let t2 = await v(o2);
      if (!t2) throw Error("something went wrong");
      C(t2), await g(o2, t2), w(true), P(void 0), u2();
    } catch (o3) {
      P(X(o3));
    }
  }
  (0, import_react.useEffect)((() => {
    !S.current && f && (S.current = true, A(f).finally((() => {
      S.current = false;
    })));
  }), []);
  let B = () => {
    y(null), P(void 0), k2(), u2();
  };
  return d ? "passkey" === f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(R, { account: d.linkedAccounts.filter(((o2) => "passkey" === o2.type && o2.enrolledInMfa)).sort(((o2, t2) => t2.firstVerifiedAt.valueOf() - o2.firstVerifiedAt.valueOf()))[0], submitSuccess: b, hasBlockingError: I?.isBlocking ?? false, error: I?.error, onClose: B, onBack: () => {
    y(null), P(void 0);
  }, handleSubmit: () => M(x).catch(P) }) : f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(U, { submitSuccess: b, hasBlockingError: I?.isBlocking ?? false, handleSubmitCode: M, selectedMethod: f, onClose: B, onBack: h.length > 1 ? () => y(null) : void 0 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(K, { mfaMethods: h, onSelect: A, handleClose: B }) : null;
};
export {
  u as MfaVerifyFlowScreen,
  u as default
};
