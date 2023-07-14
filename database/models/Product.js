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
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product
}