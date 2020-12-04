"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// /src/components/Button/index.js
var Button = function Button(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Hello world' : _ref$message;
  return /*#__PURE__*/_react["default"].createElement("button", null, message);
};

var _default = Button;
exports["default"] = _default;