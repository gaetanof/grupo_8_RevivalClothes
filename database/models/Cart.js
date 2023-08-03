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
        }
    }

    const config = {
        tableName: 'carts',
        paranoid: true
    }

    const Cart = sequelize.define(alias, cols, config);

    return Cart
}