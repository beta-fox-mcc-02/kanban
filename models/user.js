'use strict';
const BcryptPassword = require('../helpers/bcryptPassword.js')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5],
          msg: `NAME TOO SHORT!`
        },
        isAlpha: {
          args: true,
          msg: `NAME IS NOT A WORD`
        }
      }
    },
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
        user.password = BcryptPassword.hashing(user.password)
      },
      afterFind: (user, options) => {
        user.password = `--SECRET--`
      }
    }
  })
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};