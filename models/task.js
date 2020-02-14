'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      Task.belongsTo(models.User)
      Task.belongsTo(models.Category)
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'title cant be empty'
        },
        len:{
          args:[1,30],
          msg: 'title cant less than 1 and more than 30 character'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'description cant be empty'
        }
      }
    },
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, { sequelize })
  return Task;
};