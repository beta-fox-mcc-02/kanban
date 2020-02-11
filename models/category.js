'use strict';
module.exports = (sequelize, DataTypes) => {

  class Category extends sequelize.Sequelize.Model {
    static associate(models) {
      Category.hasMany(models.Kanban)
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Name cannot null" },
        notEmpty: { args: true, msg: "Name cannot empty" }
      }
    }
  }, {
    sequelize
  })

  return Category;
};