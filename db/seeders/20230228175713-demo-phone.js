'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Phones', [{
      id: '1',
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: "4.7' IPS",
      capacity: '32GB',
      color: 'black',
      ram: '2GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7/black/00.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     return await queryInterface.bulkDelete('Phones', null, {});
  }
};
