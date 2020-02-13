const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = function(req, res, next) {
    const { token } = req.headers

    try {
        const decoded = verifyToken(token)

        User.findOne({
            where: {
                id: decoded.id,
                email: decoded.email
            }
        })
            .then(response => {
                if (response) {
                    req.decoded = decoded
                    next()
                } else {
                    next('authentication error')
                }
            })
            .catch(err => {
                next(err)
            })
    }
    catch(err) {
        console.log(err)
        next(err)
    }
}