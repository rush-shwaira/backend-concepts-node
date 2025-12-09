// src/config/env.ts
import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  redisUrl: process.env.REDIS_URL || "redis://localhost:6379",

  // Rate limiter defaults
  globalWindowMs: Number(process.env.RL_WINDOW_MS || 15 * 60 * 1000),
  globalMax: Number(process.env.RL_MAX || 100),

  // Stricter rate limit for login
  loginWindowMs: Number(process.env.RL_LOGIN_WINDOW_MS || 15 * 60 * 1000),
  loginMax: Number(process.env.RL_LOGIN_MAX || 5),
};
