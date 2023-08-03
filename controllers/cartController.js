const { validationResult } = require('express-validator');
const { Cart, ProductCart, Product } = require('../database/models');

const controllers = {
    getCarrtio: async (req, res) => {
        const id_cart = req.params.id;

        const cartProduct = await Cart.findAll({
            include: 'cart_id_cart_products',
            nest: true,
            where: {id: id_cart}
        })

        console.log(cartProduct);

        res.render('cartDetail', {cartProduct})

        
    },
    updateCart: async (req, res) => {
        const idUser = req.session.user.id;

        
    }
};

module.exports = controllers;