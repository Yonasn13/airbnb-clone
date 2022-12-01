'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'Vernon',
      lastName: 'Mbah',
      city:      'Pisa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {id: 2,
    firstName: 'Vernon',
    lastName: 'Mbah',
    city:      'Pisa',
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  
  }
};
