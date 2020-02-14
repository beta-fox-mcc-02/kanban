'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'imageUrl');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'imageUrl', Sequelize.STRING);
  }
};
