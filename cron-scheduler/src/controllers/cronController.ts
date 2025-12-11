// src/controllers/cronController.ts
import { startSampleJob, stopSampleJob } from "../cron/sampleJob.js";
import type { Request, Response } from "express";

export const startJob = (req: Request, res: Response) => {
  startSampleJob();
  res.json({ message: "Job running" });
};

export const stopJob = (req: Request, res: Response) => {
  stopSampleJob();
  res.json({ message: "Job stopped" });
};
