// src/server.ts
import express, { type Express } from "express";
import uploadRoute from "./routes/upload.route.js";
import downloadRoute from "./routes/download.route.js";

const app: Express = express();
const PORT = 4000;

app.use("/api", uploadRoute);
app.use("/api", downloadRoute);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
