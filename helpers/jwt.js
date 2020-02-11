const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = {
  generateToken(id) {
    return jwt.sign({id}, secret)
  },

  verifyToken(token) {
    try {
      return jwt.verify(token, secret)
    } catch (err) {
      return err
    }
  }
}