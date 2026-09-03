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
import "./chunk-SLTT5NIH.js";
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
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import "./chunk-IEF4HDEJ.js";
import "./chunk-GVC7K3K7.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/LinkPhoneScreen-CHOAda2u.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
import "viem/utils";
import "viem";
import "viem/chains";
var import_react_device_detect = __toESM(require_lib(), 1);
var a = ({ title: i = "Connect your phone", subtitle: m = "Add your number to your account", onSubmit: n2, isSubmitting: a2 = false }) => {
  let [c2, u] = (0, import_react.useState)(null), p = async () => {
    c2?.qualifiedPhoneNumber && await n2(c2);
  };
  return (0, import_jsx_runtime.jsx)(n, { title: i, subtitle: m, icon: PhoneIcon_default, primaryCta: { label: a2 ? "Submitting" : "Submit", onClick: p, disabled: !c2?.isValid || a2 }, watermark: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w, { onChange: (t2) => {
    u(t2);
  }, onSubmit: p, noIncludeSubmitButton: true, hideRecent: true }) });
};
var c = { component: () => {
  let { currentScreen: o, data: r, navigate: s, setModalData: c2 } = g(), u = se(), { initLoginWithSms: p } = l(), [l2, d] = (0, import_react.useState)(false);
  return (0, import_jsx_runtime.jsx)(a, { subtitle: `Add your number to your ${u?.name} account`, onSubmit: async (t2) => {
    d(true);
    try {
      await p({ phoneNumber: t2.qualifiedPhoneNumber, withPrivyUi: true }), s("AwaitingPasswordlessCodeScreen");
    } catch (t3) {
      c2({ errorModalData: { error: t3, previousScreen: r?.errorModalData?.previousScreen || o || "LinkPhoneScreen" } }), s("ErrorScreen");
    } finally {
      d(false);
    }
  }, isSubmitting: l2 });
} };
export {
  c as LinkPhoneScreen,
  a as LinkPhoneScreenView,
  c as default
};
