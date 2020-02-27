'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Category extends Model {
    static associate(models) {
      // associations can be defined here
      Category.hasMany(models.Task)
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'name is required'
        }
      }
    }
  },{
    sequelize
  })

  return Category;
};