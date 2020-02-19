const {verifyToken} = require('../helpers/jwt');
const {User} = require('../models')

module.exports = (req, res, next) => {
    try {
        let decoded = verifyToken(req.headers.access_token)
        req.decoded = decoded
        User.findOne({
            where: {
                id: req.decoded.id
            }
        })
            .then(user => {
                if(user) {
                    next()
                } else {
                    next({
                        name: 'AuthenticationError',
                        message: 'login required'
                    })
                }
            })
            .catch(err => {
                next(err)
            })

    } catch (err) {
        next({
            name: 'AuthenticationError',
            message: 'login required'
        })
    }
}