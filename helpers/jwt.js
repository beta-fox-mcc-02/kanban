const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  createToken(payload) {
    return jwt.sign(payload, privateKey);
  },

  validateToken(token) {
    return jwt.verify(token, privateKey);
  }
}