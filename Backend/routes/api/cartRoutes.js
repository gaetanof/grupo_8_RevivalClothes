const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/cartController");

// @GET - /api/checkout
router.post("/api/checkout", controller.checkout);

// @GET - /api/carts
router.get('/api/carts', controller.getAll);

module.exports = router;