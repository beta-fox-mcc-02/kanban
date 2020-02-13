'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      //   // User.hasMany(models.UserTask)
      //   User.belongsToMany(models.Task, {through: models.UserTask})
      User.belongsToMany(models.Project, { through: models.UserProject })
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        },
        isEmail: {
          args: true,
          msg: `email must be according to email format`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        },
        len: [5]
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: user => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash
      }
    }
  });

  return User;
};