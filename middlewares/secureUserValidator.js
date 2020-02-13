let jwt = require('jsonwebtoken')
let { User, Task } = require('../models')

module.exports = {
    authentification: (req, res, next) => {
        if(req.headers.token) {
            let decoded = jwt.verify(req.headers.token, 'private key')
            User.findByPk(decoded.id)
            .then((data) => {
                if(data) {
                    req.currentUserId = data.id
                    next()
                }
                else next(`USER NOT FOUND`)
            })
            .catch(err => next(err))
        }
        else next(`Broken token`)
    },
    authorization: (req, res, next) => {
        Task.findByPk(req.params.id)
        .then((data) => {
            if (data.UserId === req.currentUserId) next()
            else next(`NO DATA`)
        })
        .catch((err) => next(err))
    }
}