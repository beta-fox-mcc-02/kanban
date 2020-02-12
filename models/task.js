'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      Task.belongsTo(models.Category)
      Task.belongsTo(models.Organization)
      Task.belongsToMany(models.User, {
        through: models.TaskUser
      })
    }
  }

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'task title required'
        }
      }
    },
    description: {
      type: DataTypes.STRING
    },
    CategoryId: {
      type: DataTypes.INTEGER
    },
    OrganizationId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  })
  return Task;
};