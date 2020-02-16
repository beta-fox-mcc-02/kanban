const {hashing} = require('../helpers/bcrypt')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {
      // associations can be defined here
      User.hasMany(models.Task)
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email cannot empty"
        },
        isEmail: {
          msg: "Please write the correct email format"
        },
        isUnique(input, next) {
          User.findAll()
            .then(users => {
              if(!users.length) {
                next()
              } else {
                let match = false
                users.forEach(user => {
                  if(user.email === input) match = true
                });
                if(match) next("Email is already used")
                else next()
              }
            })
            .catch(next)
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      individualHooks: true
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashing(user.password)
      },

      beforeUpdate: (user, options) => {
        user.password = hashing(user.password)
      }
    }
  });
  return User;
};