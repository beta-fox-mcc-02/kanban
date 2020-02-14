'use strict';
const { hashPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{
    static associate(models){
      User.hasMany(models.Task)
    }
  }
  
  User.init({
    first_name: {
      type: DataTypes.STRING
    }, 
    last_name: {
      type: DataTypes.STRING
    },
    necessary: {
      type: DataTypes.STRING
    },
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Must use format email (mail@mail.com)"
        }
      }
    },
    password: DataTypes.STRING
  }, 
  {
    sequelize,
    hooks: {
      beforeCreate : (user, options) => {
        user.password = hashPassword(user.password)
        return user.password
      }
    }
  })
  return User;
};