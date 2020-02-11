'use strict';
module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = require("sequelize")

  class Category extends Model {
    associate = function (models) {
      // associations can be defined here
    };
  }

  Category.init({
    name: DataTypes.STRING
  })

  return Category;
};