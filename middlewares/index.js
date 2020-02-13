const isAuthenticated = require('./isAuthenticated')
const isAuthorizationed = require('./isAuthorizationed')
const errorHandler = require('./errorHandler')

module.exports = {
  isAuthenticated,
  isAuthorizationed,
  errorHandler
}