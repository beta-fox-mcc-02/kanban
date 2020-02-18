'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Category extends Model{}

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please insert the category'
        }
      }
    }
  }, {
    sequelize
  })

  Category.associate = function(models) {
    Category.hasMany(models.Task);
  };
  return Category;
};