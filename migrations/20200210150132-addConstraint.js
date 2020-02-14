'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addConstraint('Users', ['email'], {
       type : 'unique',
       name : 'email_unique'
     })
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeConstraint('Users', 'email_unique', {})
  }
};
