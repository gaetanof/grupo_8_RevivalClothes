const { Product } = require('../../database/models');
const axios = require('axios');

const controller = {
    getAll: async (req, res) => {
        const response = await Product.findAll({ raw: true })

        return res.json({
            total: response.length,
            data: response
        })
    },
    getById: async (req, res) => {
        const id = req.params.id;

        const response = await Product.findByPk(id)

        return res.json(response)
    }
};

module.exports = controller;
