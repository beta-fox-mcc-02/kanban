'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.Category, { foreignKey: 'category_id' })
      Task.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title is required'
        },
        notEmpty: {
          args: true,
          msg: 'Title is required'
        },
      }
    },
    description: {
      type: DataTypes.STRING
    },
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, { sequelize })
  return Task;
};