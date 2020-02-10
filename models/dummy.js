'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dummy = sequelize.define('Dummy', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Dummy.associate = function(models) {
    // associations can be defined here
  };
  return Dummy;
};