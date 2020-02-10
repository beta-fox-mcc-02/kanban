'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dummies', [
      {
        name: 'Ulrich Wake',
        email: 'uulwake@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Foo Bar',
        email: 'foobar@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dummies', null, {});
  }
};
