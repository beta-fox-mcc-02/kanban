'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class projectUser extends Model{
    static associate(models){

    }
  }
  projectUser.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize
  });
  return projectUser;
};