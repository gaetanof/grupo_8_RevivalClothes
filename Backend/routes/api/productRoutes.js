const express = require('express');
const apiControllers = require('../../controllers/api/productController');

const router = express.Router();

// @GET - /api/products
router.get('/api/products', apiControllers.getAll);

// @GET - /api/:id/products
router.get('/api/:id/products', apiControllers.getById);

// @GET - /api/products/n
router.get('/api/products/n', apiControllers.getNProducts);

// @GET - /api/products
router.get('/api/products/pages', apiControllers.getProductsPages);

module.exports = router;