'use strict';
module.exports = (sequelize, DataTypes) => {

  class Kanban extends sequelize.Sequelize.Model {
    static associate(models) {
      Kanban.belongsTo(models.User)
    }
  }

  Kanban.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Title cannot null" },
        notEmpty: { args: true, msg: "Title cannot empty" }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Category cannot null" },
        notEmpty: { args: true, msg: "Category cannot empty" }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "UserId cannot null" },
        notEmpty: { args: true, msg: "UserId cannot empty" }
      }
    }
  }, {
    sequelize
  })

  return Kanban;
};