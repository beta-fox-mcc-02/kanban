'use strict';
module.exports = (sequelize, DataTypes) => {
  class OrganizationMember extends sequelize.Sequelize.Model {
    static associate(models) {

    }
  }

  OrganizationMember.init({
    OrganizationId: {
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  })
  
  return OrganizationMember;
};