'use strict';
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Task extends Model{}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please insert the title"
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please insert the category"
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  Task.associate = function(models) {
    Task.belongsTo(models.User);
    Task.belongsTo(models.Category);
  };
  return Task;
};