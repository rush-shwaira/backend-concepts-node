// src/logger/index.ts
import { createLogger, format, transports } from "winston";

const { combine, timestamp, json, prettyPrint, colorize } = format;

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new transports.Console({
      format: combine(colorize(), timestamp(), prettyPrint()),
    }),

    new transports.File({
      filename: "logs/error.log",
      level: "error",
    }),

    new transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

export default logger;
