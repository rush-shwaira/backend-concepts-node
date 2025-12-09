// src/middleware/loginLimiter.ts
import rateLimiter from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import { env } from "../config/env.js";
import { redis } from "../config/redis.js";
import type { RequestHandler } from "express";

export const loginRateLimiter = rateLimiter({
  windowMs: env.loginWindowMs,
  max: env.loginMax,
  message: {
    error: "Too many login attempts",
    message: "Please tyr agin after some time",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const ip = req.ip;
    const email = typeof req.body?.email === "string" ? req.body.email : "";
    return `${ip}:${email}`;
  },
  store: new RedisStore({
    sendCommand: (...args: any[]) => (redis as any).call?.(...args),
  }),
});
