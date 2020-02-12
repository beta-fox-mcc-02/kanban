'use strict';
const { userCreate } = require('../helpers/hooksHelper.js')
const { isEmail } = require('../helpers/validationHelper.js')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: { isEmail }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: userCreate
    }
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};