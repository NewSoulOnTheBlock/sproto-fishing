import {
  w
} from "./chunk-4JCAMCZH.js";
import "./chunk-PZMIZGJH.js";
import {
  PhoneIcon_default
} from "./chunk-P6V6I22J.js";
import "./chunk-WSIRTJK5.js";
import {
  n
} from "./chunk-TKDI5N2H.js";
import "./chunk-2MR7ZHQH.js";
import "./chunk-6HBDFDSF.js";
import "./chunk-RPCD4HAF.js";
import "./chunk-H64F7Q3M.js";
import "./chunk-PANVPNZ2.js";
import "./chunk-LTBS5V6F.js";
import "./chunk-4X5V72BU.js";
import {
  k
} from "./chunk-SLTT5NIH.js";
import "./chunk-LORNEDOT.js";
import {
  require_lib
} from "./chunk-P4KNLI4U.js";
import "./chunk-EJB6TW3T.js";
import "./chunk-H7FAMYXB.js";
import "./chunk-COXZQBSX.js";
import "./chunk-W22FA2JU.js";
import "./chunk-ZFO2QI3F.js";
import {
  g
} from "./chunk-2LSC5KMF.js";
import {
  l
} from "./chunk-THXMRURJ.js";
import "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/UpdatePhoneScreen-Bedi26yh.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem/utils";
import "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
var s = ({ title: i = "Update your phone number", subtitle: n2 = "Add the phone number you'd like to use going forward. We'll send you a confirmation code", onSubmit: m, isSubmitting: s2 = false }) => {
  let [p2, c] = (0, import_react.useState)(null);
  return (0, import_jsx_runtime.jsx)(n, { title: i, subtitle: n2, icon: PhoneIcon_default, primaryCta: { label: s2 ? "Submitting" : "Update", onClick: async () => {
    p2?.qualifiedPhoneNumber && await m(p2);
  }, disabled: !p2?.isValid || s2 }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { onChange: (e2) => {
    c(e2);
  }, onSubmit: async () => {
  }, noIncludeSubmitButton: true, hideRecent: true }) });
};
var p = { component: () => {
  let { currentScreen: t, data: r, navigate: a, setModalData: p2 } = g(), { user: c } = k(), { initUpdatePhone: u } = l(), [l2, d] = (0, import_react.useState)(false);
  return (0, import_jsx_runtime.jsx)(s, { onSubmit: async (e2) => {
    d(true);
    try {
      if (!c?.phone?.number) throw Error("User is required to have an phone number to update it.");
      await u(c?.phone?.number, e2.qualifiedPhoneNumber), a("AwaitingPasswordlessCodeScreen");
    } catch (e3) {
      p2({ errorModalData: { error: e3, previousScreen: r?.errorModalData?.previousScreen || t || "LinkPhoneScreen" } }), a("ErrorScreen");
    } finally {
      d(false);
    }
  }, isSubmitting: l2 });
} };
export {
  p as UpdatePhoneScreen,
  s as UpdatePhoneScreenView,
  p as default
};
