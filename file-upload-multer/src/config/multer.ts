// src/config/multer.ts
import multer from "multer";

// Don't save locally, Multer only reads file buffer into memory.
export const memoryUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 },
});

// Local upload
// import path from "path";
// import { env } from "./env";
// import fs from "fs";
// const profilePath = path.join(env.uploadDir, "profile");
// fs.mkdirSync(profilePath, { recursive: true });
// export const profileUpload = multer({
//   storage: multer.diskStorage({
//     destination: profilePath,
//     filename: (req, file, cb) => {
//       const ext = path.extname(file.originalname);
//       const unique = Date.now() + "_" + Math.round(Math.random() * 1e9);
//       cb(null, unique + ext);
//     },
//   }),
//   limits: { fileSize: 2 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       return cb(new Error("Only images allowed"));
//     }
//     cb(null, true);
//   },
// });
