'use strict';
const { hashPassword } = require('../helpers/password')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate (models) {
      User.hasMany(models.Task)
    }
  }

  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "please insert email correctly"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8],
          msg: "minimum password length 8"
        }
      }
    },
    role: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    validate: {
      uniqueEmail(next) {
        User.findOne({
          where: {
            email: this.email
          }
        })
          .then(data => {
            if (data === null) {
              next()
            } else {
              next('email has been declared another user')
            }
          })
          .catch(next)
      }
    },
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    }
  })

  return User;
};