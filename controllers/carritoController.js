const path = require('path')

const controllers = {
    getCarrito: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/carrito.html'));
    },
}

module.exports = controllers;