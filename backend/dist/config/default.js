"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isNil = _interopRequireDefault(require("lodash/isNil"));

if ((0, _isNil.default)(process.env.NO_ENVFILE)) {
  var dotenv = require('dotenv');

  dotenv.config({
    path: '.env'
  });
}

module.exports = {
  name: 'Game of Thrones API',
  port: process.env.SERVER_PORT,
  logs_path: process.env.LOGS_PATH || 'logs',
  log_level: process.env.LOG_LEVEL || 'ERROR'
};