'use strict';
const BcryptPassword = require('../helpers/bcryptPassword.js')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: {
        args: true,
        msg: `INVALID INPUT`
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        if(!user.name) {
          let indexOfAt = user.email.indexOf('@')
          user.name = user.email.substring(0, indexOfAt)
        }
        user.password = BcryptPassword.hashing(user.password)
      }
    }
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};