'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        isUnique: true,
        allowNull: {
          args: false,
          msg: "Please input the email address"
        },
        validate: {
          isEmail : {
            args: true,
            msg: "Please input the right email format"
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          len: {
            args: [6],
            msg: "Password minimun 6 characters"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};