const jwt = require('jsonwebtoken')
const PRIVATKEY = "kitten"

module.exports = {
    generateToken: (dataUser) => {
        return jwt.sign(dataUser, PRIVATKEY)
    },
    verifyToken: (token) => {
        return jwt.verifyToken(token, PRIVATKEY)
    }
}