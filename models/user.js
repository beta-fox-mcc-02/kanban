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
          msg: 'Email format is invalid'
        },
        notEmpty: {
          args: true,
          msg: 'Email can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password can not be empty'
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

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task, {foreignKey: 'id'});
  };
  return User;
};