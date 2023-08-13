const express = require('express')
const router = express.Router();
const path = require('path');
const cartController = require('../controllers/cartController')
const authMiddleware = require('../middlewares/authMiddleware');


// @GET /cart//:id/:idUser/detail
router.get('/cart/detail', authMiddleware.allowSignedIn, cartController.getCarrtio);

// // @PUT /products/:id/editar
router.put('/cart/add', cartController.addToCart);

// // @GET /products/productlist 
// router.get('/products/productlist', productController.getProductList);

// // @DELETE /products/:id/delete 
// router.delete('/products/:id/delete', productController.deleteProduct);



module.exports = router