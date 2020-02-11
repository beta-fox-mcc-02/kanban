'use strict';
const { hashingPassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{
    static associate(models){

    }
  }
  User.init({
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
      beforCreate : (user, options) => {
        let pass  = hashingPassword(user.hashingPasswordd)
      }
    }
  })
  return User;
};