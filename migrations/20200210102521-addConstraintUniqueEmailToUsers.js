'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['email'], {type: 'UNIQUE'})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', ['email'])
  }
};
