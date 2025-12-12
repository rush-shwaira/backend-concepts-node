// src/routes/upload.route.ts
import { Router } from "express";
import { uploadLargeFile } from "../controllers/upload.controller.js";
const router: Router = Router();
router.post("/upload", uploadLargeFile);
export default router;
