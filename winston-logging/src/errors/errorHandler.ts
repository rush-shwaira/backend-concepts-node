// src/errors/errorHandler.ts
import type { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError.js";
import logger from "../logger/index.js";

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
  });
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "fail",
      message: err.message,
    });
  }
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
}
