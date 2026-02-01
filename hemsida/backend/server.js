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
    message: "EU Compliance Platform API running",
    timestamp: new Date().toISOString()
  });
});

/* ======================
   ROUTES
====================== */
const authRoutes = require("./routes/auth.routes");

// Auth
app.use("/api/auth", authRoutes);

// Placeholder – kommer fyllas senare
app.get("/api", (req, res) => {
  res.json({
    message: "API root",
    availableRoutes: [
      "/api/auth",
      "/health"
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
