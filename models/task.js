'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User)
    }
  }
  Task.init ({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `title can't be empty`
        },
        notNull: {
          args: true,
          msg: `title can't be null`
        }
      },
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  });
  return Task;
};