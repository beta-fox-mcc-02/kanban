const { verify } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
    try {
        const decode = verify(req.headers.token)
        User.findByPk(decode.id)
            .then(user => {
                if (user) {
                    req.currentUserId = decode.id
                    next()
                } else {
                    next({
                        status: 401,
                        msg: 'Youare not authorized'
                    })
                }
            })
    } catch {
        next({
            status: 401,
            msg: 'Youare not authorized'
        })
    }
}