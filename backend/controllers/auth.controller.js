const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "super-secret-key"; // senare env

exports.register = (req, res) => {
  const { email, password, companyId } = req.body;

  if (!email || !password || !companyId) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const user = User.createUser(email, password, companyId);

  res.json({ message: "User registered" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = User.findByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { email: user.email, companyId: user.companyId },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({
    token,
    user: {
      email: user.email,
      companyId: user.companyId
    }
  });
};
