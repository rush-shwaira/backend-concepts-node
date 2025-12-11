// src/server.js
import express from "express";
import cronRoutes from "./routes/cronRoutes.js";

const PORT = 4000;
const app = express();
app.use(express.json());
app.use("/cron", cronRoutes);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
