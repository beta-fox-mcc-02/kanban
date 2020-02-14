const { Task } = require('../models');

module.exports = function(req, res, next) {
    const token = req.headers.token;

    if(!token) {
        next({
            name: 401,
            msg: 'Access denied. No token provided',
            process: 'Authorization'
        })
    } else {
        try{
            Task.findByPk(req.params.id)
                .then(data => {
                    if(req.user.id === data.UserId) {
                        next();
                    } 
                    else {
                        next( {
                            name: 'SequelizeValidationError',
                            process: 'Authorization'
                        })
                    }
                })
                .catch(err => { next(err) })
        } catch(ex) {
            next({
                name: 400,
                msg: 'Invalid token',
                process: 'Authorization'
            })
        }
    }
}