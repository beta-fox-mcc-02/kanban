'use strict';
const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {

    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Please, input your name'
        }
      }
    }, 
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "Invalid Format Email"
        },
        notEmpty : {
          args : true,
          msg : "Please, input your email"
        }
      }
    }, 
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Please, input your password"
        },
        lengthPassword(value, next) {
          if (value.length >= 8) {
            next()
          } else {
            next("Password minimal 8 character")
          }
        }
      }
    } 
  }, {
    sequelize,
    hooks : {
      beforeValidate : (user, options) => {
        let password = user.password
        let hashingPassword = hashPassword(password)
        user.password = hashingPassword
      }
    }
  })

  return User;
};