module.exports = (req, res, next) => {
  // demo: companyId skickas i header
  const companyId = req.headers["x-company-id"];

  if (!companyId) {
    return res.status(401).json({ error: "Missing companyId" });
  }

  req.companyId = companyId;
  next();
};
