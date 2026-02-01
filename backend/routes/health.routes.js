import express from "express";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "EU Compliance Backend",
    timestamp: new Date().toISOString()
  });
});

export default router;
