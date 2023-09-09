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
    filename: async (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/; // Lista de extensiones permitidas
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Solo se permiten archivos de imagen: JPEG, JPG, PNG y GIF'));
        }
    }
});

const cargarImg = multer({ storage })

// @GET /products/create
router.get('/products/create', authMiddleware.allowSignedIn, productController.getCreateProduct)

// @POST /products/create
router.post('/products/create', [upload.single('imgFile'), validations.validateCreateProduct, authProduct.allowCreate], productController.create)

// @GET /products/:id/detalle 
router.get('/products/:id/detalle', productController.getDetalle);

// @GET /products/:id/editar 
router.get('/products/:id/editar', [authMiddleware.allowSignedIn], productController.getEditProduct);

// @PUT /products/:id/editar
router.put('/products/:id/editar', [cargarImg.single('imgFile'), authProduct.allowUpdate], productController.editProduct);

// @GET /products/productlist 
router.get('/products/productlist', productController.getProductList);

// @DELETE /products/:id/delete 
router.delete('/products/:id/delete', authProduct.allowDelete, productController.deleteProduct);



module.exports = router