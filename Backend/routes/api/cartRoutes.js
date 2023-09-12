const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/cartController");

// @GET - /api/checkout
router.post("/api/checkout", controller.checkout);

// @GET - /api/carts
router.get('/api/carts', controller.getAll);

// @GET - /api/cart/pages
router.get('/api/carts/pages', controller.getCartsPages);

module.exports = router;