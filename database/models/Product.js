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
        }
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
        as: 'carts',
        through:'product_cart',
        foreignKey:'id_product',
        otherKey:'id_cart',
        timestamps: false,
        onDelete: 'CASCADE' // Agrega esta línea
    })

    }

    return Product
}