'use strict';
module.exports = (sequelize, DataTypes) => {
  class UserOrganization extends sequelize.Sequelize.Model{}
  UserOrganization.init({
    UserId: DataTypes.INTEGER,
    OrganizationId: DataTypes.INTEGER
  }, {
    sequelize
  }); 
  UserOrganization.associate = function(models) {
    // associations can be defined here
  };
  return UserOrganization;
};