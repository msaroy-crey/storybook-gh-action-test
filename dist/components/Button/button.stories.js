"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.js"));

var _addonKnobs = require("@storybook/addon-knobs");

var _deathrun_medium = _interopRequireDefault(require("../../../.storybook/img/deathrun_medium.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "'Button component', decorators: [withKnobs]}"
};
exports["default"] = _default;

var button = function button() {
  var message = (0, _addonKnobs.text)('Text', 'Click here now!');
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: _deathrun_medium["default"]
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    message: message
  }, "Hello"));
};

exports.button = button;