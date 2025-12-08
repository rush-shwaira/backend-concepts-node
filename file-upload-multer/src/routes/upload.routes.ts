// src/routes/upload.routes.ts
import { Router } from "express";
import { memoryUpload } from "../config/multer";
import { R2Service } from "../services/r2.service";

const router = Router();

router.post(
  "/profile/cloud/:userId",
  memoryUpload.single("image"),
  async (req, res) => {
    const { userId } = req.params;

    if (!req.file) return res.status(400).json({ error: "No file provided" });
    try {
      const key = await R2Service.uploadProfile(userId, req.file);
      const url = await R2Service.getSignedFileUrl(key);

      res.json({
        message: "Uploaded successfully to Cloudflare R2",
        key,
        url,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
);

export default router;

// Local Upload
// import { profileUpload } from "../config/multer";
// router.post("/profile", profileUpload.single("image"), (req, res) => {
//   if (!req.file) return res.status(400).json({ error: "File upload failed" });
//   //   const publicUrl = `/uploads/profile/${req.file.filename}`;
//   const publicUrl = `${req.protocol}://${req.get("host")}/uploads/profile/${
//     req.file.filename
//   }`;
//   res.json({
//     message: "Uploaded successfully",
//     file: req.file,
//     url: publicUrl,
//   });
// });
