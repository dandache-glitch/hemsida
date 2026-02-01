const express = require("express");
const router = express.Router();

/* Fake CSRD data (in-memory) */
let csrdData = {
  completed: false,
  score: 42,
  missingAreas: [
    "Climate impact",
    "Supply chain risks",
    "Governance policy"
  ]
};

/* GET CSRD status */
router.get("/", (req, res) => {
  res.json(csrdData);
});

/* POST update CSRD answers */
router.post("/", (req, res) => {
  const { completed, score, missingAreas } = req.body;

  csrdData = {
    completed: completed ?? csrdData.completed,
    score: score ?? csrdData.score,
    missingAreas: missingAreas ?? csrdData.missingAreas
  };

  res.json({
    message: "CSRD data updated",
    csrdData
  });
});

module.exports = router;
