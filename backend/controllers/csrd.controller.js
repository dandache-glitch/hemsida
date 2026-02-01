let csrdState = {
  answers: {},
  score: 0,
  status: "not_started",
  lastUpdated: null
};

/* Enkel CSRD-scoring (kan byggas ut senare) */
function calculateScore(answers) {
  let score = 0;

  if (answers.climatePolicy) score += 30;
  if (answers.supplyChainRisk) score += 30;
  if (answers.governancePolicy) score += 40;

  return score;
}

/* GET /api/csrd/status */
exports.getStatus = (req, res) => {
  res.json(csrdState);
};

/* POST /api/csrd/submit */
exports.submit = (req, res) => {
  const answers = req.body || {};

  const score = calculateScore(answers);
  const status = score >= 70 ? "compliant" : "incomplete";

  csrdState = {
    answers,
    score,
    status,
    lastUpdated: new Date().toISOString()
  };

  res.json({
    message: "CSRD assessment updated",
    status,
    score
  });
};

/* INTERNAL – används av PDF-export */
exports._getInternalState = () => csrdState;
