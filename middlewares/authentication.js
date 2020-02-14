const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const { User } = require('../models')

module.exports = function(req, res, next) {
    const token = req.headers.token
    console.log(req.headers.token, 'TOKENNNN')
    try {
        const decoded = jwt.verify(token, secret)
        console.log(decoded.id, 'DECODED IDDDD')
        User.findByPk(decoded.id)
            .then(userData => {
                if(!userData) {
                    next({
                        name: 'DecodedError',
                        code: 401,
                        msg: 'User not logged in'
                    })
                }
                else{
                    req.currentUserId = decoded.id
                    next()
                }

            })
            .catch(next)
    }
    catch(err) {
        next(err)
    }
}