'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Kanbans', 'category')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Kanbans', 'category', Sequelize.STRING)
  }
};
