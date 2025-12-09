// src/routes/demoRoutes.ts
import { Router } from "express";
import { demoController } from "../controllers/demoController.js";
const router: Router = Router();
router.get("/hello", demoController.hello);
router.get("/error", demoController.testError);
router.get("/crash", demoController.crash);

export default router;
