const { Product } = require('../database/models');

const productsMiddleware = {
    allowCreate: (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/user/login');
        }
    },

    allowUpdate: async (req, res, next) => {
        const id = req.body.id;
        const product = await Product.findByPk(id);

        if (req.session.user.id === product.id_user) {
            next();
        } else {
            res.redirect(`/products/${id}/detalle`);
        }
    },

    allowDelete: async (req, res, next) => {
        const id = req.body.id;
        const product = await Product.findByPk(id);

        if (req.session.user.id === product.id_user) {
            next();
        } else {
            res.redirect(`/products/${id}/detalle`);
        }
    }
}

module.exports = productsMiddleware;