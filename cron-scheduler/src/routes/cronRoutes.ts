// src/routes/cronRoutes.ts
import { Router } from "express";
import { startJob, stopJob } from "../controllers/cronController.js";

const router: Router = Router();

router.post("/start", startJob);
router.post("/stop", stopJob);

export default router;
