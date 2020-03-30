'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Task)
      Category.belongsTo(models.User)
    }     
  }
  Category.init({
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return Category;
};