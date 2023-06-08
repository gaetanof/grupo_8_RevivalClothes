const express = require('express')
const multer = require('multer')
const productController = require('../controllers/productController')
const router = express.Router();


router.get('/detalle', productController.getDetalle) // Se evita poner products
router.get('/carrito-de-compras', productController.getCarrito);

module.exports = router