'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tests',[{kata:'hello', createdAt:"now()", updatedAt:"now()"}, 
    {kata:'world', createdAt:"now()", updatedAt:"now()"} ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('tests', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('test', null, {});
    */
   return queryInterface.bulkDelete('tests', null, {});

  }
};
