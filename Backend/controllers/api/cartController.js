const { Product, Cart, ProductCart } = require('../../database/models');
const axios = require('axios')

module.exports = {
    checkout: async (req, res) => {
        let order = await Cart.create({
            ...req.body,
            id_user: req.session.user.id
        });
        const newProducts = req.body.cart_id_cart_products.map(el => ({
            id_cart: order.dataValues.id,
            ...el
        }))
        ProductCart.bulkCreate(newProducts)
        // console.log(order.dataValues);
        res.json({ ok: true, status: 200, order: order })
    },
    getAll: async (req, res) => {
        const response = await Cart.findAll({ raw: true })
        response.map(el => {
            delete el.createdAt;
            delete el.updatedAt;
            delete el.deletedAt;
        })
        return res.json({
            total: response.length,
            data: response
        })
    },
    getCartsPages: async (req, res) => {
        const page = req.query.page || 1;
        const perPage = 5;

        if (!page || isNaN(page)) {
            return res.status(400).json({ error: 'Invalid page parameter' });
        }

        const response = await Cart.findAll({ limit: parseInt(perPage), offset: (page - 1) * perPage, raw: true });

        const carts = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/carts');
                return response
            } catch (error) {
                console.log(error);
            }
        }
        const result = await carts()
        const totalCarts = result.data.total
        const totalPages = Math.ceil(totalCarts / perPage);

        return res.json({
            totalPages,
            data: response
        })
    }
}