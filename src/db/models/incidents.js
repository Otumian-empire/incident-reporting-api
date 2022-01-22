"use strict";

module.exports = (sequelize, DataTypes) => {
  const Incidents = sequelize.define(
    "Incidents",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      incident_desc: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      weather_report: {
        type: DataTypes.JSON,
        allowNull: false
      }
    },
    { timestamps: false }
  );

  return Incidents;
};
