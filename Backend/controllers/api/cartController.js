const { Product, Cart, ProductCart } = require('../../database/models');

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
    }
}