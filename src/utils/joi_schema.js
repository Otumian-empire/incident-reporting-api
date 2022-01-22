const Joi = require("joi");

const schemas = {
  createReportRequestBody: Joi.object().keys({
    client_id: Joi.number().positive().min(1).required(),
    incident_desc: Joi.string().trim().required(),
    city: Joi.string().max(20).trim().required(),
    country: Joi.string().max(20).trim().required()
  })
};

module.exports = schemas;
