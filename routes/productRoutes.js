const express = require('express')

const DProductocontroller = require('../controllers/productController')

const router = express.Router();

router.get('/detalleProducto', DProductocontroller.getDetalleProducto) // Se evita poner products
router.get('/carrito-de-compras', DProductocontroller.getCarrito);

module.exports = router