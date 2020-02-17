'use strict';
module.exports = (sequelize, DataTypes) => {
  class UserTask extends sequelize.Sequelize.Model{}
  UserTask.init({
    UserId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {
    sequelize
  }); 
  UserTask.associate = function(models) {
    // associations can be defined here
  };
  return UserTask;
};