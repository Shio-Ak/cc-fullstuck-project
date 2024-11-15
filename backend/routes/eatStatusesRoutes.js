const express = require("express");
const router = express.Router();
const eatStatusesController = require("../controllers/eatStatusesController");

router.get("/", eatStatusesController.findAll);
// router.patch("/", eatStatusesController.patchStatus);

module.exports = router;
