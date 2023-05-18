const path = require('path')

const controllers = {
    getDetalleProducto: (req, res) => {
        res.render('detalleProducto');
    },
    getCarrito: (req, res) => {
        res.render('carrito');
    }
}

module.exports = controllers;