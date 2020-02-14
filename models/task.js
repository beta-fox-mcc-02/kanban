'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{
    static associate (models){
      Task.belongsTo(models.User),
      Task.belongsTo(models.Category)
    }
  }

  Task.init({
    title: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    UserId : DataTypes.INTEGER
  },{sequelize})

  return Task;
};