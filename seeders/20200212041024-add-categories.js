'use strict';

const categories = [
  {
    name: 'Backlog'
  },
  {
    name: 'Todo'
  },
  {
    name: 'Done'
  },
  {
    name: 'Completed'
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', categories , {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
};
