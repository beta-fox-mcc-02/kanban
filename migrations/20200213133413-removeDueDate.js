'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tasks', 'dueDate');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Task', 'dueDate', Sequelize.DATE);
  }
};
