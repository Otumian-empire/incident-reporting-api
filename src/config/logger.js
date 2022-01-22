const winston = require("winston");

const options = {
  file: {
    level: "info",
    filename: "./logs/log.log",
    handleExceptions: true,
    json: true,
    maxSize: 1024 * 1024 * 5, // 5 MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const winstonLogger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
});

module.exports = winstonLogger;
