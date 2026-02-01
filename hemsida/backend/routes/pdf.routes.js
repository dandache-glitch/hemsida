const express = require("express");
const router = express.Router();
const generatePDF = require("../utils/pdfGenerator");

const csrdController = require("../controllers/csrd.controller");
const aiActController = require("../controllers/aiAct.controller");
const db = require("../database/db");

router.get("/export", (req, res) => {
  const companyId = req.query.companyId || "demo-company";

  const csrd = csrdController._getInternalState();
  const aiAct = aiActController._getInternalState();

  // spara rapport
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

  generatePDF(res, { csrd, aiAct });
});

module.exports = router;
