"use strict";

var _reactWindow = require("react-window");
var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Header() {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    expanded = _React$useState2[0],
    setExpanded = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    toggled = _React$useState4[0],
    setToggled = _React$useState4[1];
  var onClick = function onClick() {
    if (!toggled) {
      setToggled(true);
    }
    setExpanded(!expanded);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "header__logo",
    "aria-label": "\u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u043E\u043C"
  }), /*#__PURE__*/React.createElement("button", {
    className: "header__menu",
    "aria-expanded": expanded ? 'true' : 'false',
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "header__menu-text a11y-hidden"
  }, expanded ? 'Закрыть меню' : 'Открыть меню')), /*#__PURE__*/React.createElement("ul", {
    className: 'header__links' + (expanded ? ' header__links_opened' : '') + (toggled ? ' header__links-toggled' : '')
  }, /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link header__link_current",
    href: "/",
    "aria-current": "page"
  }, "\u0421\u0432\u043E\u0434\u043A\u0430")), /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link",
    href: "/devices"
  }, "\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430")), /*#__PURE__*/React.createElement("li", {
    className: "header__item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header__link",
    href: "/scripts"
  }, "\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438"))));
}
var Event = React.memo(function EventComponent(props) {
  var ref = React.useRef();
  var onSize = props.onSize;
  React.useEffect(function () {
    var width = ref.current.offsetWidth;
    var height = ref.current.offsetHeight;
    if (onSize) {
      onSize({
        width: width,
        height: height
      });
    }
  });
  return /*#__PURE__*/React.createElement("li", {
    ref: ref,
    className: 'event' + (props.slim ? ' event_slim' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "event__button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "event__icon event__icon_".concat(props.icon),
    role: "img",
    "aria-label": props.iconLabel
  }), /*#__PURE__*/React.createElement("h4", {
    className: "event__title"
  }, props.title), props.subtitle && /*#__PURE__*/React.createElement("span", {
    className: "event__subtitle"
  }, props.subtitle)));
});
var TABS = {
  "all": {
    "title": "Все",
    "items": [{
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }]
  },
  "kitchen": {
    "title": "Кухня",
    "items": [{
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Yeelight LED Smart Bulb",
      "subtitle": "Включено"
    }, {
      "icon": "temp",
      "iconLabel": "Температура",
      "title": "Elgato Eve Degree Connected",
      "subtitle": "Выключено до 17:00"
    }]
  },
  "hall": {
    "title": "Зал",
    "items": [{
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Выключено"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Выключено"
    }]
  },
  "lights": {
    "title": "Лампочки",
    "items": [{
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "D-Link Omna 180 Cam",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "LIFX Mini Day & Dusk A60 E27",
      "subtitle": "Включится в 17:00"
    }, {
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }, {
      "icon": "light",
      "iconLabel": "Освещение",
      "title": "Philips Zhirui",
      "subtitle": "Включено"
    }]
  },
  "cameras": {
    "title": "Камеры",
    "items": [{
      "icon": "light2",
      "iconLabel": "Освещение",
      "title": "Xiaomi Mi Air Purifier 2S",
      "subtitle": "Включено"
    }]
  }
};
var TABS_KEYS = Object.keys(TABS);
function Main() {
  var ref = React.useRef();
  var initedRef = React.useRef(false);
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    activeTab = _React$useState6[0],
    setActiveTab = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    hasRightScroll = _React$useState8[0],
    setHasRightScroll = _React$useState8[1];
  React.useEffect(function () {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
    }
  }, [activeTab]);
  var onSelectInput = function onSelectInput(event) {
    setActiveTab(event.target.value);
  };
  var onArrowCLick = function onArrowCLick() {
    var scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden)');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  };
  var renderRow = function renderRow(_ref) {
    var index = _ref.index,
      style = _ref.style,
      data = _ref.data;
    var item = data[index];
    return /*#__PURE__*/React.createElement("div", {
      style: style
    }, /*#__PURE__*/React.createElement(Event, item));
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section main__devices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title-header"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"), /*#__PURE__*/React.createElement("select", {
    className: "section__select",
    defaultValue: "all",
    onInput: onSelectInput
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/React.createElement("option", {
      key: key,
      value: key
    }, TABS[key].title);
  })), /*#__PURE__*/React.createElement("ul", {
    role: "tablist",
    className: "section__tabs"
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/React.createElement("li", {
      key: key,
      role: "tab",
      "aria-selected": key === activeTab ? 'true' : 'false',
      tabIndex: key === activeTab ? '0' : undefined,
      className: 'section__tab' + (key === activeTab ? ' section__tab_active' : ''),
      id: "tab_".concat(key),
      "aria-controls": "panel_".concat(key),
      onClick: function onClick() {
        return setActiveTab(key);
      }
    }, TABS[key].title);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "section__panel-wrapper",
    ref: ref
  }, TABS_KEYS.map(function (key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      role: "tabpanel",
      className: 'section__panel' + (key === activeTab ? '' : ' section__panel_hidden'),
      "aria-hidden": key === activeTab ? 'false' : 'true',
      id: "panel_".concat(key),
      "aria-labelledby": "tab_".concat(key),
      style: {
        height: '400px'
      } // height for react-window
    }, key === activeTab && /*#__PURE__*/React.createElement(_reactVirtualizedAutoSizer["default"], null, function (_ref2) {
      var height = _ref2.height,
        width = _ref2.width;
      return /*#__PURE__*/React.createElement(_reactWindow.FixedSizeList, {
        height: height,
        itemCount: TABS[key].items.length,
        itemSize: 100 // Adjust based on actual Event height
        ,
        width: width,
        itemData: TABS[key].items
      }, renderRow);
    }));
  }), hasRightScroll && /*#__PURE__*/React.createElement("div", {
    className: "section__arrow",
    onClick: onArrowCLick
  }))));
}
document.addEventListener("DOMContentLoaded", function () {
  var root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Main, null)));
});
