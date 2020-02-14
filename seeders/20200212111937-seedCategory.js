'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [
      {
          "category":"Backlog",
          "createdAt":"NOW()",
          "updatedAt":"NOW()"
      },
      {
          "category":"Todo",
          "createdAt":"NOW()",
          "updatedAt":"NOW()"
      },
      {
          "category":"Done",
          "createdAt":"NOW()",
          "updatedAt":"NOW()"
      },
      {
          "category":"Completed",
          "createdAt":"NOW()",
          "updatedAt":"NOW()"
      }
  ] , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Categories', null, {});
  }
};
