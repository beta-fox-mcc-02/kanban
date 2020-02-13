'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     let categories = [
       {
         "id" : 1, 
         "status" : "backlog"
       },
       {
        "id" : 2, 
        "status" : "todo"
      },
      {
        "id" : 3, 
        "status" : "doing"
      },
      {
        "id" : 4, 
        "status" : "done"
      },
     ]
      return queryInterface.bulkInsert('Categories', categories, {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Categories', null, {});
  }
};
