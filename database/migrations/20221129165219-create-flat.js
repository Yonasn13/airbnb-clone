'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    queryInterface.addColumn(
      'Flats', 'imgSrc', Sequelize.STRING
    ) 
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flats');
    queryInterface.removeColumn(
      'Flats', 'imgSrc'
    ) 
  }
};