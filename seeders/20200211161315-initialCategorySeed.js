'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: "backlog",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "product",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "development",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "done",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
