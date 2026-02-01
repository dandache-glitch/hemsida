class User {
  constructor({ id, email, passwordHash, role = "user", createdAt }) {
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role;
    this.createdAt = createdAt || new Date();
  }
}

export default User;
