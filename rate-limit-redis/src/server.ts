// src/server.ts
import app from "./app.js";
import { env } from "./config/env.js";
import { redis } from "./config/redis.js";

async function start() {
  try {
    await redis.ping();
    console.log("[Redis] ping ok");
  } catch (err) {
    console.warn(
      "[Redis] ping failed - continuing without Redis backing for rate limiter"
    );
  }

  app.listen(env.port, () => {
    console.log(`Server listening at http://localhost:${env.port}`);
  });
}

start();
