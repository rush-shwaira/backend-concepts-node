import type { Request, Response } from "express";
import path from "path";
import { runWorker } from "../utils/workerHelper.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const computePrimes = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 50000;
  try {
    const workerPath = path.join(__dirname, "../workers/prime.worker.js");
    const data = await runWorker<{ primes: number[] }>(workerPath, { limit });

    res.json({
      message: "Prime computation completed",
      count: data.primes.length,
      primes: data.primes,
    });
  } catch (err: any) {
    res.status(500).json({ message: "Worker failed", details: err });
  }
};
