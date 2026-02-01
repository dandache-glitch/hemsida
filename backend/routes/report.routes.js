const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.get("/:companyId", (req, res) => {
  const { companyId } = req.params;

  db.all(
    "SELECT * FROM reports WHERE companyId = ? ORDER BY createdAt DESC",
    [companyId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

module.exports = router;
