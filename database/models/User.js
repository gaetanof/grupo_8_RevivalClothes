module.exports = (sequelize, DataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        full_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            defaultValue: 'default_user.jpg'
        },
        deleted: {
            type: DataTypes.STRING(255),
            defaultValue: 0
        }
    };

    const config = {
        tablename: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}