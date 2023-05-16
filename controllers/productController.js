const path = require('path')

const controllers = {
    getDetalleProducto: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/detalleProducto.html'));
    },
}

module.exports = controllers;