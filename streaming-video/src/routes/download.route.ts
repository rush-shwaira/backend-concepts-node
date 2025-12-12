// src/routes/download.route.ts
import { Router } from "express";
import { downloadLargeFile } from "../controllers/download.controller.js";
const router: Router = Router();
router.get("/download/:filename", downloadLargeFile);
export default router;
