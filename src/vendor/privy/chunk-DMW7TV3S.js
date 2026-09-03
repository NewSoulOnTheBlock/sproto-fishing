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
import "./chunk-2IJQ6F4F.js";
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
import {
  g
} from "./chunk-2LSC5KMF.js";
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

// node_modules/@privy-io/react-auth/dist/esm/MfaAuthVerifyFlowScreen-BJLbz86p.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem/utils";
import "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var u = { component: () => {
  let { user: u2 } = k(), d = se(), j = (0, import_react.useMemo)((() => u2?.mfaMethods.filter(((o2) => "passkey" !== o2 || !d.globalDisablePasskeys)) ?? []), [u2?.mfaMethods, d.globalDisablePasskeys]), { data: h } = g(), [f, y] = (0, import_react.useState)(j[0]), [v, k2] = (0, import_react.useState)(false), [g2, w] = (0, import_react.useState)(), [b, C] = (0, import_react.useState)();
  if ((0, import_react.useEffect)((() => {
    y(j[0]);
  }), [j]), !h?.mfaVerify) throw Error("Missing modal data for MFA verification screen.");
  let { onFailure: M, onSuccess: P, generateOptions: S, verifyTotpCode: x, verifyPasskey: I, verifySmsCode: A, sendSmsCode: E } = h.mfaVerify, B = async (o2) => {
    if ("passkey" !== o2) try {
      y(o2), "sms" === o2 && (y(o2), await E()), "totp" === o2 && y(o2);
    } catch (o3) {
      console.error(o3);
    }
    else try {
      y(o2);
      let t2 = await S();
      if (!t2) throw Error("something went wrong");
      w(t2), await I(t2), k2(true), C(void 0), P();
    } catch (o3) {
      C(X(o3));
    }
  }, F = async (o2) => {
    C(void 0);
    try {
      if (!o2 || !f) return;
      if ("passkey" === f) {
        if (!g2) throw Error("Missing passkey challenge");
        await I(g2);
      } else "sms" === f ? await A(o2) : "totp" === f && await x(o2);
      C(void 0), k2(true), P();
    } catch (o3) {
      throw X(o3).error;
    }
  }, L = () => {
    b || !v ? M(b?.error ?? Error("Canceled MFA verification.")) : P();
  }, V = (0, import_react.useRef)(false);
  return (0, import_react.useEffect)((() => {
    !V.current && f && (V.current = true, B(f).finally((() => {
      V.current = false;
    })));
  }), [open]), u2 ? "passkey" === f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(R, { account: u2.linkedAccounts.filter(((o2) => "passkey" === o2.type && o2.enrolledInMfa)).sort(((o2, t2) => t2.firstVerifiedAt.valueOf() - o2.firstVerifiedAt.valueOf()))[0], submitSuccess: v, hasBlockingError: b?.isBlocking ?? false, error: b?.error, onClose: L, onBack: () => {
    y(void 0), C(void 0);
  }, handleSubmit: () => F(g2).catch(C) }) : "sms" === f || "totp" === f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(U, { selectedMethod: f, submitSuccess: v, hasBlockingError: b?.isBlocking ?? false, handleSubmitCode: F, onClose: L, onBack: j.length > 1 ? () => y(void 0) : void 0 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(K, { mfaMethods: j, onSelect: B, handleClose: L }) : null;
} };
export {
  u as MfaAuthVerifyFlowScreen,
  u as default
};
