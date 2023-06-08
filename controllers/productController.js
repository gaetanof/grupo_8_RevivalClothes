const path = require('path')

const controllers = {
    getDetalle: (req, res) => {
        res.render('detalle');
    },
    getCarrito: (req, res) => {
        res.render('carrito');
    },
    getCreateProduct: (req, res) => {
        res.render('createProduct');
    },
    
    create: function(req,res){
        let producto = {
          titulo: req.body.titulo,
          precio: req.body.precio,
          foto: req.body.foto,
        }
        res.redirect("/product/publicado")
    }

    
}

module.exports = controllers;