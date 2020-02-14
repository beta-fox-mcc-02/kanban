'use strict';
const bcrypt = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate (models){
      // User.hasMany(models.Task)
    }
  }
  User.init({
    email : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          args : true,
          msg : "Please Insert Email"
        },
        isEmail : {
          args : true,
          msg : "Please Insert Email"
        }
      }
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : {
          args : [8],
          msg : "Please Insert Password Minimal 8"
        }
      }
    }
  },
    {sequelize,
    hooks : {
      beforeCreate (user,option) {
        const generatepass = bcrypt.generate(user.password)
        user.password = generatepass
      }
    }
  })
  return User;
};