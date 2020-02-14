'use strict';
module.exports = (sequelize, DataTypes) => {
  const { hash } = require('../helpers/bcrypt');

  const Model = sequelize.Sequelize.Model;
  class User extends Model{};

  User.init({
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args:true,
          msg: "Please insert your email"
        },
        isEmail: {
          args: true,
          msg: "Email format error"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: "Minimum 6 characters required"
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hash(user.password);
      }
    }
  })
  
  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};