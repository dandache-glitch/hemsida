let aiState = {
  systemType: "unknown",
  useCase: "unknown",
  riskLevel: "unknown",
  notes: [],
  lastUpdated: null
};

/* EU AI Act – förenklad riskklassning */
function classifyRisk(input) {
  let riskLevel = "low";
  const notes = [];

  if (input.biometric) {
    riskLevel = "high";
    notes.push("Biometrisk identifiering");
  }

  if (input.criticalInfrastructure) {
    riskLevel = "high";
    notes.push("Användning i kritisk infrastruktur");
  }

  if (input.decisionMaking && riskLevel !== "high") {
    riskLevel = "medium";
    notes.push("Automatiserat beslutsfattande");
  }

  return { riskLevel, notes };
}

/* GET /api/ai-act/status */
exports.getStatus = (req, res) => {
  res.json(aiState);
};

/* POST /api/ai-act/assess */
exports.assess = (req, res) => {
  const input = req.body || {};

  const { riskLevel, notes } = classifyRisk(input);

  aiState = {
    systemType: input.systemType || "unknown",
    useCase: input.useCase || "unknown",
    riskLevel,
    notes,
    lastUpdated: new Date().toISOString()
  };

  res.json({
    message: "AI Act risk assessment complete",
    riskLevel,
    notes
  });
};

/* INTERNAL – används av PDF-export */
exports._getInternalState = () => aiState;
