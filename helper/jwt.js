const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
module.exports = {
    createToken: (id) => {
        return jwt.sign({ id }, SECRET)
    },
    verifyToken: (token) => {
        try {
            return jwt.verify(token, SECRET)
        } catch (err) {
            console.log(err,'error verify')
        }
    }
}