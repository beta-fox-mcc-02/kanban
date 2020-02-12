'use strict';
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.belongsToMany(models.Organization, {
        through: models.OrganizationMember
      })
      User.belongsToMany(models.Task, {
        through: models.TaskUser
      })
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'name required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'email required'
        },
        isEmail: {
          args: true,
          msg: 'email format required'
        }
      },
      unique: {
        args: true,
        msg: 'email has already existed'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'password required'
        },
        len: {
          args: [6],
          msg: 'Minimum password length is 6 characters'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        let hash = hashPassword(user.password)
        user.password = hash
      }
    }
  })
  return User;
};