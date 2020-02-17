'use strict';
module.exports = (sequelize, DataTypes) => {
  class Organization extends sequelize.Sequelize.Model{}
  Organization.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    created: DataTypes.STRING
  }, {
    sequelize
  }); 
  Organization.associate = function(models) {
    // associations can be defined here
    Organization.belongsToMany(models.User, {through : models.UserOrganization})
    Organization.hasMany(models.Task)
    Organization.hasMany(models.Category)
  };
  return Organization;
};