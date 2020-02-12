'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskUser = sequelize.define('TaskUser', {
    TaskId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  TaskUser.associate = function(models) {
    // associations can be defined here
  };
  return TaskUser;
};