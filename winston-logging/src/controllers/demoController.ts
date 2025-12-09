// src/controllers/demoController.js
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import logger from "../logger/index.js";

export const demoController = {
  hello(req: Request, res: Response) {
    logger.info("Hello endpoint hit");
    res.json({ message: "Testing Winston logging" });
  },

  testError(req: Request, res: Response, next: NextFunction) {
    next(new AppError("Test AppError", 400));
  },

  crash(req: Request, res: Response) {
    // @ts-ignore
    const x = test;
    res.json({ x });
  },
};
