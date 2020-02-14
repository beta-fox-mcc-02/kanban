"use strict"
const { Task } = require('../models')

module.exports = (err, req, res, next) => {
    Task
        .findOne({
            where: {
                UserId : +req.params.id
            }
        })
        .then(user => {
            next()
        })
        .catch(next)
}