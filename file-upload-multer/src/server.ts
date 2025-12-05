import express from "express";
import { env } from "./config/env.js";
import path from "path";
import uploadRoutes from "./routes/upload.routes.js";

const app = express();

app.use("/uploads", express.static(path.join(env.uploadDir)));
app.use(express.json());

app.use("/upload", uploadRoutes);

app.listen(env.port, () => {
  console.log(`Server running http://localhost:${env.port}`);
});
