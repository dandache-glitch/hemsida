const express = require("express");
const router = express.Router();
const generatePDF = require("../utils/pdfGenerator");

/* Mock data (sen hämtas från controllers/DB) */
router.get("/export", (req, res) => {
  const data = {
    csrd: {
      status: "incomplete",
      score: 60
    },
    aiAct: {
      riskLevel: "medium",
      notes: ["Automatiserat beslutsfattande"]
    }
  };

  generatePDF(res, data);
});

module.exports = router;
