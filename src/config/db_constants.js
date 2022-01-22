if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const PG = "postgres";

module.exports = {
  DEV_DB_NAME: process.env.DEV_DB_NAME,
  DEV_DB_USERNAME: process.env.DEV_DB_USERNAME,
  DEV_DB_PASSWORD: process.env.DEV_DB_PASSWORD,
  DEV_DB_HOST: process.env.DEV_DB_HOST,
  DEV_DB_PORT: process.env.DEV_DB_PORT,
  PROD_DB_NAME: process.env.PROD_DB_NAME,
  PROD_DB_USERNAME: process.env.PROD_DB_USERNAME,
  PROD_DB_PASSWORD: process.env.PROD_DB_PASSWORD,
  PROD_DB_HOST: process.env.PROD_DB_HOST,
  PROD_DB_PORT: process.env.PROD_DB_PORT,
  DIALECT: PG,
  MAX_CONNECTION: 5,
  MIN_CONNECTION: 0,
  RETRY: 3000,
  IDLE: 300
};
