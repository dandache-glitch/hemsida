const express = require("express");
const cors = require("cors");

const app = express();

/* ====== MIDDLEWARE ====== */
app.use(cors());
app.use(express.json());

/* ====== HEALTH CHECK ====== */
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "EU Compliance Platform",
    time: new Date().toISOString()
  });
});

/* ====== AUTH ROUTES ====== */
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

/* ====== PLACEHOLDER ROUTES (kommer byggas) ====== */
app.get("/api", (req, res) => {
  res.json({
    message: "API running",
    modules: ["auth", "csrd", "ai-act", "supply-chain", "esg"]
  });
});

/* ====== SERVER START ====== */
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
