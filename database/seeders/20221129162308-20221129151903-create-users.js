'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
<<<<<<< HEAD
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Vernon',
      lastNamer: 'Mbah',
      city:      'Pisa'
    }], {});

=======
     await queryInterface.bulkInsert('user', [{
       firstName: 'Vernon',
       lastNamer: 'Mbah',
       city:      'Pisa'
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
