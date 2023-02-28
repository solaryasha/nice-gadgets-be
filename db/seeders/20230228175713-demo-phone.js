'use strict';

/** @type {import('sequelize-cli').Migration} */
const data = require('../../mockup_data/phones.json');

const preaperedData = data.map(d => {
  return {
    ...d,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Phones', preaperedData , {});
  },

  async down (queryInterface, Sequelize) {
     return await queryInterface.bulkDelete('Phones', null, {});
  }
};
