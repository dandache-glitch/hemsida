let csrdState = {
  answers: {},
  score: 0,
  status: "not_started"
};

/* Enkel scoring-logik */
function calculateScore(answers) {
  let score = 0;

  if (answers.climatePolicy) score += 30;
  if (answers.supplyChainRisk) score += 30;
  if (answers.governancePolicy) score += 40;

  return score;
}

exports.getStatus = (req, res) => {
  res.json({
    status: csrdState.status,
    score: csrdState.score,
    answers: csrdState.answers
  });
};

exports.submit = (req, res) => {
  const answers = req.body;

  const score = calculateScore(answers);

  csrdState = {
    answers,
    score,
    status: score >= 70 ? "compliant" : "incomplete"
  };

  res.json({
    message: "CSRD assessment updated",
    score,
    status: csrdState.status
  });
};
