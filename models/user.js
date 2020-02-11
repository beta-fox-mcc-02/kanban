'use strict';
module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = require("sequelize")

  class User extends Model {
    associate = function (models) {
      // associations can be defined here
    };
  }

  User.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Must be valid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3],
          msg: "Password must be at least 3 characters"
        }
      }
    }
  }, {
    sequelize
  })

  return User;
};