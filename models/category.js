'use strict';
module.exports = (sequelize, DataTypes) => {
  class Category extends sequelize.Sequelize.Model{}
  Category.init({
    name: DataTypes.STRING,
    OrganizationId: DataTypes.INTEGER
  }, {
    sequelize
  }); 
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Task)
    Category.belongsTo(models.Organization)
  };
  return Category;
};