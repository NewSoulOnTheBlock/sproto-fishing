import {
  require_jsx_runtime,
  require_react
} from "./chunk-57QCSXIY.js";
import {
  __toESM
} from "./chunk-WPLOTFGW.js";

// node_modules/@privy-io/react-auth/dist/esm/internal-context-dfitw7Ot.mjs
var import_react = __toESM(require_react(), 1);
var i = () => {
  throw Error("You need to wrap your application with the <PrivyProvider> initialized with your app id.");
};
var a = (t4) => () => {
  throw Error(t4.trim());
};
var n = () => {
};
var s = /* @__PURE__ */ (0, import_react.createContext)({ setAuthenticated: i, setUser: i, setIsNewUser: i, isNewUserThisSession: false, walletConnectionStatus: null, setWalletConnectionStatus: i, connectors: [], rpcConfig: { rpcUrls: {} }, showFiatPrices: true, chains: [], clientAnalyticsId: null, pendingTransaction: null, client: null, privy: null, appId: "notAdded", hideWalletUIs: { current: false }, nativeTokenSymbolForChainId: i, initializeWalletProxy: i, getAuthMeta: i, getAuthFlow: i, closePrivyModal: i, openPrivyModal: i, connectWallet: i, initLoginWithWallet: i, loginWithWallet: i, initLoginWithFarcaster: i, loginWithFarcaster: i, loginWithCode: i, initLoginWithEmail: i, initLoginWithSms: i, initUpdateEmail: i, initUpdatePhone: i, resendEmailCode: i, resendSmsCode: i, initLoginWithHeadlessOAuth: i, loginWithHeadlessOAuth: i, crossAppAuthFlow: i, initLoginWithOAuth: i, loginWithOAuth: i, passkeyAuthState: { status: "initial" }, setPasskeyAuthState: i, initSignupWithPasskey: i, signupWithPasskey: i, initLoginWithPasskey: i, loginWithPasskey: i, initLinkWithPasskey: i, linkWithPasskey: i, refreshSessionAndUser: i, walletProxy: null, createAnalyticsEvent: i, acceptTerms: i, getUsdTokenPrice: i, getUsdPriceForSol: i, getSplTokenMetadata: i, recoverEmbeddedWallet: i, updateWallets: i, fundWallet: i, openModal: i, setReadyToTrue: i, requestFarcasterSignerStatus: i, initLoginWithTelegram: i, loginWithTelegram: i, generateSiweMessage: i, generateSiweMessageForSmartWallet: i, loginWithSiwe: i, linkWithSiwe: i, linkSmartWallet: i, delegateWallet: i, revokeDelegatedWallets: i, connectCoinbaseSmartWallet: i, connectBaseAccount: i, initiateAccountTransfer: i, emailOtpState: { status: "initial" }, setEmailOtpState: i, smsOtpState: { status: "initial" }, setSmsOtpState: i, siweState: { status: "initial" }, setSiweState: i, oAuthState: { status: "initial" }, setOAuthState: i, telegramAuthState: { status: "initial" }, setTelegramAuthState: i, isHeadlessOAuthLoading: false, isHeadlessSigning: i, inProgressAuthFlowRef: { current: null }, inProgressLoginOrLinkMethodRef: { current: null }, baseAccountSdk: void 0, setBaseAccountSdk: i });
var l = () => (0, import_react.useContext)(s);

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_react2 = __toESM(require_react());

// node_modules/styled-components/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/styled-components/node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}

// node_modules/styled-components/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      // (
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/styled-components/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else {
                switch (atrule) {
                  // c(ontainer)
                  case 99:
                    if (charat(characters2, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (charat(characters2, 2) === 97) break;
                  default:
                    offset = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                else parse(characters2, reference, reference, reference, [""], children, 0, points, children);
              }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i4 = 0, j2 = 0, k2 = 0; i4 < index; ++i4)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i4])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}

// node_modules/styled-components/node_modules/stylis/src/Prefixer.js
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return WEBKIT + value + value;
    // mask-composite
    case 4855:
      return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a4, b2, c3, d2, e2, f2) {
        return MS + a4 + ":" + b2 + f2 + (c3 ? MS + a4 + "-span:" + (d2 ? e2 : +e2 - +b2) + f2 : "") + value;
      });
    // position: sticky
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        // (inline-)?gri(d)
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}

// node_modules/styled-components/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  for (var i4 = 0; i4 < children.length; i4++)
    output += callback(children[i4], i4, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case NAMESPACE:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/styled-components/node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i4 = 0; i4 < length2; i4++)
      output += collection[i4](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                // :read-(only|write)
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                // :placeholder
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}

// node_modules/styled-components/dist/styled-components.browser.esm.js
var r;
var i2;
var c = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var a2 = "active";
var l2 = "data-styled-version";
var u = "6.5.3";
var h = "/*!sc*/\n";
var d = "undefined" != typeof window && "undefined" != typeof document;
function p(e2) {
  if ("undefined" != typeof process && void 0 !== process.env) {
    const t4 = process.env[e2];
    if (void 0 !== t4 && "" !== t4) return "false" !== t4;
  }
}
var f = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i2 = null !== (r = p("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : p("SC_DISABLE_SPEEDY")) && void 0 !== i2 ? i2 : "undefined" != typeof process && void 0 !== process.env && true);
var m = "sc-keyframes-";
var y = {};
var g = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n", 18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n" } : {};
function v(e2, ...t4) {
  return false ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e2} for more information.${t4.length > 0 ? ` Args: ${t4.join(", ")}` : ""}`) : new Error((function(...e3) {
    let t5 = e3[0];
    const n4 = [];
    for (let t6 = 1, o2 = e3.length; t6 < o2; t6 += 1) n4.push(e3[t6]);
    return n4.forEach((e4) => {
      t5 = t5.replace(/%[a-z]/, e4);
    }), t5;
  })(g[e2], ...t4).trim());
}
var S = 1 << 30;
var b = /* @__PURE__ */ new Map();
var w = /* @__PURE__ */ new Map();
var N = 1;
var C = (e2) => {
  if (b.has(e2)) return b.get(e2);
  for (; w.has(N); ) N++;
  const t4 = N++;
  if ((0 | t4) < 0 || t4 > S) throw v(16, `${t4}`);
  return b.set(e2, t4), w.set(t4, e2), t4;
};
var O = (e2) => w.get(e2);
var E = (e2, t4) => {
  N = t4 + 1, b.set(e2, t4), w.set(t4, e2);
};
var A = /invalid hook call/i;
var P = /* @__PURE__ */ new Set();
var _ = (e2, n4) => {
  if (true) {
    const o2 = `The component ${e2}${n4 ? ` with the id of "${n4}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, s3 = console.error;
    try {
      let e3 = true;
      console.error = (t4, ...n5) => {
        A.test(t4) ? (e3 = false, P.delete(o2)) : s3(t4, ...n5);
      }, "function" == typeof import_react2.default.useState && import_react2.default.useState(null), e3 && !P.has(o2) && (console.warn(o2), P.add(o2));
    } catch (e3) {
      A.test(e3.message) && P.delete(o2);
    } finally {
      console.error = s3;
    }
  }
};
var I = Object.freeze([]);
var $ = Object.freeze({});
function R(e2, t4, n4 = $) {
  return e2.theme !== n4.theme && e2.theme || t4 || n4.theme;
}
var j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var x = /(^-|-$)/g;
function T(e2) {
  return e2.replace(j, "-").replace(x, "");
}
var k = /(a)(d)/gi;
var D = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
function V(e2) {
  let t4, n4 = "";
  for (t4 = Math.abs(e2); t4 > 52; t4 = t4 / 52 | 0) n4 = D(t4 % 52) + n4;
  return (D(t4 % 52) + n4).replace(k, "$1-$2");
}
var M = 5381;
var G = (e2, t4) => {
  let n4 = t4.length;
  for (; n4; ) e2 = 33 * e2 ^ t4.charCodeAt(--n4);
  return e2;
};
var F = (e2) => G(M, e2);
function z(e2) {
  return V(F(e2) >>> 0);
}
function W(e2) {
  return "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
}
function L(e2) {
  return "string" == typeof e2 && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
function B(e2) {
  return L(e2) ? `styled.${e2}` : `Styled(${W(e2)})`;
}
var q = Symbol.for("react.memo");
var H = Symbol.for("react.forward_ref");
var Y = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true };
var U = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
var J = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
var X = { [H]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [q]: J };
function K(e2) {
  return ("type" in (t4 = e2) && t4.type.$$typeof) === q ? J : "$$typeof" in e2 ? X[e2.$$typeof] : Y;
  var t4;
}
var Q = Object.defineProperty;
var Z = Object.getOwnPropertyNames;
var ee = Object.getOwnPropertySymbols;
var te = Object.getOwnPropertyDescriptor;
var ne = Object.getPrototypeOf;
var oe = Object.prototype;
function se(e2, t4, n4) {
  if ("string" != typeof t4) {
    const o2 = ne(t4);
    o2 && o2 !== oe && se(e2, o2, n4);
    const s3 = Z(t4).concat(ee(t4)), r3 = K(e2), i4 = K(t4);
    for (let o3 = 0; o3 < s3.length; ++o3) {
      const c3 = s3[o3];
      if (!(c3 in U || n4 && n4[c3] || i4 && c3 in i4 || r3 && c3 in r3)) {
        const n5 = te(t4, c3);
        try {
          Q(e2, c3, n5);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function re(e2) {
  return "function" == typeof e2;
}
var ie = Symbol.for("react.forward_ref");
function ce(e2) {
  return null != e2 && ("object" == typeof e2 || "function" == typeof e2) && e2.$$typeof === ie && "styledComponentId" in e2;
}
function ae(e2, t4) {
  return e2 && t4 ? e2 + " " + t4 : e2 || t4 || "";
}
function le(e2, t4) {
  return e2.join(t4 || "");
}
function ue(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function he(e2, t4, n4 = false) {
  if (!n4 && !ue(e2) && !Array.isArray(e2)) return t4;
  if (Array.isArray(t4)) for (let n5 = 0; n5 < t4.length; n5++) e2[n5] = he(e2[n5], t4[n5]);
  else if (ue(t4)) for (const n5 in t4) e2[n5] = he(e2[n5], t4[n5]);
  return e2;
}
function de(e2, t4) {
  Object.defineProperty(e2, "toString", { value: t4 });
}
var pe = class {
  constructor(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(e2) {
    if (e2 === this._cGroup) return this._cIndex;
    let t4 = this._cIndex;
    if (e2 > this._cGroup) for (let n4 = this._cGroup; n4 < e2; n4++) t4 += this.groupSizes[n4];
    else for (let n4 = this._cGroup - 1; n4 >= e2; n4--) t4 -= this.groupSizes[n4];
    return this._cGroup = e2, this._cIndex = t4, t4;
  }
  insertRules(e2, t4) {
    if (e2 >= this.groupSizes.length) {
      const t5 = this.groupSizes, n5 = t5.length;
      let o3 = n5;
      for (; e2 >= o3; ) if (o3 <<= 1, o3 < 0) throw v(16, `${e2}`);
      this.groupSizes = new Uint32Array(o3), this.groupSizes.set(t5), this.length = o3;
      for (let e3 = n5; e3 < o3; e3++) this.groupSizes[e3] = 0;
    }
    let n4 = this.indexOfGroup(e2 + 1), o2 = 0;
    for (let s3 = 0, r3 = t4.length; s3 < r3; s3++) this.tag.insertRule(n4, t4[s3]) && (this.groupSizes[e2]++, n4++, o2++);
    o2 > 0 && this._cGroup > e2 && (this._cIndex += o2);
  }
  clearGroup(e2) {
    if (e2 < this.length) {
      const t4 = this.groupSizes[e2], n4 = this.indexOfGroup(e2), o2 = n4 + t4;
      this.groupSizes[e2] = 0;
      for (let e3 = n4; e3 < o2; e3++) this.tag.deleteRule(n4);
      t4 > 0 && this._cGroup > e2 && (this._cIndex -= t4);
    }
  }
  getGroup(e2) {
    let t4 = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2]) return t4;
    const n4 = this.groupSizes[e2], o2 = this.indexOfGroup(e2), s3 = o2 + n4;
    for (let e3 = o2; e3 < s3; e3++) t4 += this.tag.getRule(e3) + h;
    return t4;
  }
};
var fe = `style[${c}][${l2}="${u}"]`;
var me = new RegExp(`^${c}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`);
var ye = (e2) => "undefined" != typeof ShadowRoot && e2 instanceof ShadowRoot || "host" in e2 && 11 === e2.nodeType;
var ge = (e2) => {
  if (!e2) return document;
  if (ye(e2)) return e2;
  if ("getRootNode" in e2) {
    const t4 = e2.getRootNode();
    if (ye(t4)) return t4;
  }
  return document;
};
var ve = (e2, t4, n4) => {
  const o2 = n4.split(",");
  let s3;
  for (let n5 = 0, r3 = o2.length; n5 < r3; n5++) (s3 = o2[n5]) && e2.registerName(t4, s3);
};
var Se = (e2, t4) => {
  var n4;
  const o2 = (null !== (n4 = t4.textContent) && void 0 !== n4 ? n4 : "").split(h), s3 = [];
  for (let t5 = 0, n5 = o2.length; t5 < n5; t5++) {
    const n6 = o2[t5].trim();
    if (!n6) continue;
    const r3 = n6.match(me);
    if (r3) {
      const t6 = 0 | parseInt(r3[1], 10), n7 = r3[2];
      0 !== t6 && (E(n7, t6), ve(e2, n7, r3[3]), e2.getTag().insertRules(t6, s3)), s3.length = 0;
    } else s3.push(n6);
  }
};
var be = (e2) => {
  const t4 = ge(e2.options.target).querySelectorAll(fe);
  for (let n4 = 0, o2 = t4.length; n4 < o2; n4++) {
    const o3 = t4[n4];
    o3 && o3.getAttribute(c) !== a2 && (Se(e2, o3), o3.parentNode && o3.parentNode.removeChild(o3));
  }
};
var we = false;
function Ne() {
  if (false !== we) return we;
  if ("undefined" != typeof document) {
    const e2 = document.head.querySelector('meta[property="csp-nonce"]');
    if (e2) return we = e2.nonce || e2.getAttribute("content") || void 0;
    const t4 = document.head.querySelector('meta[name="sc-nonce"]');
    if (t4) return we = t4.getAttribute("content") || void 0;
  }
  return we = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
var Ce = (e2, t4) => {
  const n4 = document.head, o2 = e2 || n4, s3 = document.createElement("style"), r3 = ((e3) => {
    const t5 = Array.from(e3.querySelectorAll(`style[${c}]`));
    return t5[t5.length - 1];
  })(o2), i4 = void 0 !== r3 ? r3.nextSibling : null;
  s3.setAttribute(c, a2), s3.setAttribute(l2, u);
  const h2 = t4 || Ne();
  return h2 && s3.setAttribute("nonce", h2), o2.insertBefore(s3, i4), s3;
};
var Oe = class {
  constructor(e2, t4) {
    this.element = Ce(e2, t4), this.element.appendChild(document.createTextNode("")), this.sheet = ((e3) => {
      var t5;
      if (e3.sheet) return e3.sheet;
      const n4 = null !== (t5 = e3.getRootNode().styleSheets) && void 0 !== t5 ? t5 : document.styleSheets;
      for (let t6 = 0, o2 = n4.length; t6 < o2; t6++) {
        const o3 = n4[t6];
        if (o3.ownerNode === e3) return o3;
      }
      throw v(17);
    })(this.element), this.length = 0;
  }
  insertRule(e2, t4) {
    try {
      return this.sheet.insertRule(t4, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }
  deleteRule(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }
  getRule(e2) {
    const t4 = this.sheet.cssRules[e2];
    return t4 && t4.cssText ? t4.cssText : "";
  }
};
var Ee = class {
  constructor(e2, t4) {
    this.element = Ce(e2, t4), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(e2, t4) {
    if (e2 <= this.length && e2 >= 0) {
      const n4 = document.createTextNode(t4);
      return this.element.insertBefore(n4, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }
  deleteRule(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }
  getRule(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }
};
var Ae = d;
var Pe = { isServer: !d, useCSSOMInjection: !f };
var _e = class __e {
  static registerId(e2) {
    return C(e2);
  }
  constructor(e2 = $, t4 = {}, n4) {
    this.options = Object.assign(Object.assign({}, Pe), e2), this.gs = t4, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n4), this.server = !!e2.isServer, !this.server && d && Ae && (Ae = false, be(this)), de(this, () => ((e3) => {
      const t5 = e3.getTag(), { length: n5 } = t5;
      let o2 = "";
      for (let s3 = 0; s3 < n5; s3++) {
        const n6 = O(s3);
        if (void 0 === n6) continue;
        const r3 = e3.names.get(n6);
        if (void 0 === r3 || !r3.size) continue;
        const i4 = t5.getGroup(s3);
        if (0 === i4.length) continue;
        const a4 = c + ".g" + s3 + '[id="' + n6 + '"]';
        let l4 = "";
        for (const e4 of r3) e4.length > 0 && (l4 += e4 + ",");
        o2 += i4 + a4 + '{content:"' + l4 + '"}' + h;
      }
      return o2;
    })(this));
  }
  rehydrate() {
    !this.server && d && be(this);
  }
  reconstructWithOptions(e2, t4 = true) {
    const n4 = new __e(Object.assign(Object.assign({}, this.options), e2), this.gs, t4 && this.names || void 0);
    return n4.keyframeIds = new Set(this.keyframeIds), !this.server && d && e2.target !== this.options.target && ge(this.options.target) !== ge(e2.target) && be(n4), n4;
  }
  allocateGSInstance(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e2 = (({ useCSSOMInjection: e3, target: t4, nonce: n4 }) => e3 ? new Oe(t4, n4) : new Ee(t4, n4))(this.options), new pe(e2)));
    var e2;
  }
  hasNameForId(e2, t4) {
    var n4, o2;
    return null !== (o2 = null === (n4 = this.names.get(e2)) || void 0 === n4 ? void 0 : n4.has(t4)) && void 0 !== o2 && o2;
  }
  registerName(e2, t4) {
    C(e2), e2.startsWith(m) && this.keyframeIds.add(e2);
    const n4 = this.names.get(e2);
    n4 ? n4.add(t4) : this.names.set(e2, /* @__PURE__ */ new Set([t4]));
  }
  insertRules(e2, t4, n4) {
    this.registerName(e2, t4), this.getTag().insertRules(C(e2), n4);
  }
  clearNames(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }
  clearRules(e2) {
    this.getTag().clearGroup(C(e2)), this.clearNames(e2);
  }
  clearTag() {
    this.tag = void 0;
  }
};
var Ie = /* @__PURE__ */ new WeakSet();
var $e = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Re(e2, t4) {
  return null == t4 || "boolean" == typeof t4 || "" === t4 ? "" : "number" != typeof t4 || 0 === t4 || e2 in $e || e2.startsWith("--") ? String(t4).trim() : t4 + "px";
}
var je = 47;
function xe(e2) {
  if (45 === e2.charCodeAt(0) && 45 === e2.charCodeAt(1)) return e2;
  let t4 = "";
  for (let n4 = 0; n4 < e2.length; n4++) {
    const o2 = e2.charCodeAt(n4);
    t4 += o2 >= 65 && o2 <= 90 ? "-" + String.fromCharCode(o2 + 32) : e2[n4];
  }
  return t4.startsWith("ms-") ? "-" + t4 : t4;
}
var Te = Symbol.for("sc-keyframes");
function ke(e2) {
  return "object" == typeof e2 && null !== e2 && Te in e2;
}
function De(e2) {
  return re(e2) && !(e2.prototype && e2.prototype.isReactComponent);
}
var Ve = (e2) => null == e2 || false === e2 || "" === e2;
var Me = Symbol.for("react.client.reference");
function Ge(e2) {
  return e2.$$typeof === Me;
}
function Fe(e2) {
  const t4 = e2.$$id, n4 = (t4 && t4.includes("#") ? t4.split("#").pop() : t4) || e2.name || "unknown";
  console.warn(`Interpolating a client component (${n4}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function ze(e2, t4) {
  for (const n4 in e2) {
    const o2 = e2[n4];
    e2.hasOwnProperty(n4) && !Ve(o2) && (Array.isArray(o2) && Ie.has(o2) || re(o2) ? t4.push(xe(n4) + ":", o2, ";") : ue(o2) ? (t4.push(n4 + " {"), ze(o2, t4), t4.push("}")) : t4.push(xe(n4) + ": " + Re(n4, o2) + ";"));
  }
}
function We(e2, t4, n4, o2, s3 = []) {
  if (Ve(e2)) return s3;
  const r3 = typeof e2;
  if ("string" === r3) return s3.push(e2), s3;
  if ("function" === r3) {
    if (Ge(e2)) return Fe(e2), s3;
    if (De(e2) && t4) {
      const r4 = e2(t4);
      return "object" != typeof r4 || Array.isArray(r4) || ke(r4) || ue(r4) || null === r4 || console.error(`${W(e2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), We(r4, t4, n4, o2, s3);
    }
    return s3.push(e2), s3;
  }
  if (Array.isArray(e2)) {
    for (let r4 = 0; r4 < e2.length; r4++) We(e2[r4], t4, n4, o2, s3);
    return s3;
  }
  return ce(e2) ? (s3.push(`.${e2.styledComponentId}`), s3) : ke(e2) ? (n4 ? (e2.inject(n4, o2), s3.push(e2.getName(o2))) : s3.push(e2), s3) : Ge(e2) ? (Fe(e2), s3) : ue(e2) ? e2.toString !== Object.prototype.toString ? (s3.push(e2.toString()), s3) : (ze(e2, s3), s3) : (s3.push(e2.toString()), s3);
}
var Le = F(u);
var Be = class {
  constructor(e2, t4, n4) {
    this.rules = e2, this.componentId = t4, this.baseHash = G(Le, t4), this.baseStyle = n4, _e.registerId(t4);
  }
  generateAndInjectStyles(e2, t4, n4) {
    let o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t4, n4) : "";
    {
      let s3 = "";
      for (let o3 = 0; o3 < this.rules.length; o3++) {
        const r3 = this.rules[o3];
        if ("string" == typeof r3) s3 += r3;
        else if (r3) if (De(r3)) {
          const o4 = r3(e2);
          "string" == typeof o4 ? s3 += o4 : null != o4 && false !== o4 && ("object" != typeof o4 || Array.isArray(o4) || ke(o4) || ue(o4) || console.error(`${W(r3)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), s3 += le(We(o4, e2, t4, n4)));
        } else s3 += le(We(r3, e2, t4, n4));
      }
      if (s3) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const e3 = n4.hash ? n4.hash + s3 : s3;
        let r3 = this.dynamicNameCache.get(e3);
        if (!r3) {
          if (r3 = V(G(G(this.baseHash, n4.hash), s3) >>> 0), this.dynamicNameCache.size >= 200) {
            const e4 = this.dynamicNameCache.keys().next().value;
            void 0 !== e4 && this.dynamicNameCache.delete(e4);
          }
          this.dynamicNameCache.set(e3, r3);
        }
        if (!t4.hasNameForId(this.componentId, r3)) {
          const e4 = n4(s3, "." + r3, void 0, this.componentId);
          t4.insertRules(this.componentId, r3, e4);
        }
        o2 = ae(o2, r3);
      }
    }
    return o2;
  }
};
var qe = /&/g;
function He(e2, t4) {
  let n4 = 0;
  for (; --t4 >= 0 && 92 === e2.charCodeAt(t4); ) n4++;
  return !(1 & ~n4);
}
function Ye(e2) {
  const t4 = e2.length;
  let n4 = "", o2 = 0, s3 = 0, r3 = 0, i4 = false, c3 = false;
  for (let a4 = 0; a4 < t4; a4++) {
    const l4 = e2.charCodeAt(a4);
    if (0 !== r3 || i4 || l4 !== je || 42 !== e2.charCodeAt(a4 + 1)) if (i4) 42 === l4 && e2.charCodeAt(a4 + 1) === je && (i4 = false, a4++);
    else if (34 !== l4 && 39 !== l4 || He(e2, a4)) {
      if (0 === r3) if (123 === l4) s3++;
      else if (125 === l4) {
        if (s3--, s3 < 0) {
          c3 = true;
          let n5 = a4 + 1;
          for (; n5 < t4; ) {
            const t5 = e2.charCodeAt(n5);
            if (59 === t5 || 10 === t5) break;
            n5++;
          }
          n5 < t4 && 59 === e2.charCodeAt(n5) && n5++, s3 = 0, a4 = n5 - 1, o2 = n5;
          continue;
        }
        0 === s3 && (n4 += e2.substring(o2, a4 + 1), o2 = a4 + 1);
      } else 59 === l4 && 0 === s3 && (n4 += e2.substring(o2, a4 + 1), o2 = a4 + 1);
    } else 0 === r3 ? r3 = l4 : r3 === l4 && (r3 = 0);
    else i4 = true, a4++;
  }
  return c3 || 0 !== s3 || 0 !== r3 ? (o2 < t4 && 0 === s3 && 0 === r3 && (n4 += e2.substring(o2)), n4) : e2;
}
function Ue(e2, t4) {
  const n4 = t4 + " ", o2 = "," + n4;
  for (let s3 = 0; s3 < e2.length; s3++) {
    const r3 = e2[s3];
    if ("rule" === r3.type) {
      r3.value = (n4 + r3.value).replaceAll(",", o2);
      const e3 = r3.props, t5 = [];
      for (let o3 = 0; o3 < e3.length; o3++) t5[o3] = n4 + e3[o3];
      r3.props = t5;
    }
    Array.isArray(r3.children) && "@keyframes" !== r3.type && Ue(r3.children, t4);
  }
  return e2;
}
function Je({ options: e2 = $, plugins: t4 = I } = $) {
  let n4, s3, r3;
  const i4 = (e3, t5, o2) => o2.startsWith(s3) && o2.endsWith(s3) && o2.replaceAll(s3, "").length > 0 ? `.${n4}` : e3, c3 = t4.slice();
  c3.push((e3) => {
    e3.type === RULESET && e3.value.includes("&") && (r3 || (r3 = new RegExp(`\\${s3}\\b`, "g")), e3.props[0] = e3.props[0].replace(qe, s3).replace(r3, i4));
  }), e2.prefix && c3.push(prefixer), c3.push(stringify);
  let a4 = [];
  const l4 = middleware(c3.concat(rulesheet((e3) => a4.push(e3)))), u2 = (t5, i5 = "", c4 = "", u3 = "&") => {
    n4 = u3, s3 = i5, r3 = void 0;
    const h3 = (function(e3) {
      const t6 = -1 !== e3.indexOf("//"), n5 = -1 !== e3.indexOf("}");
      if (!t6 && !n5) return e3;
      if (!t6) return Ye(e3);
      const o2 = e3.length;
      let s4 = "", r4 = 0, i6 = 0, c5 = 0, a5 = 0, l5 = 0, u4 = false;
      for (; i6 < o2; ) {
        const t7 = e3.charCodeAt(i6);
        if (34 !== t7 && 39 !== t7 || He(e3, i6)) if (0 === c5) if (t7 === je && i6 + 1 < o2 && 42 === e3.charCodeAt(i6 + 1)) {
          for (i6 += 2; i6 + 1 < o2 && (42 !== e3.charCodeAt(i6) || e3.charCodeAt(i6 + 1) !== je); ) i6++;
          i6 += 2;
        } else if (40 !== t7) if (41 !== t7) if (a5 > 0) i6++;
        else if (42 === t7 && i6 + 1 < o2 && e3.charCodeAt(i6 + 1) === je) s4 += e3.substring(r4, i6), i6 += 2, r4 = i6, u4 = true;
        else if (t7 === je && i6 + 1 < o2 && e3.charCodeAt(i6 + 1) === je) {
          for (s4 += e3.substring(r4, i6); i6 < o2 && 10 !== e3.charCodeAt(i6); ) i6++;
          r4 = i6, u4 = true;
        } else 123 === t7 ? l5++ : 125 === t7 && l5--, i6++;
        else a5 > 0 && a5--, i6++;
        else a5++, i6++;
        else i6++;
        else 0 === c5 ? c5 = t7 : c5 === t7 && (c5 = 0), i6++;
      }
      return u4 ? (r4 < o2 && (s4 += e3.substring(r4)), 0 === l5 ? s4 : Ye(s4)) : 0 === l5 ? e3 : Ye(e3);
    })(t5);
    let d3 = compile(c4 || i5 ? c4 + " " + i5 + " { " + h3 + " }" : h3);
    return e2.namespace && (d3 = Ue(d3, e2.namespace)), a4 = [], serialize(d3, l4), a4;
  }, h2 = e2;
  let d2 = M;
  for (let e3 = 0; e3 < t4.length; e3++) t4[e3].name || v(15), d2 = G(d2, t4[e3].name);
  return (null == h2 ? void 0 : h2.namespace) && (d2 = G(d2, h2.namespace)), (null == h2 ? void 0 : h2.prefix) && (d2 = G(d2, "p")), u2.hash = d2 !== M ? d2.toString() : "", u2;
}
var Xe = new _e();
var Ke = Je();
var Qe = import_react2.default.createContext({ shouldForwardProp: void 0, styleSheet: Xe, stylis: Ke, stylisPlugins: void 0 });
var Ze = Qe.Consumer;
function et() {
  return import_react2.default.useContext(Qe);
}
var nt = import_react2.default.createContext(void 0);
var ot = nt.Consumer;
var it = Object.prototype.hasOwnProperty;
var ct = {};
function at(e2, t4) {
  const n4 = "string" != typeof e2 ? "sc" : T(e2);
  ct[n4] = (ct[n4] || 0) + 1;
  const o2 = n4 + "-" + z(u + n4 + ct[n4]);
  return t4 ? t4 + "-" + o2 : o2;
}
var lt;
function ut(o2, s3, r3) {
  const i4 = ce(o2), c3 = o2, a4 = !L(o2), { attrs: l4 = I, componentId: u2 = at(s3.displayName, s3.parentComponentId), displayName: h2 = B(o2) } = s3, d2 = s3.displayName && s3.componentId ? T(s3.displayName) + "-" + s3.componentId : s3.componentId || u2, p2 = i4 && c3.attrs ? c3.attrs.concat(l4).filter(Boolean) : l4;
  let { shouldForwardProp: f2 } = s3;
  if (i4 && c3.shouldForwardProp) {
    const e2 = c3.shouldForwardProp;
    if (s3.shouldForwardProp) {
      const t4 = s3.shouldForwardProp;
      f2 = (n4, o3) => e2(n4, o3) && t4(n4, o3);
    } else f2 = e2;
  }
  const m2 = new Be(r3, d2, i4 ? c3.componentStyle : void 0);
  function y2(o3, s4) {
    return (function(o4, s5, r4) {
      const { attrs: i5, componentStyle: c4, defaultProps: a5, foldedComponentIds: l5, styledComponentId: u3, target: h3 } = o4, d3 = import_react2.default.useContext(nt), p3 = et(), f3 = o4.shouldForwardProp || p3.shouldForwardProp;
      import_react2.default.useDebugValue && import_react2.default.useDebugValue(u3);
      const m3 = R(s5, d3, a5) || $;
      let y3, g3;
      {
        const e2 = import_react2.default.useRef(null), n4 = e2.current;
        if (null !== n4 && n4[1] === m3 && n4[2] === p3.styleSheet && n4[3] === p3.stylis && n4[7] === c4 && (function(e3, t4, n5) {
          const o5 = e3, s6 = t4;
          let r5 = 0;
          for (const e4 in s6) if (it.call(s6, e4) && (r5++, o5[e4] !== s6[e4])) return false;
          return r5 === n5;
        })(n4[0], s5, n4[4])) y3 = n4[5], g3 = n4[6];
        else {
          y3 = (function(e3, t5, n5) {
            const o5 = Object.assign(Object.assign({}, t5), { className: void 0, theme: n5 }), s6 = e3.length > 1;
            for (let n6 = 0; n6 < e3.length; n6++) {
              const r5 = e3[n6], i6 = re(r5) ? r5(s6 ? Object.assign({}, o5) : o5) : r5;
              for (const e4 in i6) "className" === e4 ? o5.className = ae(o5.className, i6[e4]) : "style" === e4 ? o5.style = Object.assign(Object.assign({}, o5.style), i6[e4]) : e4 in t5 && void 0 === t5[e4] || (o5[e4] = i6[e4]);
            }
            return "className" in t5 && "string" == typeof t5.className && (o5.className = ae(o5.className, t5.className)), o5;
          })(i5, s5, m3), g3 = c4.generateAndInjectStyles(y3, p3.styleSheet, p3.stylis);
          let t4 = 0;
          for (const e3 in s5) it.call(s5, e3) && t4++;
          e2.current = [s5, m3, p3.styleSheet, p3.stylis, t4, y3, g3, c4];
        }
      }
      import_react2.default.useDebugValue && import_react2.default.useDebugValue(g3), o4.warnTooManyClasses && o4.warnTooManyClasses(g3);
      const v2 = y3.as || h3, S2 = (function(t4, n4, o5, s6) {
        const r5 = {};
        for (const i6 in t4) void 0 === t4[i6] || "$" === i6[0] || "as" === i6 || "theme" === i6 && t4.theme === o5 || ("forwardedAs" === i6 ? r5.as = t4.forwardedAs : s6 && !s6(i6, n4) || (r5[i6] = t4[i6], s6 || false || isPropValid(i6) || (lt || (lt = /* @__PURE__ */ new Set())).has(i6) || !L(n4) || n4.includes("-") || (lt.add(i6), console.warn(`styled-components: it looks like an unknown prop "${i6}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return r5;
      })(y3, v2, m3, f3);
      let b2 = ae(l5, u3);
      return g3 && (b2 += " " + g3), y3.className && (b2 += " " + y3.className), S2[L(v2) && v2.includes("-") ? "class" : "className"] = b2, r4 && (S2.ref = r4), (0, import_react2.createElement)(v2, S2);
    })(g2, o3, s4);
  }
  y2.displayName = h2;
  let g2 = import_react2.default.forwardRef(y2);
  return g2.attrs = p2, g2.componentStyle = m2, g2.displayName = h2, g2.shouldForwardProp = f2, g2.foldedComponentIds = i4 ? ae(c3.foldedComponentIds, c3.styledComponentId) : "", g2.styledComponentId = d2, g2.target = i4 ? c3.target : o2, Object.defineProperty(g2, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(e2) {
    this._foldedDefaultProps = i4 ? (function(e3, ...t4) {
      for (const n4 of t4) he(e3, n4, true);
      return e3;
    })({}, c3.defaultProps, e2) : e2;
  } }), _(h2, d2), g2.warnTooManyClasses = /* @__PURE__ */ ((e2, t4) => {
    let n4 = {}, o3 = false;
    return (s4) => {
      !o3 && (n4[s4] = true, Object.keys(n4).length >= 200) && (console.warn(`Over 200 classes were generated for component ${e2}${t4 ? ` with the id of "${t4}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), o3 = true, n4 = {});
    };
  })(h2, d2), de(g2, () => `.${g2.styledComponentId}`), a4 && se(g2, o2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), g2;
}
var ht = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function dt(e2, t4) {
  const n4 = [e2[0]];
  for (let o2 = 0, s3 = t4.length; o2 < s3; o2 += 1) n4.push(t4[o2], e2[o2 + 1]);
  return n4;
}
var pt = (e2) => (Ie.add(e2), e2);
function ft(e2, ...t4) {
  if (re(e2) || ue(e2)) return pt(We(dt(I, [e2, ...t4])));
  const n4 = e2;
  return 0 === t4.length && 1 === n4.length && "string" == typeof n4[0] ? We(n4) : pt(We(dt(n4, t4)));
}
function mt(e2, t4, n4 = $) {
  if (!t4) throw v(1, t4);
  const o2 = (o3, ...s3) => e2(t4, n4, ft(o3, ...s3));
  return o2.attrs = (o3) => mt(e2, t4, Object.assign(Object.assign({}, n4), { attrs: Array.prototype.concat(n4.attrs, o3).filter(Boolean) })), o2.withConfig = (o3) => mt(e2, t4, Object.assign(Object.assign({}, n4), o3)), o2;
}
var yt = (e2) => mt(ut, e2);
var gt = yt;
ht.forEach((e2) => {
  gt[e2] = yt(e2);
});
var vt = class {
  constructor(e2, t4) {
    this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e2, this.componentId = t4, this.isStatic = (function(e3) {
      for (let t5 = 0; t5 < e3.length; t5 += 1) {
        const n4 = e3[t5];
        if (re(n4) && !ce(n4)) return false;
      }
      return true;
    })(e2), _e.registerId(this.componentId);
  }
  removeStyles(e2, t4) {
    this.instanceRules.delete(e2), this.rebuildGroup(t4);
  }
  renderStyles(e2, t4, n4, o2) {
    const s3 = this.componentId;
    if (this.isStatic) {
      if (n4.hasNameForId(s3, s3 + e2)) this.instanceRules.has(e2) || this.computeRules(e2, t4, n4, o2);
      else {
        const r4 = this.computeRules(e2, t4, n4, o2);
        n4.insertRules(s3, r4.name, r4.rules);
      }
      return;
    }
    const r3 = this.instanceRules.get(e2);
    if (this.computeRules(e2, t4, n4, o2), !n4.server && r3) {
      const t5 = r3.rules, n5 = this.instanceRules.get(e2).rules;
      if (t5.length === n5.length) {
        let e3 = true;
        for (let o3 = 0; o3 < t5.length; o3++) if (t5[o3] !== n5[o3]) {
          e3 = false;
          break;
        }
        if (e3) return;
      }
    }
    this.rebuildGroup(n4);
  }
  computeRules(e2, t4, n4, o2) {
    const s3 = le(We(this.rules, t4, n4, o2)), r3 = { name: this.componentId + e2, rules: o2(s3, "") };
    return this.instanceRules.set(e2, r3), r3;
  }
  rebuildGroup(e2) {
    const t4 = this.componentId;
    e2.clearRules(t4);
    for (const n4 of this.instanceRules.values()) e2.insertRules(t4, n4.name, n4.rules);
  }
};
function St(e2, ...n4) {
  const o2 = ft(e2, ...n4), s3 = `sc-global-${z(JSON.stringify(o2))}`, r3 = new vt(o2, s3);
  _(s3);
  const i4 = (e3) => {
    const n5 = et(), i5 = import_react2.default.useContext(nt);
    let a4;
    {
      const e4 = import_react2.default.useRef(null);
      null === e4.current && (e4.current = n5.styleSheet.allocateGSInstance(s3)), a4 = e4.current;
    }
    import_react2.default.Children.count(e3.children) && console.warn(`The global style component ${s3} was given child JSX. createGlobalStyle does not render children.`), o2.some((e4) => "string" == typeof e4 && -1 !== e4.indexOf("@import")) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), n5.styleSheet.server && c3(a4, e3, n5.styleSheet, i5, n5.stylis);
    {
      const o3 = r3.isStatic ? [a4, n5.styleSheet, r3] : [a4, e3, n5.styleSheet, i5, n5.stylis, r3], l4 = import_react2.default.useRef(r3);
      import_react2.default.useLayoutEffect(() => {
        n5.styleSheet.server || (l4.current !== r3 && (n5.styleSheet.clearRules(s3), l4.current = r3), c3(a4, e3, n5.styleSheet, i5, n5.stylis));
      }, o3), import_react2.default.useLayoutEffect(() => () => {
        n5.styleSheet.server || r3.removeStyles(a4, n5.styleSheet);
      }, [a4, n5.styleSheet, r3]);
    }
    return n5.styleSheet.server && r3.instanceRules.delete(a4), null;
  };
  function c3(e3, t4, n5, o3, s4) {
    if (r3.isStatic) r3.renderStyles(e3, y, n5, s4);
    else {
      const c4 = Object.assign(Object.assign({}, t4), { theme: R(t4, o3, i4.defaultProps) });
      r3.renderStyles(e3, c4, n5, s4);
    }
  }
  return import_react2.default.memo(i4);
}
var Ct;
var Ot = class {
  constructor(e2, t4) {
    this[Ct] = true, this.inject = (e3, t5 = Ke) => {
      const n4 = this.getName(t5);
      if (!e3.hasNameForId(this.id, n4)) {
        const o2 = t5(this.rules, n4, "@keyframes");
        e3.insertRules(this.id, n4, o2);
      }
    }, this.name = e2, this.id = m + e2, this.rules = t4, C(this.id), de(this, () => {
      throw v(12, String(this.name));
    });
  }
  getName(e2 = Ke) {
    return e2.hash ? this.name + V(+e2.hash >>> 0) : this.name;
  }
};
function Et(e2, ...t4) {
  "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  const n4 = le(ft(e2, ...t4)), o2 = z(n4);
  return new Ot(o2, n4);
}
Ct = Te;
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://styled-components.com/docs/basics#react-native");
var It = `__sc-${c}__`;
"undefined" != typeof window && (window[It] || (window[It] = 0), 1 === window[It] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[It] += 1);
var Rt = `:not(style[${c}])`;
var jt = `style[${c}]`;

// node_modules/@privy-io/react-auth/dist/esm/Loader-ekqMW2w-.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var i3 = ({ success: e2, fail: i4 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(s2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t3, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c2, { className: e2 ? "success" : i4 ? "fail" : "" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t3, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a3, { className: e2 ? "success" : i4 ? "fail" : "" }) })] });
var t3 = gt.span`
  && {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;
var s2 = gt.span`
  position: relative;
  width: 82px;
  height: 82px;
  display: inline-block;
`;
var a3 = gt.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${(o2) => o2.color ?? "var(--privy-color-icon-subtle)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &&&.success {
    border-color: var(--privy-color-icon-success);
    border-bottom-color: var(--privy-color-icon-success);
  }

  &&&.fail {
    border-color: var(--privy-color-icon-error);
    border-bottom-color: var(--privy-color-icon-error);
  }
`;
var c2 = gt(a3)`
  && {
    border-bottom-color: ${(o2) => o2.color ?? "var(--privy-color-border-default)"};
    border-color: ${(o2) => o2.color ?? "var(--privy-color-border-default)"};
    animation: none;
    opacity: 0.5;
  }
`;
var l3 = (r3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n3, { color: r3.color || "var(--privy-color-foreground-3)" });
var n3 = gt(a3)`
  && {
    height: 1rem;
    width: 1rem;
    margin: 2px 0;
    border-width: 1.5px;

    /* Override default Loader to match button transitions */
    transition: border-color 200ms ease;
  }
`;

export {
  i,
  a,
  n,
  s,
  l,
  ft,
  gt,
  St,
  Et,
  i3 as i2,
  a3 as a2,
  c2 as c,
  l3 as l2
};
