const path = require('path');
const fs = require('fs');

const controllers = {
    getIndex: (req, res) => {
    fs.readFile(path.join(__dirname, '../data/productos.json'), 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo de productos', err);
        // Manejar el error apropiadamente
        return;
      }
      const productos = JSON.parse(data);
      res.render('main/home', { productos });
    });
  }
};

module.exports = controllers;
