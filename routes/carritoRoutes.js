const express = require('express');

const carritoController = require('../controllers/carritoController');

const router = express.Router();

router.get('/carrito-de-compras', carritoController.getCarrito);

module.exports = router