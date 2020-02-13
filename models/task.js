'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{
    static associate (models) {
      Task.belongsTo(models.Project)
    }
  }
  Task.init({
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize
  });

  return Task;
};