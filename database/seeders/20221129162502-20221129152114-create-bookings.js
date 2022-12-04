'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [{
      UserId: 2,
      FlatId: 1,
      startDate: new Date('2022-12-15'),
      endDate: new Date('2022-12-17'),
      confirmed: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});

  }
};
