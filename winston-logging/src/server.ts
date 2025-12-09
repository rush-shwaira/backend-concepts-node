// src/server.ts
import express from "express";
import demoRoutes from "./routes/demoRoutes.js";
import { requestLogger } from "./logger/requestLogger.js";
import { globalErrorHandler } from "./errors/errorHandler.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(requestLogger);

app.use("/demo", demoRoutes);

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
