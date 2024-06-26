module.exports = (sequelize, DataTypes) => {
    const alias = 'Product';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        id_user: {
            type: DataTypes.STRING(255),
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }

    const config = {
        tableName: 'products',
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.User,{
        as: 'user',
        foreignKey:'id_user'
    });
    Product.belongsToMany(models.Cart,{
        as: 'cart_id_cart_products',
        through:'product_cart',
        foreignKey:'id_cart',
        otherKey:'id_product',
    })

    }

    return Product
}