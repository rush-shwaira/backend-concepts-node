// src/config/redis.ts
import { Redis } from "ioredis";
import { env } from "./env.js";

export const redis = new Redis(env.redisUrl);
redis.on("connect", () => console.log("Redis connected"));
redis.on("error", () => console.log("Redis Error"));
