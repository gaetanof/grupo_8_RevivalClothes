const { Product, Cart, ProductCart } = require('../../database/models');

module.exports = {
    checkout: async (req, res) => {
        let order = await Cart.create({
            ...req.body,
            id_user: req.session.user.id
        },
        {
            include: Cart.ProductCart
        });
        res.json({ ok: true, status: 200, data: order })
    }
}