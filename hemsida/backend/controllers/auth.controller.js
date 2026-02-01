const User = require("../models/User");

/* POST /api/auth/register */
exports.register = (req, res) => {
  const { email, password, companyId } = req.body;

  if (!email || !password || !companyId) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const user = User.createUser(email, password, companyId);

  res.json({
    message: "User registered",
    user: {
      email: user.email,
      companyId: user.companyId
    }
  });
};

/* POST /api/auth/login */
exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = User.findByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // enkel fake-token
  res.json({
    token: "demo-token",
    user: {
      email: user.email,
      companyId: user.companyId
    }
  });
};
