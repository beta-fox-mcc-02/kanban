'use strict';
module.exports = (sequelize, DataTypes) => {
  class Invitation extends sequelize.Sequelize.Model{}
  Invitation.init({
    organization: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  }); 
  Invitation.associate = function(models) {
    // associations can be defined here
    Invitation.belongsTo(models.User)
  };
  return Invitation;
};