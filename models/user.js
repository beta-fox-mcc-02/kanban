'use strict';
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {}
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:{
          args: true,
          msg: "Invalid email format. Please input valid email format."
        },
        notNull:{
          args: true,
          msg: "Email is required"
        },
        notEmpty: {
          args: true,
          msg: "Email is required"
        } 
      }
    },
    password: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
    verifToken: DataTypes.STRING
  }, {
    sequelize
  })

  User.addHook('beforeCreate', (user, options) => {
    const hash = bcrypt.hashSync(user.password, salt)
    user.password = hash
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  }
  return User
};