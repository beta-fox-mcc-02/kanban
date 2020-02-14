'use strict';
const bcrypt = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model{
    static associate(models){
      User.hasMany(models.Task)
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "Email not valid"
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user, options) => {
        let hp = bcrypt.hashPassword(user.password)
        user.password = hp
      }
    }
    ,
    sequelize
  })
  return User;
};