'use strict';
module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = require("sequelize")

  class Task extends Model {
    associate = function (models) {
      // associations can be defined here
    };
  }

  Task.init({
    title: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return Task;
};