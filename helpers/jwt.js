const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = {
    generateToken : (dataUser) => {
        let token = jwt.sign(dataUser, secret)
        return token
    },
    verify : (token) => {
        return jwt.verify(token, secret)
    }
}