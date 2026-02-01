let aiState = {
  systemType: null,
  useCase: null,
  riskLevel: "unknown",
  notes: []
};

function classifyRisk({ biometric, criticalInfrastructure, decisionMaking }) {
  let risk = "low";
  const notes = [];

  if (biometric) {
    risk = "high";
    notes.push("Biometrisk identifiering");
  }

  if (criticalInfrastructure) {
    risk = "high";
    notes.push("Kritisk infrastruktur");
  }

  if (decisionMaking && risk !== "high") {
    risk = "medium";
    notes.push("Automatiserat beslutsfattande");
  }

  return { risk, notes };
}

exports.getStatus = (req, res) => {
  res.json(aiState);
};

exports.assess = (req, res) => {
  const input = req.body;

  const { risk, notes } = classifyRisk(input);

  aiState = {
    systemType: input.systemType || "unknown",
    useCase: input.useCase || "unknown",
    riskLevel: risk,
    notes
  };

  res.json({
    message: "AI Act risk assessment complete",
    riskLevel: risk,
    notes
  });
};
