'use strict';
const { hashPassword, checkPassword }  = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const Op = sequelize.Sequelize.Op
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique() {
          return User.findOne({
            where: {
              [Op.and]: [{username: this.username}, {id: {[Op.ne]: this.id}}]
            }
          })
          .then((found) => {
            if (found) {
              throw new Error('username already exists')
            }
          })
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid email format'
        },
        isUnique() {
          return User.findOne({
            where: {
              [Op.and]: [{email: this.email}, {id: {[Op.ne]: this.id}}]
            }
          })
          .then((found) => {
            if (found) {
              throw new Error('duplicated email')
            }
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      len: {
        args: [6],
        msg: 'minimum password length is 6' 
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    }
  });

  return User;
};