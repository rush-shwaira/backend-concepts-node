// src/logger/requestLogger.ts
import type { Request, Response, NextFunction } from "express";
import logger from "./index.js";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info({
      message: "HTTP Request",
      method: req.method,
      url: req.originalUrl,
      status: req.statusCode,
      duration: `${duration}ms`,
    });
  });
  next();
}
