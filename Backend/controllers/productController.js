const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const { Product, User } = require('../database/models');

const controllers = {
	getDetalle: async (req, res) => {
		const id = req.params.id;
		const product = await Product.findByPk(id)
		const user = req.session.user;
		res.render('detalle', { product, user });
	},

	getCreateProduct: (req, res) => {
		const user = req.session.user;
		res.render('createProduct', { user });
	},

	create: async (req, res) => {
		let errors = validationResult(req);
		console.log(req.body)
		if (errors.isEmpty()) {
			if (req.file) {
				try {
					const product = await Product.create({
						...req.body,
						image: req.file.filename,
						id_user: req.session.user.id
					})
					res.redirect(`/products/${product.id}/detalle`)
				} catch (error) {
					console.log(error);
					res.send(error);
				}
			} else {
				res.render('createProduct', {
					old: req.body,
					img: req.file || ''
				});
			}
		} else {
			res.render('createProduct', {
				errors: errors.array(),
				old: req.body,
			})
		}

	},
	getEditProduct: async (req, res) => {
		const id = req.params.id
		const user = req.session.user
		try {
			const product = await Product.findByPk(id)
			res.render('editProduct', { product, user })
		} catch (error) {
			console.log(error),
				res.send(error)
		}
	},
	editProduct: async (req, res) => {
		const id = req.params.id
		let newData = req.body;

		delete newData.old_productImg;
		newData.image = req.file ? req.file.filename : req.body.old_productImg;
		console.log(req.body)
		try {
			await Product.update({
				...newData,
				image: newData.image
			}, {
				where: {
					id: id
				}
			})

			const product = await Product.findByPk(id);
			res.redirect(`/products/${product.id}/detalle`)
		} catch (error) {
			console.log(error),
				res.send(error)
		}
	},
	deleteProduct: async (req, res) => {
		const id = req.params.id

		try {
			await Product.destroy({
				where: {
					id: id
				}
			})
			res.redirect('/products/productlist')
		} catch (error) {
			console.log(error),
				res.send(error)
		}
	},
	getProductList: async (req, res) => {
		try {
			const user = req.session.user;
			const productos = await Product.findAll({
				raw: true
			});
			res.render('productList', { productos, user })
		}
		catch (error) { console.log(error) }
	}

};

module.exports = controllers;
