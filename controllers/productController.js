const path = require('path')

const controllers = {
    getDetalle: (req, res) => {
        res.render('detalle');
    },
    getCarrito: (req, res) => {
        res.render('carrito');
    }
}

module.exports = controllers;