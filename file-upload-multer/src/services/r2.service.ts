// src/services/r2.service.ts
import { r2 } from "../config/r2";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "../config/env";

export class R2Service {
  static async uploadProfile(userId: string, file: Express.Multer.File) {
    const key = `profiles/${userId}${Date.now()}_${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: env.cfBucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await r2.send(command);
    return key;
  }
  static async getSignedFileUrl(key: string, expiresIn = 60 * 5) {
    const command = new GetObjectCommand({
      Bucket: env.cfBucket,
      Key: key,
    });
    return getSignedUrl(r2, command, { expiresIn });
  }
}
