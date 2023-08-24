const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/cartController");

router.post("/api/checkout", controller.checkout);

module.exports = router;