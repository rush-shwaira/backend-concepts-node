// src/config/env.ts
import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT || 3000),
  // uploadDir: process.env.UPLOAD_DIR || "uploads",
  cfAccount: process.env.CF_ACCOUNT_ID!,
  cfAccessKey: process.env.CF_ACCESS_KEY!,
  cfSecretKey: process.env.CF_SECRET_KEY!,
  cfBucket: process.env.CF_BUCKET!,
  cfEndpoint: process.env.CF_ENDPOINT!,
};
