const { validationResult } = require('express-validator');
const { Cart, ProductCart, Product } = require('../database/models');

const controllers = {
    getCarrtio: async (req, res) => {
        const id_cart = req.params.id;
        try {
            const productsCarts = ProductCart.findAll({ 
                raw: true,
                where: {id_cart: id_cart}
             });
             
            const product = Product.findByPk(productsCarts.id_product);
            res.render('createCart', {productsCarts, product});
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
};

module.exports = controllers;