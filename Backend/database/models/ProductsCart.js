module.exports = (sequelize, DataTypes) => {
    const alias = 'ProductCart';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_cart: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'carts',
                key: 'id'
            }
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    }

    const config = {
        tableName: 'products_cart',
        paranoid: true
    }

    const ProductCart = sequelize.define(alias, cols, config);

    ProductCart.associate = (models) => {
        ProductCart.belongsTo(models.Cart, {
            as: "order",
        });
    }

    return ProductCart
}