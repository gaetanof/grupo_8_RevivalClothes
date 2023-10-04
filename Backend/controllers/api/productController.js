const { Product } = require('../../database/models');
const axios = require('axios');

const controller = {
    getAll: async (req, res) => {
        const response = await Product.findAll({ raw: true })

        let contDeportiva = 1;
        let contSombrero = 1;
        let contAdulto = 1;
        let contMarca = 1;
        let contNino = 1;

        for (let i = 0; i < response.length; i++) {
            if (response[i].category == 'adulto') {
                contAdulto += 1;
            } else if (response[i].category == 'ninos') {
                contNino += 1;
            } else if (response[i].category == 'deportiva') {
                contDeportiva += 1;
            } else if (response[i].category == 'marca') {
                contMarca += 1;
            } else if (response[i].category == 'sombreros') {
                contSombrero += 1;
            } else if (response[i] == undefined) {
                continue;
            }
        }

        const countByCategory = {
            contDeportiva,
            contSombrero,
            contAdulto,
            contMarca,
            contNino
        }

        response.map(el => el.detaii = `/products/${el.id}/detalle`)

        return res.json({
            total: response.length,
            countByCategory: countByCategory,
            data: response
        })
    },
    getById: async (req, res) => {
        const id = req.params.id;

        const response = await Product.findByPk(id)

        return res.json(response)
    },
    getNProducts: async (req, res) => {
        const { count } = req.query;

        if (!count || isNaN(count)) {
            return res.status(400).json({ error: 'Invalid count parameter' });
        }

        const response = await Product.findAll({ limit: parseInt(count), raw: true });

        return res.json({
            total: response.length,
            data: response
        });
    },
    getProductsPages: async (req, res) => {
        const page = req.query.page || 1;
        const perPage = 5;

        if (!page || isNaN(page)) {
            return res.status(400).json({ error: 'Invalid page parameter' });
        }

        const response = await Product.findAll({ limit: parseInt(perPage), offset: (page - 1) * perPage, raw: true });

        const products = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products');
                return response
            } catch (error) {
                console.log(error);
            }
        }
        const result = await products()
        const totalProducts = result.data.total
        const totalPages = Math.ceil(totalProducts / perPage);

        return res.json({
            totalPages,
            data: response
        })
    }
};

module.exports = controller;
