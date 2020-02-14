'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'empty is not allowed'
        }
      }
    },
    description : {
      type :DataTypes.STRING
    },
    CategoryId: {
      type : DataTypes.INTEGER
    },
    OrganizationId: {
      type : DataTypes.INTEGER
    }
  }, {
    sequelize
  })
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsToMany(models.User, {through : models.UserTask})
    Task.belongsTo(models.Category)
    Task.belongsTo(models.Organization)
  };
  return Task;
};