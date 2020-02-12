'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{
    static associate(models){
      Task.belongsTo(models.User)
      Task.belongsTo(models.Category)
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING
    },
    CategoryId: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  })
  return Task;
};