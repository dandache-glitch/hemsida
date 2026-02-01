const express = require("express");
const router = express.Router();
const generatePDF = require("../utils/pdfGenerator");

const csrdController = require("../controllers/csrd.controller");
const aiActController = require("../controllers/aiAct.controller");

router.get("/export", (req, res) => {
  const csrd = csrdController._getInternalState();
  const aiAct = aiActController._getInternalState();

  const data = {
    csrd,
    aiAct
  };

  generatePDF(res, data);
});

module.exports = router;
