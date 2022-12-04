'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flats', [{

      UserId: 1,
      address: 'Via Corridoni, 68',
      price: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 2,
      address: 'Via Corridoni, 76',
      price: 65,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Flats', null, {});

  }
};
