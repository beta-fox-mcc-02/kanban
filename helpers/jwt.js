const jwt = require('jsonwebtoken')
const privateKey = process.env.PRIVATEKEY

module.exports = {
    generateToken: (data) => {
        return jwt.sign(data, privateKey)
    }, 
    verify: (data) => {
        return jwt.verify(data, privateKey)
    }
}