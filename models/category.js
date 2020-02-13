'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Task, { foreignKey: 'id' })
      Category.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Category name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Category name is required'
        },
      }
    },
    user_id: DataTypes.INTEGER
  }, { sequelize })
  return Category;
};