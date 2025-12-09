// src/routes/index.routes.ts
import { Router } from "express";
import { loginRateLimiter } from "../middleware/loginLimiter.js";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello - Rate limit + Redis demo" });
});

router.post("/login", loginRateLimiter, (req, res) => {
  const { email } = req.body;
  res.json({ message: "Login OK", email });
});

router.get("/heavy", (req, res) => {
  res.json({ message: "Heavy endpoint response" });
});

export default router;
