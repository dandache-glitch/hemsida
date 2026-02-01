const express = require("express");
const router = express.Router();
const aiActController = require("../controllers/aiAct.controller");

/* GET AI Act status */
router.get("/status", aiActController.getStatus);

/* POST AI Act assessment */
router.post("/assess", aiActController.assess);

module.exports = router;
