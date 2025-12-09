// src/app.ts
import express from "express";
import type { Express } from "express";
import { globalRateLimiter } from "./middleware/rateLimiter.js";
import routes from "./routes/index.routes.js";
import { redis } from "./config/redis.js";

const app: Express = express();

app.use(express.json());
app.set("trust proxy", 1);

if (!redis?.status || redis.status !== "ready") {
  console.warn("[Redis is not ready, rate limiting will use memory store");
}

app.use(globalRateLimiter);
app.use("/", routes);

export default app;
