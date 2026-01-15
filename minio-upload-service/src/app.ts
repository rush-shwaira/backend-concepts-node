// src/app.ts
import express from "express";
import fileRoutes from "./routes/file.routes.js";

const app = express();

app.use(express.json());
app.use("/files", fileRoutes);

export default app;