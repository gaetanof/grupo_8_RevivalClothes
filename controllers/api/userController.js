const { User } = require('../../database/models');

const controller = {
    getAll: async (req, res) => {
        const response = await User.findAll({ raw: true })

        return res.json({
            total: response.length,
            data: response
        })
    },
    getById: async (req, res) => {
        const id = req.params.id;

        const response = await User.findByPk(id)

        return res.json({data: response})
    }
};

module.exports = controller;