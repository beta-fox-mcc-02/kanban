'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const data = [
        {
          title: 'Backlog1',
          UserId: 1,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Todo1',
          UserId: 1,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Done1',
          UserId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Completed1',
          UserId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Backlog2',
          UserId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
      return queryInterface.bulkInsert('Kanbans', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Kanbans', null, {});
  }
};
