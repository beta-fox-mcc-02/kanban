'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     let categories = [
       {
         "id" : 1, 
         "status" : "BACKLOG"
       },
       {
        "id" : 2, 
        "status" : "TODO"
      },
      {
        "id" : 3, 
        "status" : "DOING"
      },
      {
        "id" : 4, 
        "status" : "DONE"
      },
     ]
      return queryInterface.bulkInsert('Categories', categories, {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Categories', null, {});
  }
};
