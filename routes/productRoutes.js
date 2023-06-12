const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/fotosProducto');
    },
    filename: function (req, file, cb) {
        console.log(file)
        const nombreDeArchivo = "clothe" + Date.now() + path.extname(file.originalname)
        cb(null,nombreDeArchivo);
    }

    
})

const cargarImg = multer ({ storage })


router.get('/carrito-de-compras', productController.getCarrito)
router.get('/create',productController.getCreateProduct)
router.post('/create', cargarImg.single('imgFile') , productController.create)
router.get('/publicado', productController.showPublished)
router.get('/detalle/:productoId', productController.getDetalle);


module.exports = router
