'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products_cart', 'product_name', {
      type: Sequelize.STRING(100),
      allowNull: false,
    });

    await queryInterface.addColumn('products_cart', 'price', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    });

    await queryInterface.changeColumn('products_cart', 'id_product', {
      type: Sequelize.INTEGER,
      allowNull: true, // Cambio de allowNull a true
      defaultValue: null, // Agregar valor predeterminado null
    });

    await queryInterface.changeColumn('products_cart', 'deleted_at', {
      type: Sequelize.DATE, // Cambio de TIMESTAMP a DATE
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('products_cart', 'product_name');
    await queryInterface.removeColumn('products_cart', 'price');
    await queryInterface.changeColumn('products_cart', 'id_product', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.changeColumn('products_cart', 'deleted_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};
