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
        console.log(0, req.params.id);
        console.log(1, req.user.id);
        console.log(2, token);
        
        // try{
 

            Task.findByPk(req.params.id)
                .then(data => {
                    console.log(req.user.id, data.UserId);
                     
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
        // } catch(ex) {
        //     next({
        //         name: 400,
        //         msg: 'Invalid token',
        //         process: 'Authorization'
        //     })
        // }
    }
}