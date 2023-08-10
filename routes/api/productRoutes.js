const express = require('express');
const apiControllers = require('../../controllers/api/productController');

const router = express.Router();

// @GET - /api/products
router.get('/api/products', apiControllers.getAll);

// @GET - /api/:id/products
router.get('/api/:id/products', apiControllers.getById);

module.exports = router;