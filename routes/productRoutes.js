const express = require('express')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let carpeta = path.join(__dirname, '/public/images/fotosProduto')
        cb(null, carpeta);
    },
    filename: function (req, file, cb) {
        let nombreDeArchivo = date.now() + path.extname(file.originalname)
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const productController = require('../controllers/productController')

const router = express.Router();

// router.get('/detalleProducto', DProductocontroller.getDetalleProducto) // Se evita poner products
router.get('/detalle', productController.getDetalle) // Se evita poner products
router.get('/carrito-de-compras', productController.getCarrito)
router.get('/create',productController.getCreateProduct)
router.post('/create', productController.create)
module.exports = router