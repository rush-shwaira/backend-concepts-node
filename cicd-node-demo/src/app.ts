// src/app.ts
import express, { type Express } from "express";
const app: Express = express();

app.get("/", (_req, res) => res.json({ message: "CI/CD pipeline working" }));

export default app;
