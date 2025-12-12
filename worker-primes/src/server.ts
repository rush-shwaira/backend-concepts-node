import express from "express";
import computeRoute from "./routes/compute.route.js";
import { findPrimes } from "./utils/findPrimes.js";

const app = express();
app.use(express.json());

app.use("/compute", computeRoute);
app.get("/test", (_, res) =>
  res.json({ message: "Other route works when worker called" })
);
app.get("/no-worker-compute/primes", (req, res) => {
  const limit = Number(req.query.limit) || 50000;
  if (!limit) return res.status(400).json({ message: "limit required" });
  const data = findPrimes(+limit);
  res.json({ primes: data, count: data.length });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
