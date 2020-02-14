'use strict';
const {hashPassword} = require('../helpers/bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    username: {
      type : DataTypes.STRING
    },
    email: {
      type :DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'empty is not allowed'
        },
        isUnique : (value, next) => {
        sequelize.models.User.findOne({
            where : {
              email : value
            }
          })
          .then(res => {
            if(res){
              const err = {
                name : 'SequelizeValidationError',
                message : 'Username already in used'
              }
              next(err)
            }
            else{
              next()
            }
          })
          .catch(next)
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [5],
          msg : 'password too short, min 5 characters'
        }
      }
    }
  }, {
    sequelize,
    hooks : {
      beforeCreate : (instances, options) => {
        console.log(instances.dataValues.password)
        if(!instances.dataValues.username){
          let pick = instances.dataValues.email.split('@')
          instances.dataValues.username = `${pick[0]}${Math.round(Math.random()*99+1)}kanban`
          instances.dataValues.password = hashPassword(instances.password)
        }
        else{
          instances.dataValues.password = hashPassword(instances.password)
        }
      }
    }
  }); 
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Task, {through : models.UserTask})
    User.belongsToMany(models.Organization, {through : models.UserOrganization})
    User.hasMany(models.Invitation)
  };
  return User;
};