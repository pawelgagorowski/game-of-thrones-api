import isNil from 'lodash/isNil';

if (isNil(process.env.NO_ENVFILE)) {
  const dotenv = require('dotenv');

  dotenv.config({ path: '.env' });
}

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASS,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST || "127.0.0.1",
    port: process.env.DEV_DB_PORT || 5432,
    dialect: process.env.DEV_DB_DIALECT || 'postgres'
  }
}
