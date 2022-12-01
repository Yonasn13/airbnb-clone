'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
<<<<<<< HEAD
    await queryInterface.bulkInsert('Flats', [{
      address: 'Via Corridoni, 68',
      price: '$17',
    }], {});

=======
    await queryInterface.bulkInsert('Flat', [{
      startDate: Date,
      endDate: Date,
      confirm: false
    }], {});
    
>>>>>>> 4351c8a32709135224685b6d23b515fec4444dc4
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
