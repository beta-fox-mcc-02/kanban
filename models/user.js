'use strict';
const bcrypt = require('bcryptjs')
const SALT = Number(process.env.SALT)

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {
    static associate (models) {
      User.hasMany(models.Task)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Please enter your name'
        },
        notEmpty: {
          args: true,
          msg: 'Please enter your name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isEmail: {
          args: true,
          msg: 'Email Format Wrong !'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        // Has di sini
        const hash = bcrypt.hashSync(user.password, SALT)
        user.password = hash
      }
    }
  })
  
  return User;
};