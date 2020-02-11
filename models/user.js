'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Kanban)
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Username cannot null" },
        notEmpty: { args: true, msg: "Username cannot empty" }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Email cannot null" },
        notEmpty: { args: true, msg: "Email cannot empty" },
        isEmail: { args: true, msg: "Invalid email" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Password cannot null" },
        notEmpty: { args: true, msg: "Password cannot empty" },
        len: { args: [5, 20], msg: "Password length between 5-20 characters" }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(user, options) {
        user.password = hashPassword(user.password);
      }
    }
  })

  return User;
};