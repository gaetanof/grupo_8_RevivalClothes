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
        }
    }

    const config = {
        tableName: 'products_cart',
        paranoid: true
    }

    const ProductCart = sequelize.define(alias, cols, config);

    return ProductCart
}