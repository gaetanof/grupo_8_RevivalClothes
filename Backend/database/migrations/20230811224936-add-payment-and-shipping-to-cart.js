'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('carts', 'paymentMethod', {
      type: Sequelize.STRING(100),
      allowNull: false,
    });

    await queryInterface.addColumn('carts', 'shippingMethod', {
      type: Sequelize.STRING(100),
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('carts', 'paymentMethod');
    await queryInterface.removeColumn('carts', 'shippingMethod');
  }
};
