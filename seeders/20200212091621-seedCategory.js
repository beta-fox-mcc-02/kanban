'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let categories = [
      {
        name : 'Backlog',
        createdAt:"now()", 
        updatedAt:"now()"
      },
      {
        name : 'Todo',
        createdAt:"now()", 
        updatedAt:"now()"
      },
      {
        name : 'Done',
        createdAt:"now()", 
        updatedAt:"now()"
      },
      {
        name : 'Completed',
        createdAt:"now()", 
        updatedAt:"now()"
      }
    ]
    return queryInterface.bulkInsert('Categories', categories, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

  }
};
