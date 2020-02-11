'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Task extends Model {
    static associate (models) {
      
    }
  }

  Task.init({
    title: {
      type: DataTypes.STRING
    },
    CategoryId: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  })
  return Task;
};