// src/utils/workerHelper.ts
import { Worker } from "worker_threads";
export function runWorker<T>(workerFile: string, payload: any): Promise<T> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerFile, { workerData: payload });

    // Listen to events
    worker.on("message", (data) => resolve(data as T));
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}`));
    });
  });
}
