const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
    try{
        console.log(req.headers.access_token)
        let decoded = verifyToken(req.headers.access_token)
        User
            .findOne({
                where: {
                    email: decoded.email
                }
            })
            .then(user => {
                req.currentUserId = decoded.id
                next()
            })
            .catch(next)
    } catch(err) {
        next(err)
    }
}