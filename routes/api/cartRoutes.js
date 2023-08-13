const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');

const controller = require("../../controllers/api/cartController");

router.post("/api/checkout", authMiddleware.allowUnsignedIn, controller.checkout);

module.exports = router;