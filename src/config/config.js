if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.port || 3000,
  WEATHER_API_KEY: process.env.WEATHER_API_KEY
};
