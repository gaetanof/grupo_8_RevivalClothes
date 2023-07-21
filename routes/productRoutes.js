const { body } = require('express-validator')
const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController')
const validations = require('../middlewares/productValidation')
let authProduct = require('../middlewares/authProductsMiddleware')


//MULTER SETTINGS

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

// @GET /products/cart 
router.get('/products/cart', productController.getCarrito)


router.get('/products/create',productController.getCreateProduct)


router.post('/products/create',[cargarImg.single('imgFile'), validations.validateCreateProduct, authProduct.allowCreate], productController.create)


router.get('/products/publicado', productController.showPublished)


router.get('/products/:id/detalle', productController.getDetalle);


router.get('/products/:id/editar', productController.getEditProduct);


router.put('/products/:id/editar',[cargarImg.single('imgFile'), authProduct.allowUpdate], productController.editProduct);


router.get('/products/productlist', productController.getProductList);


router.delete('/products/:id/delete', authProduct.allowDelete, productController.deleteProduct);





module.exports = router
