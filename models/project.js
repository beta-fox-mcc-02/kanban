'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model {
    static associate (models) {
      Project.belongsToMany(models.User, {through: models.UserProject})
      Project.hasMany(models.Task)
    }
  }
  Project.init({
    title: DataTypes.STRING
  }, {
    sequelize
  });
  return Project;
};