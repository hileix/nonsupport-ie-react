"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function isIE() {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return true;
  }

  return false;
} // nonsupport IE component


var NonsupportIE = function NonsupportIE(props) {
  var _props$devMode = props.devMode,
      devMode = _props$devMode === void 0 ? false : _props$devMode,
      reminder = props.reminder;
  var isie = isIE();

  if (devMode) {
    isie = true;
  }

  if (isie) {
    return _react.default.createElement(_react.Fragment, null, reminder || 'app is not support IE');
  }

  return _react.default.createElement(_react.Fragment, null, props.children);
};

var _default = NonsupportIE;
exports.default = _default;
