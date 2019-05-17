"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var pingRoute = function pingRoute(req, res) {
  return res.json({
    result: 'API service is running'
  });
};

var _default = pingRoute;
exports.default = _default;