const express = require("express");
const router = express.Router();
const csrdController = require("../controllers/csrd.controller");

/* GET CSRD status */
router.get("/status", csrdController.getStatus);

/* POST CSRD submission */
router.post("/submit", csrdController.submit);

module.exports = router;
