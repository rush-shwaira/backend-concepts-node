import { Router } from "express";
import { profileUpload } from "../config/multer";

const router = Router();

router.post("/profile", profileUpload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "File upload failed" });

  //   const publicUrl = `/uploads/profile/${req.file.filename}`;
  const publicUrl = `${req.protocol}://${req.get("host")}/uploads/profile/${
    req.file.filename
  }`;

  res.json({
    message: "Uploaded successfully",
    file: req.file,
    url: publicUrl,
  });
});

export default router;
