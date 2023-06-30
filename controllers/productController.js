const { validationResult } = require('express-validator');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs-extra');

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


		res.render('detalle', { producto: producto });
	},


	getCarrito: (req, res) => {
		res.render('carrito');
	},

	getCreateProduct: (req, res) => {
		res.render('createProduct');
	},

	create: function (req, res) {
		let errors = validationResult(req);
		console.log(req.body);
		console.log(errors);
		if (errors.isEmpty()) {
			if (req.file) {
				let producto = {
					id: uuid.v4(),
					titulo: req.body.titulo,
					talla: req.body.talle,
					precio: req.body.precio,
					genero: req.body.genero,
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
						console.log("Se creo con exito");
						res.render('publishedProduct', { productoId: producto.id });
					});
				});
			}
		} else {
			res.render('createProduct', {
				errors: errors.array(),
				old: req.body,
			})
		}
	},
	showPublished: (req, res) => {
		res.render('publishedProduct');
	},
};

module.exports = controllers;
