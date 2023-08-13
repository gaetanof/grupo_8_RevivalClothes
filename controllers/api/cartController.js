const { Product, Cart, ProductCart } = require('../../database/models');

module.exports = {
    checkout: async (req, res) => {
        let order = await Cart.create({
            ...req.body,
            id_user: req.session.user.id
        },
        {
            include: [Cart.cart_id_cart_products],
            raw: true
        });

        console.log(order.dataValues);
        res.json({ ok: true, status: 200, order: order })
    }
}