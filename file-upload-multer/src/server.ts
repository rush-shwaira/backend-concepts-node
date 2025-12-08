// src/server.ts
import express from "express";
import { env } from "./config/env.js";
import uploadRoutes from "./routes/upload.routes.js";

const app = express();
app.use(express.json());
app.use("/upload", uploadRoutes);

app.listen(env.port, () => {
  console.log(`Server running http://localhost:${env.port}`);
});

// Local upload
// import path from "path";
// app.use("/uploads", express.static(path.join(env.uploadDir)));
