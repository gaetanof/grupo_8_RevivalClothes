const { validationResult } = require('express-validator');
const { Cart, ProductCart, Product } = require('../database/models');

const controllers = {
    getCarrtio: async (req, res) => {
        // const id_cart = req.params.id;

        // try {
        //     const cartProduct = await Cart.findAll({
        //         include: 'cart_id_cart_products',
        //         nest: true,
        //         where: {id: req.session.user.id}
        //     });
        //     console.log(cartProduct)
            
        // } catch (error) {
        //     console.log(error);
        //     res.send(error);
        // }

        res.render('cartDetail', {user: req.session.user});
    },
    addToCart: async (req, res) => {
        const idUser = req.session.user.id;

    }
};

module.exports = controllers;