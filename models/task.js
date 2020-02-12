'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  
  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'Title cannot be empty'}
      }
    },
    description: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.STRING
    },
    CategoryId: {
      type: DataTypes.STRING
    }
  }, {
    sequelize
  })

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User, {foreignKey: 'UserId'});
    Task.belongsTo(models.Category, {foreignKey: 'CategoryId'})
  };
  return Task;
};