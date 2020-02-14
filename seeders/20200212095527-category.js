'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [{
      name: 'backlog',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'product',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'development',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'done',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});

  }
};