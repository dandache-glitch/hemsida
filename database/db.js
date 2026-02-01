const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    console.error("DB error:", err.message);
  } else {
    console.log("📦 SQLite database connected");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      companyId TEXT,
      csrdStatus TEXT,
      csrdScore INTEGER,
      aiRiskLevel TEXT,
      aiNotes TEXT,
      createdAt TEXT
    )
  `);
});

module.exports = db;
