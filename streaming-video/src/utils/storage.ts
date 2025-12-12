// src/utils/storage.ts
import path from "path";

export const uploadsDir = path.join(process.cwd(), "uploads");

export const getFilePath = (filename: string) =>
  path.join(uploadsDir, filename);
