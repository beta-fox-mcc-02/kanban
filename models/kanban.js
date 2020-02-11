'use strict';
module.exports = (sequelize, DataTypes) => {

  class Kanban extends sequelize.Sequelize.Model {
    static associate(models) {
      Kanban.belongsTo(models.User);
      Kanban.belongsTo(models.Category);
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
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "CategoryId cannot null" },
        notEmpty: { args: true, msg: "CategoryId cannot empty" }
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