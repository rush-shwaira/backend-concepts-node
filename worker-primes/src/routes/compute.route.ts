// src/routes/compute.route.ts
import { Router } from "express";
import { computePrimes } from "../controllers/compute.controller.js";

const router: Router = Router();
router.get("/primes", computePrimes);
export default router;
