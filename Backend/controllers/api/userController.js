const { User } = require('../../database/models');
const axios = require('axios')

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
        response.dataValues.image = `/images/fotosUsuario/${response.dataValues.image}`

        return res.json({ data: response })
    },
    getUsersPages: async (req, res) => {
        const page = req.query.page || 1;
        const perPage = 5;

        if (!page || isNaN(page)) {
            return res.status(400).json({ error: 'Invalid page parameter' });
        }

        const response = await User.findAll({ limit: parseInt(perPage), offset: (page - 1) * perPage, raw: true });

        const users = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/users');
                return response
            } catch (error) {
                console.log(error);
            }
        }
        const result = await users()
        const totalUsers = result.data.total
        const totalPages = Math.ceil(totalUsers / perPage);

        return res.json({
            totalPages,
            data: response
        })
    }
};

module.exports = controller;