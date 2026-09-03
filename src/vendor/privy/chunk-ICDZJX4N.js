import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import {
  CircleCheckBig,
  CircleX
} from "./chunk-ELJY7WHB.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import {
  qa,
  za
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
import "./chunk-SLTT5NIH.js";
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
import "./chunk-MIVUYAK7.js";
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

// node_modules/@privy-io/react-auth/dist/esm/CaptchaScreen-CWtVYxSJ.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem";
import "viem/utils";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
import "viem/accounts";
var p = ({ status: i2, title: o2, description: s2, userIntentRequired: n2, retriesRemaining: m, hasSelectedCta: c, onContinue: p2, onRetry: l2 }) => {
  let d = (0, import_react.useMemo)((() => {
    switch (i2) {
      case "loading":
      default:
        return;
      case "success":
        return n2 ? { label: c ? "Continuing..." : "Continue", onClick: p2, disabled: c, loading: c } : void 0;
      case "error":
        return m > 0 ? { label: "Retry", onClick: l2 } : void 0;
    }
  }), [i2, c, p2, l2]), j = (0, import_react.useMemo)((() => ({ loading: "loading", ready: "subtle", disabled: "subtle", success: "success", error: "error" })[i2] || "loading"), [i2]);
  return (0, import_jsx_runtime.jsx)(n, { icon: "loading" === i2 || "ready" === i2 ? void 0 : "success" === i2 ? CircleCheckBig : CircleX, iconVariant: j, title: o2, subtitle: s2, primaryCta: d, watermark: true });
};
var l = { component: () => {
  let { lastScreen: t, data: r, navigate: a2, setModalData: u } = g(), { status: l2, token: d, waitForResult: j, reset: y, execute: g2 } = za(), h = (0, import_react.useRef)([]), v = (e2) => {
    h.current = [e2, ...h.current];
  }, [f, C] = (0, import_react.useState)(true);
  (0, import_react.useEffect)((() => (v(setTimeout(C, 1e3, false)), () => {
    h.current.forEach(((e2) => clearTimeout(e2))), h.current = [];
  })), []);
  let [b, k] = (0, import_react.useState)(""), [w, S] = (0, import_react.useState)("Checking that you are a human..."), [x, R] = (0, import_react.useState)(false), [I, T] = (0, import_react.useState)(3), P = r?.captchaModalData, q = async (e2) => {
    try {
      await P?.callback(e2), P?.onSuccessNavigateTo && a2(P?.onSuccessNavigateTo, false);
    } catch (e3) {
      if (e3 instanceof qa) return;
      u({ errorModalData: { error: e3, previousScreen: t || "LandingScreen" } }), a2(P?.onErrorNavigateTo || "ErrorScreen", false);
    }
  };
  (0, import_react.useEffect)((() => {
    "success" === l2 ? v(setTimeout((async () => {
      let e2 = await j();
      !e2 || P?.userIntentRequired || q(e2);
    }), 1e3)) : "ready" === l2 && v(setTimeout((() => {
      "ready" === l2 && g2();
    }), 500));
  }), [l2]), (0, import_react.useEffect)((() => {
    if (!f) switch (l2) {
      case "success":
        k("Success!"), S("CAPTCHA passed successfully."), P?.userIntentRequired || setTimeout((() => {
          R(true), q(d);
        }), 2e3);
        break;
      case "loading":
        k(""), S("Checking that you are a human...");
        break;
      case "error":
        k("Something went wrong"), S(I <= 0 ? "If you use an adblocker or VPN, try disabling and re-attempting." : "You did not pass CAPTCHA. Please try again.");
    }
  }), [l2, f, x]);
  return (0, import_jsx_runtime.jsx)(p, { status: l2, title: b, description: w, userIntentRequired: P?.userIntentRequired, retriesRemaining: I, hasSelectedCta: x, onContinue: () => {
    R(true), q(d);
  }, onRetry: async () => {
    if (I <= 0) return;
    T(((e3) => e3 - 1)), y(), g2();
    let e2 = await j();
    !e2 || P?.userIntentRequired || q(e2);
  } });
} };
export {
  l as CaptchaScreen,
  p as CaptchaScreenView,
  l as default
};
