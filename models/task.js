'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model{
    static associate(models){
      Task.belongsTo(models.Project)
    }
  }
  Task.init({
    title: DataTypes.STRING,
    assignee: DataTypes.STRING,
    desc: DataTypes.STRING,
    status: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize
  });
 
  return Task;
};