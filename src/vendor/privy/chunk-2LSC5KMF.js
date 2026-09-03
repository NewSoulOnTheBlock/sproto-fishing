import {
  i
} from "./chunk-THXMRURJ.js";
import {
  se
} from "./chunk-MIVUYAK7.js";
import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/modal-context-B88VqEU_.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function s({ src: a2, ...n2 }) {
  return (0, import_jsx_runtime.jsx)("img", { src: a2, ...n2, style: { display: "none" } });
}
var p = /* @__PURE__ */ (0, import_react.createContext)({ currentScreen: null, lastScreen: null, navigate: i, navigateBack: i, resetNavigation: i, setModalData: i, onUserCloseViaDialogOrKeybindRef: void 0 });
var u = (n2) => {
  let l2 = se(), [c, u2] = (0, import_react.useState)(n2.initialScreen), g2 = (0, import_react.useRef)(null);
  (0, import_react.useEffect)((() => {
    n2.open || (g2.current = null);
  }), [n2.open]), (0, import_react.useEffect)((() => {
    g2.current = null;
  }), [n2.initialScreen]);
  let d = { data: n2.data, setModalData: n2.setModalData, currentScreen: n2.initialScreen, lastScreen: c, navigate: (e2, a2 = true) => {
    n2.setInitialScreen(e2), a2 && u2(n2.initialScreen);
  }, navigateBack: () => {
    n2.setInitialScreen(c);
  }, resetNavigation: () => {
    n2.setInitialScreen(null), u2(null);
  }, onUserCloseViaDialogOrKeybindRef: g2 };
  return (0, import_jsx_runtime.jsxs)(p.Provider, { value: d, children: [("string" == typeof l2.appearance.logo || "img" === l2.appearance.logo?.type) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { src: "string" == typeof l2.appearance.logo ? l2.appearance.logo : l2.appearance.logo.props.src }), n2.children] });
};
var g = () => (0, import_react.useContext)(p);

export {
  u,
  g
};
