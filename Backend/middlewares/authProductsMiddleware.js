const { Product } = require('../database/models');
const axios = require('axios');

const productsMiddleware = {
    allowCreate: (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },

    allowUpdate: async (req, res, next) => {
        const id = req.params.id;
        const endpoint = `http://localhost:5001/api/${id}/products`
        const product = await axios.get(endpoint)
        if (req.session.user.id === product.data.id_user) {
            next();
        } else {
            res.redirect(`/products/${id}/detalle`);
        }
    },

    allowDelete: async (req, res, next) => {
        const id = req.params.id;
        const endpoint = `http://localhost:5001/api/${id}/products`

        const response = await axios.get(endpoint);

        if (req.session.user.id === response.data.id_user) {
            next();
        } else {
            res.redirect(`/products/${id}/detalle`);
        }
    }
}

module.exports = productsMiddleware;