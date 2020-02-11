'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model{
    static associate(models){}
  }
  Task.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING
  },
  {
    sequelize
  })

  return Task;
};