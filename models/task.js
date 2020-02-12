'use strict';
const { eachWordCaps } = require('../helpers/hooksHelper.js')
const { len } = require('../helpers/validationHelper.js')

module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: { len }
    },
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: eachWordCaps,
      beforeUpdate: eachWordCaps
    }
  })
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};