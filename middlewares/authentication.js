const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
    try{
        let decoded = verifyToken(req.headers.access_token)
        let id = decoded.id
        User
            .findOne({
                where: {
                    email: decoded.email
                }
            })
            .then(user => {
                next()
            })
            .catch(next)
    } catch(err) {
        next(err)
    }
}