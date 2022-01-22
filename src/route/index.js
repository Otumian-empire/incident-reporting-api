const Router = require("express").Router();

const Controller = require("../controller");
const joiMiddleware = require("../utils/joi_middleware");
const schemas = require("../utils/joi_schema");

const incidentController = new Controller();

// A POST endpoint that receives the incident report.
Router.post(
  "/",
  joiMiddleware(schemas.createReportRequestBody),
  incidentController.create
);

// A GET endpoint that lists all the incidents.
Router.get("/", incidentController.read);

module.exports = Router;
