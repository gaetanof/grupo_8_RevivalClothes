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
    }
}