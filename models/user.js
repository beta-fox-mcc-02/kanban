'use strict';
const {encryptPass} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate (models) {
      User.hasMany(models.Task)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,  
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate : (user, options) => {
        console.log(user.password)
        user.password = encryptPass(user.password)
      }
    }
  })

  return User;
};