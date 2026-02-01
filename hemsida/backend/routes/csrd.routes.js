const express = require("express");
const router = express.Router();

/**
 * GET /api/csrd/status
 * Enkel status för CSRD-compliance
 */
router.get("/status", (req, res) => {
  res.json({
    module: "CSRD",
    status: "not_started",
    message: "CSRD data not submitted yet"
  });
});

/**
 * POST /api/csrd/submit
 * Tar emot CSRD-data (mock än så länge)
 */
router.post("/submit", (req, res) => {
  const data = req.body;

  res.json({
    success: true,
    message: "CSRD data received",
    data
  });
});

module.exports = router;
