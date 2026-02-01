let users = [];

exports.createUser = (email, password, companyId) => {
  const user = { id: users.length + 1, email, password, companyId };
  users.push(user);
  return user;
};

exports.findByEmail = email => {
  return users.find(u => u.email === email);
};
