const {
  DEV_DB_HOST,
  DEV_DB_NAME,
  DEV_DB_PASSWORD,
  DEV_DB_USERNAME,
  DEV_DB_PORT,
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
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: DIALECT
  }
};
