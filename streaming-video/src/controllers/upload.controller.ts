// src/controllers/upload.controller.ts
import type { Request, Response } from "express";
import fs from "fs";
import { getFilePath } from "../utils/storage.js";

export const uploadLargeFile = async (req: Request, res: Response) => {
  const filename = req.headers["x-filename"] as string;
  if (!filename)
    return res.status(400).json({ message: "Missing x-filename header" });
  const writeStream = fs.createWriteStream(getFilePath(filename));

  req.pipe(writeStream); // Stream incoming data

  // Listen to events
  writeStream.on("finish", () => {
    res.json({ message: "Uploaded successfully", filename });
  });

  writeStream.on("error", () => {
    res.status(500).json({ message: "Error while saving file" });
  });
};
