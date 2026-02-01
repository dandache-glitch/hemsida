import express from "express";

const router = express.Router();

// POST /api/auth/register
router.post("/auth/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  // Placeholder – databas kommer snart
  res.json({
    message: "User registered (mock)",
    email
  });
});

// POST /api/auth/login
router.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  // Placeholder – auth logic kommer snart
  res.json({
    message: "Login successful (mock)",
    email
  });
});

export default router;
