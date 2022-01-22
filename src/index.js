const express = require("express");
const cors = require("cors");

// application configuration keys
const { PORT } = require("./config/config");

// application modules
const httpLogger = require("./config/http_logger");
const logger = require("./config/logger");
const db = require("./db/models").sequelize;

// router
const router = require("./route");

// express app
const app = express();
const port = PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(httpLogger);
app.use(cors());

// end points
app.use("/", router);

// Errors
app.use((req, res) => {
  res.status(404).json({
    error_code: 400,
    message: "404: Endpoint Not Found"
  });
});

if (app.get("env") === "development") {
  app.use((error, _req, res) => {
    logger.error(error.message);
    res.status(500).json({ error, message: error.message, error_code: 500 });
  });
} else {
  app.use((error, _req, res) => {
    res.statusCode = 500;
    logger.error(error);
    res.status(500).json({
      message: "An error occurred, try in a few minutes time",
      error_code: 500
    });
  });
}

// only serve when the database is connected
db.authenticate()
  .then(() => {
    app.listen(port, () => {
      logger.info(`server started on port ${port}`);
      db.sync();
    });
  })
  .catch((error) => logger.error(`Database Error: ${error}`));
