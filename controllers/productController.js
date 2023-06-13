const path = require('path');
const uuid = require('uuid');
const fs = require('fs-extra');
const { validationResult } = require('express-validator');

const controllers = {
    getDetalle: (req, res) => {
        const productoDetalladoId = req.params.id;

      const productosJSON = fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8')
          if (!productosJSON) {
            console.error('Error al leer el archivo de productos', err);
            // Manejar el error apropiadamente
            return;
          }
      
          const productos = JSON.parse(productosJSON);
      
          // Buscar el producto correspondiente según el ID
          const producto = productos.find((p) => p.id === productoDetalladoId);
        console.log(producto)
        //   if (!producto) {
        //     console.error('No se encontró el producto con el ID especificado');
        //     console.log(req.params)

        //     // Manejar el escenario donde no se encuentra el producto
        //     return;
        //   }
      
          res.render('products/detalle', { producto: producto });
    },
      

  getCarrito: (req, res) => {
    res.render('products/carrito');
  },

  getCreateProduct: (req, res) => {
    res.render('products/createProduct');
  },

  create: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
    if (req.file) {
      let producto = {
        id: uuid.v4(),
        titulo: req.body.titulo,
        talla: req.body.talle,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: req.file.filename,
      };

      fs.readFile(path.join(__dirname, '../data/productos.json'), 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo de productos', err);
          return;
        }

        const productos = JSON.parse(data);

        productos.push(producto);

        fs.writeFile(path.join(__dirname, '../data/productos.json'), JSON.stringify(productos), 'utf8', (err) => {
          if (err) {
            console.error('Error al escribir el archivo de productos', err);
            return;
          }

          console.log('Producto agregado exitosamente');

          res.render('products/publishedProduct', { productoId: producto.id });
        });
      });
    }
    } else {
      res.render('products/createProduct' , { 
        errors: errors.array(),
        old: req.body,
     }) 
    }
  },
  showPublished: (req, res) => {
    res.render('products/publishedProduct');
  },
};

module.exports = controllers;
