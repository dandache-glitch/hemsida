const express = require("express");
const cors = require("cors");

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
const authRoutes = require("./routes/auth.routes");
const csrdRoutes = require("./routes/csrd.routes");

// Auth routes
app.use("/api/auth", authRoutes);

// CSRD routes
app.use("/api/csrd", csrdRoutes);

// API root
app.get("/api", (req, res) => {
  res.json({
    message: "API root",
    availableRoutes: [
      "/health",
      "/api/auth",
      "/api/csrd"
    ]
  });
});

/* ======================
   ERROR HANDLING
====================== */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

/* ======================
   SERVER
====================== */
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
