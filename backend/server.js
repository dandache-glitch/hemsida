const express = require("express");
const cors = require("cors");

const authMiddleware = require("./middleware/auth.middleware");

const authRoutes = require("./routes/auth.routes");
const csrdRoutes = require("./routes/csrd.routes");
const aiActRoutes = require("./routes/aiAct.routes");
const pdfRoutes = require("./routes/pdf.routes");
const reportRoutes = require("./routes/report.routes");

const app = express();

/* ======================
   MIDDLEWARE
====================== */
app.use(cors());
app.use(express.json());

/* ======================
   HEALTH CHECK
====================== */
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "EU Compliance Platform API",
    timestamp: new Date().toISOString()
  });
});

/* ======================
   ROUTES
====================== */

// Auth (öppen)
app.use("/api/auth", authRoutes);

// CSRD (öppen för nu)
app.use("/api/csrd", csrdRoutes);

// AI Act (öppen för nu)
app.use("/api/ai-act", aiActRoutes);

// PDF export (KRÄVER auth + companyId)
app.use("/api/pdf", authMiddleware, pdfRoutes);

// Rapport-historik (KRÄVER auth + companyId)
app.use("/api/reports", authMiddleware, reportRoutes);

/* ======================
   API ROOT
====================== */
app.get("/api", (req, res) => {
  res.json({
    message: "API root",
    routes: [
      "/health",
      "/api/auth",
      "/api/csrd",
      "/api/ai-act",
      "/api/pdf/export",
      "/api/reports"
    ]
  });
});

/* ======================
   ERROR HANDLING
====================== */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/* ======================
   SERVER
====================== */
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
