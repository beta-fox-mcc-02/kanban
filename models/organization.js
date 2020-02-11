'use strict';
module.exports = (sequelize, DataTypes) => {
  class Organization extends sequelize.Sequelize.Model{}
  Organization.init({
    name: DataTypes.STRING,
    created: DataTypes.STRING
  }, {
    sequelize
  }); 
  Organization.associate = function(models) {
    // associations can be defined here
    Organization.belongsToMany(models.User, {through : models.UserOrganization})
    Organization.hasMany(models.Task)
  };
  return Organization;
};