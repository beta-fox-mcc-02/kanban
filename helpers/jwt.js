const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = {
    generateToken : (id) => {
        let token = jwt.sign({id : id}, secret)
        return token
    },
    verify : (token) => {
        return jwt.verify(token, secret)
    }
}