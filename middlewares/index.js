const isAuthenticated = require('./isAuthenticated')
const isTaskAuthorizationed = require('./isTaskAuthorizationed')
const isCategoryAuthorizationed = require('./isCategoryAuthorized')
const errorHandler = require('./errorHandler')

module.exports = {
  isAuthenticated,
  isTaskAuthorizationed,
  isCategoryAuthorizationed,
  errorHandler
}