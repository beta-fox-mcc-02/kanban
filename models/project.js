'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Project extends Model{
    static associate(models){
      Project.belongsToMany(models.User, { through: models.projectUser }),
      Project.hasMany(models.Task)
    }
  }
  Project.init ({
    name: DataTypes.STRING
  }, {
    sequelize
  });
  return Project;
};