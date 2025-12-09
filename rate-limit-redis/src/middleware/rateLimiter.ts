// src/middleware/rateLimiter.ts
import rateLimiter from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import type { RequestHandler } from "express";
import { redis } from "../config/redis.js";
import { env } from "../config/env.js";

export const globalRateLimiter: RequestHandler = rateLimiter({
  windowMs: env.globalWindowMs,
  max: env.globalMax,
  standardHeaders: true, // Return rate limit info in `RateLimit-*' headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
  keyGenerator: (req) => req.ip!,
  handler: (req, res) => {
    res.status(429).json({
      error: "Too many requests",
      message: "You have exceeded rate limit, please try again later",
    });
  },
  store: new RedisStore({
    sendCommand: (...args: any[]) => (redis as any).call?.(...args),
  }),
});
