// src/controllers/download.controller.ts
import type { Request, Response } from "express";
import fs from "fs";
import { getFilePath } from "../utils/storage.js";

export const downloadLargeFile = async (req: Request, res: Response) => {
  const { filename } = req.params;
  if (!filename)
    return res.status(400).json({ message: "Filename is required" });
  const filePath = getFilePath(filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }
  const readStream = fs.createReadStream(filePath);

  // Set headers for download
  res.setHeader("Content-Disposition", `attachment; filename=${filename}`);

  readStream.pipe(res); // Pipe readStream to response

  // Listen to events
  readStream.on("error", () => {
    res.status(500).json({ message: "Error reading file" });
  });
};
