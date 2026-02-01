/* MOCK USER (endast för test) */
const mockUser = {
  id: 1,
  email: "test@company.se",
  password: "123456",
  role: "admin",
  company: "Demo AB"
};

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email och lösenord krävs" });
  }

  return res.json({
    message: "User registered (mock)",
    user: {
      email,
      role: "admin"
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== mockUser.email || password !== mockUser.password) {
    return res.status(401).json({ message: "Fel inloggning" });
  }

  return res.json({
    message: "Login successful",
    token: "mock-jwt-token",
    user: {
      email: mockUser.email,
      role: mockUser.role,
      company: mockUser.company
    }
  });
};

exports.me = (req, res) => {
  return res.json({
    user: {
      email: mockUser.email,
      role: mockUser.role,
      company: mockUser.company
    }
  });
};
