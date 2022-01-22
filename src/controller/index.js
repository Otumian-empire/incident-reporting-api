const axios = require("axios").default;
const logger = require("../config/logger");

const { Incidents } = require("../db/models");
const { WEATHER_API_KEY } = require("../config/config");

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

class Controller {
  async create(req, res) {
    const response = { success: false, message: "An error occurred" };
    const { client_id, incident_desc, city, country } = req.body;

    try {
      const URL = `${BASE_URL}?q=${city}&lang=en&units=metric&appid=${WEATHER_API_KEY}`;

      const weather_report = await axios.get(URL);

      await Incidents.create({
        client_id: Number(client_id),
        incident_desc,
        city,
        country,
        weather_report: weather_report.data
      });

      response.success = true;
      response.message = "Incident reported created successfully";
    } catch (error) {
      logger.error(`Create Incident: ${error}`);
    }

    return res.status(200).json(response);
  }

  async read(_req, res) {
    try {
      const incidentReports = await Incidents.findAll();
      return res.status(200).json({
        incidents: incidentReports,
        success: true
      });
    } catch (error) {
      logger.error(`Find All: ${error}`);
      return res.status(200).json({
        success: false,
        message: "An Error occurred while fetching report"
      });
    }
  }
}

module.exports = Controller;
