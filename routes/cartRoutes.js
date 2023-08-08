const express = require('express')
const router = express.Router();
const path = require('path');
const cartController = require('../controllers/cartController')


// @GET /cart//:id/:idUser/detail
router.get('/cart/:id/detail', cartController.getCarrtio);

// // @PUT /products/:id/editar
router.put('/cart/add', cartController.addToCart);

// // @GET /products/productlist 
// router.get('/products/productlist', productController.getProductList);

// // @DELETE /products/:id/delete 
// router.delete('/products/:id/delete', productController.deleteProduct);



module.exports = router