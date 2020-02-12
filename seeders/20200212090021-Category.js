'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Backlog',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Development',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
