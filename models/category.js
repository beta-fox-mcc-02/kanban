'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model 

  class Category extends Model {
    static associate(models) {

    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize
  })
  
  return Category;
};