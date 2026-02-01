const express = require("express");
const router = express.Router();

const generatePDF = require("../utils/pdfGenerator");
const csrdController = require("../controllers/csrd.controller");
const aiActController = require("../controllers/aiAct.controller");
const db = require("../database/db");

/*
  GET /api/pdf/export
  companyId kommer från auth.middleware
*/
router.get("/export", (req, res) => {
  const companyId = req.companyId;

  const csrd = csrdController._getInternalState();
  const aiAct = aiActController._getInternalState();

  // Spara rapport i databasen
  db.run(
    `
    INSERT INTO reports
    (companyId, csrdStatus, csrdScore, aiRiskLevel, aiNotes, createdAt)
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      companyId,
      csrd.status,
      csrd.score,
      aiAct.riskLevel,
      JSON.stringify(aiAct.notes),
      new Date().toISOString()
    ]
  );

  // Generera PDF
  generatePDF(res, {
    companyId,
    csrd,
    aiAct
  });
});

module.exports = router;
