'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {

    }
  }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize})
  
  return User;
};