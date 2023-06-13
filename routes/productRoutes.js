const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator')
const { validationResult } = require('express-validator')
const productController = require('../controllers/productController')
let logDBMiddleware = require('../middlewares/logDBMiddleware')


//VALIDACIONES

const validateCreateProduct = [
    body('titulo').notEmpty().withMessage('Campo de titulo obligatorio'),
    body('genero').notEmpty().withMessage('Campo de genero obligatorio'),
    body('talle').notEmpty().withMessage('Campo de talle obligatorio'),
    body('precio').notEmpty().withMessage('Campo de precio obligatorio'),
    body('descripcion').notEmpty().withMessage('Campo de descripcion obligatorio'),
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/fotosProducto');
    },
    filename: function (req, file, cb) {
        console.log(file)
        const nombreDeArchivo = "/images/clothe" + Date.now() + path.extname(file.originalname)
        cb(null,nombreDeArchivo);
    }

    
})

const cargarImg = multer ({ storage })


router.get('/carrito-de-compras', productController.getCarrito)
router.get('/create',productController.getCreateProduct)
router.post('/create',[validateCreateProduct, logDBMiddleware ,cargarImg.single('imgFile') ], productController.create)
router.get('/publicado', productController.showPublished)
router.get('/detalle/:id', productController.getDetalle);


module.exports = router
