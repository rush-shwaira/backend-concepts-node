import { parentPort, workerData } from "worker_threads";
import { findPrimes } from "../utils/findPrimes.js";
const limit: number = workerData.limit;
const result = findPrimes(limit);
// Send response to main thread
parentPort?.postMessage({ primes: result });
