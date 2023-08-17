const { body } = require('express-validator')
const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController')
const validations = require('../middlewares/productValidation')
let authProduct = require('../middlewares/authProductsMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/fotosProducto');
    },
    filename: function (req, file, cb) {
        const nombreDeArchivo = "/clothe" + Date.now() + path.extname(file.originalname)
        cb(null,nombreDeArchivo);
    }
})

const cargarImg = multer ({ storage })

// @GET /products/cart 
router.get('/products/cart', productController.getCarrito)

// @GET /products/create
router.get('/products/create',productController.getCreateProduct)

// @POST /products/create
router.post('/products/create',[cargarImg.single('imgFile'), validations.validateCreateProduct, authProduct.allowCreate], productController.create)

// @GET /products/publicado 
router.get('/products/publicado', productController.showPublished)

// @GET /products/:id/detalle 
router.get('/products/:id/detalle', productController.getDetalle);

// @GET /products/:id/editar 
router.get('/products/:id/editar',[ authMiddleware.allowSignedIn], productController.getEditProduct);

// @PUT /products/:id/editar
router.put('/products/:id/editar',[cargarImg.single('imgFile'),authProduct.allowUpdate], productController.editProduct);

// @GET /products/productlist 
router.get('/products/productlist', productController.getProductList);

// @DELETE /products/:id/delete 
router.delete('/products/:id/delete', authProduct.allowDelete, productController.deleteProduct);



module.exports = router