module.exports = (sequelize, DataTypes) => {
    const alias = 'Cart';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.STRING(255),
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        shippingMethod: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
    }

    const config = {
        tableName: 'carts',
        paranoid: true
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        Cart.belongsToMany(models.Product, {
            as: 'cart_id_cart_products',
            through: 'products_cart',
            foreignKey: 'id_cart',
            otherKey: 'id_product',
        });

        Cart.cart_id_cart_products = Cart.hasMany(models.ProductCart, {
            as: "orderItems",
          });
    }

    return Cart
}