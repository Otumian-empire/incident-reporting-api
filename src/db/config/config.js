const {
  DEV_DB_HOST,
  DEV_DB_NAME,
  DEV_DB_PASSWORD,
  DEV_DB_USERNAME,
  DEV_DB_PORT,
  PROD_DB_HOST,
  PROD_DB_NAME,
  PROD_DB_PASSWORD,
  PROD_DB_USERNAME,
  PROD_DB_PORT,
  DIALECT
} = require("../../config/db_constants");

module.exports = {
  development: {
    username: DEV_DB_USERNAME,
    password: DEV_DB_PASSWORD,
    database: DEV_DB_NAME,
    host: DEV_DB_HOST,
    port: DEV_DB_PORT,
    dialect: DIALECT
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: DIALECT
  },
  production: {
    username: PROD_DB_USERNAME,
    password: PROD_DB_PASSWORD,
    database: PROD_DB_NAME,
    host: PROD_DB_HOST,
    port: PROD_DB_PORT,
    dialect: DIALECT,
    ssl: {
      rejectUnauthorized: false,
    }
  }
};
