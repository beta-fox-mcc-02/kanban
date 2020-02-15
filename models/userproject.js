'use strict';
module.exports = (sequelize, DataTypes) => {
  
  class UserProject extends sequelize.Sequelize.Model {
    static associate (models) {
      UserProject.belongsTo(models.User)
      UserProject.belongsTo(models.Project)
    }
  }
  UserProject.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize
  });

  return UserProject;
};