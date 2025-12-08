// src/config/r2.ts
import { S3Client } from "@aws-sdk/client-s3";
import { env } from "./env.js";

export const r2 = new S3Client({
  region: "auto", // Required by Cloudflare R2
  endpoint: env.cfEndpoint,
  credentials: {
    accessKeyId: env.cfAccessKey,
    secretAccessKey: env.cfSecretKey,
  },
});
