'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      id: Sequelize.DataTypes.STRING,
      category: Sequelize.DataTypes.STRING,
      phoneId: Sequelize.DataTypes.STRING,
      itemId: Sequelize.DataTypes.STRING,
      name: Sequelize.DataTypes.STRING,
      fullPrice: Sequelize.DataTypes.INTEGER,
      price: Sequelize.DataTypes.INTEGER,
      screen: Sequelize.DataTypes.STRING,
      capacity: Sequelize.DataTypes.STRING,
      color: Sequelize.DataTypes.STRING,
      ram: Sequelize.DataTypes.STRING,
      year: Sequelize.DataTypes.INTEGER,
      image: Sequelize.DataTypes.STRING
     });
  },

  async down (queryInterface, Sequelize) {
     return await queryInterface.dropTable('Phones');
  }
};
