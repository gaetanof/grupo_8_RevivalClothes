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
    }
};

module.exports = controller;
