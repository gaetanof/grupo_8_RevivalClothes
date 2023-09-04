const { User } = require('../../database/models');

const controller = {
    getAll: async (req, res) => {
        const response = await User.findAll({ raw: true })
        response.map(el => {
            delete el.password;
            delete el.type;
            delete el.createdAt;
            delete el.updatedAt;
            delete el.deletedAt;
            el.detail = `http://localhost:5001/user/${el.id}/detalle`
        })
        return res.json({
            total: response.length,
            data: response
        })
    },
    getById: async (req, res) => {
        const id = req.params.id;

        const response = await User.findByPk(id)

        delete response.dataValues.password;
        delete response.dataValues.type;
        delete response.dataValues.createdAt;
        delete response.dataValues.updatedAt;
        delete response.dataValues.deletedAt;

        return res.json({ data: response })
    }
};

module.exports = controller;