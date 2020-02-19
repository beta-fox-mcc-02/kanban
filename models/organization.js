'use strict';
module.exports = (sequelize, DataTypes) => {
  class Organization extends sequelize.Sequelize.Model {
    static associate(models) {
      Organization.belongsToMany(models.User, {
        through: models.OrganizationMember
      })
      Organization.hasMany(models.Task)
    }
  }

  Organization.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'organization name required'
        },
        notEmpty: {
          args: true,
          msg: 'organization name required'
        }
      }
    }
  }, {
    sequelize
  })
  
  return Organization;
};