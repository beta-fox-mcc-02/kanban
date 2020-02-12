'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {

    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          msg: 'email required'
        },
        isEmail: {
          args: true,
          msg: 'invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'passwod required'
        },
        len: {
          args: [6],
          msg: 'password required minimum length 6'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: function(user, option) {
        user.password = hashPassword(user.password)
      }
    }
  })
  
  return User;
};