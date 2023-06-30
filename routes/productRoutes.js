const { body } = require('express-validator')
const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController')
let logDBMiddleware = require('../middlewares/logDBMiddleware')


//VALIDACIONES

const validateCreateProduct = [
    body('titulo').isLength({min:1}).withMessage('Campo de titulo obligatorio'),
    body('genero').isLength({min:1}).withMessage('Campo de genero obligatorio'),
    body('talle').isLength({min:1}).withMessage('Campo de talle obligatorio'),
    body('precio').isLength({min:1}).withMessage('Campo de precio obligatorio'),
    body('descripcion').isLength({min:1}).withMessage('Campo de descripcion obligatorio'),
]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/fotosProducto');
    },
    filename: function (req, file, cb) {
        console.log(file)
        const nombreDeArchivo = "/clothe" + Date.now() + path.extname(file.originalname)
        cb(null,nombreDeArchivo);
    }
})

const cargarImg = multer ({ storage })


router.get('/products/carrito-de-compras', productController.getCarrito)
router.get('/products/create',productController.getCreateProduct)
router.post('/products/create',[cargarImg.single('imgFile'), validateCreateProduct, logDBMiddleware ], productController.create)
router.get('/products/publicado', productController.showPublished)
router.get('/products/:id/detalle', productController.getDetalle);


module.exports = router
