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
        // console.log(200, req.user.id);
        console.log(90, req.params.id);
        console.log(91, req.user);
        console.log(92, token);
        
        try{
            Task.findByPk(req.params.id)
                .then(data => {
                    // console.log(data);
                    
                    // console.log(req.user.id, data.UserId);
                    // //  console.log(req.user.id, data.UserId);
                     
                    if(req.user.id === data.UserId) {
                        next();
                    } else {
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