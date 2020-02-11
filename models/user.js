'use strict';
const { hash } = require('../helper/bcrypt')
const { User } = require('../models')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {

    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4],
          msg: 'username length cant less than 4 character'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'please input your email correctly'
        },
        notNull: {
          args: true,
          msg: 'email cant be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'password cant be empty'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (data, options) => {
        data.password = hash(data.password)
      }
    }
  })
  return User;
};