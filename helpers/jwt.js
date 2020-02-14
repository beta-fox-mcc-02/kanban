const jwt = require('jsonwebtoken')
const PRIVATKEY = process.env.PRIVATKEY

module.exports = {
    generateToken: (dataUser) => {
        return jwt.sign(dataUser, PRIVATKEY)
    },
    verifyToken: (token) => {
        return jwt.verify(token, PRIVATKEY)
    }
}