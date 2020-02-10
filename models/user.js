'use strict';
const bcrypt = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          message: 'Email format is wrong'
        },
        notEmpty: {
          args: true,
          message: 'Email can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          message: 'Password can not be empty'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashPassword(user.password);
      }
    }
  })
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};