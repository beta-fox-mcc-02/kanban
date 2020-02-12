'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Token extends Model {}
  Token.init({
    token: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token
};