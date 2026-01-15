// src/minio.ts
import { Client } from "minio"

export const minioClient = new Client({
    endPoint: process.env.MINIO_ENDPOINT || "minio",
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY || "minioadmin",
    secretKey: process.env.MINIO_SECRET_KEY || "minioadmin",
})


export const BUCKET_NAME = "uploads"

export async function ensureBucket() {
    const exists = await minioClient.bucketExists(BUCKET_NAME).catch(() => false);

    if (!exists) {
        await minioClient.makeBucket(BUCKET_NAME, "us-east-1");
        console.log(`Bucket "${BUCKET_NAME}" created`);
    } else {
        console.log(`Bucket "${BUCKET_NAME}" already exists`);
    }
}