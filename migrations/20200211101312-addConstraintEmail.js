'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.addConstraint('Users', ['email'], {
     type : 'unique',
     name : 'constraint_email'
   })
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.removeConstraint('Users', 'constraint_email')
  }
};
