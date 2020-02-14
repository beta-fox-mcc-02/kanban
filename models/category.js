'use strict';
module.exports = (sequelize, DataTypes) => {
  class Category extends sequelize.Sequelize.Model {
    static associate(models) {
      Category.hasMany(models.Task)
    }
  }
  Category.init({
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'category cant be empty'
        }
      }
    }
  }, { sequelize })
  return Category;
};