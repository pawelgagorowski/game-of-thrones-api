import isNil from 'lodash/isNil';

if (isNil(process.env.NO_ENVFILE)) {
  const dotenv = require('dotenv');

  dotenv.config({ path: '.env' });
}

module.exports = {
  name: 'Game of Thrones API',
  port: process.env.SERVER_PORT,
  logs_path: process.env.LOGS_PATH || 'logs',
  log_level: process.env.LOG_LEVEL || 'ERROR',
};
