const jwt = require('../helpers/jwtoken');
const {User, Task, Category} = require('../models');

module.exports = {
    authentication: (req, res, next) => {
        try {
            const token = req.headers.access_token;
    
            if (token) { 
                const decoded = jwt.verifyToken(token);
                req.decoded = decoded.id;
                
                User.findOne({
                    where: {id: decoded}
                })
                    .then(data => {
                        if (data) {
                            next();
                        } else {
                            const error = {
                                name: 'Not authenticated',
                                message: 'User not authenticated'
                            }
                            next(error);
                        }
                    })
                    .catch(err => {
                        next(err);
                    })
            } else {
                const error = {
                    name: 'Not authenticated',
                    message: 'You must login first'
                }
                next(error);
            }
        } catch (err) {
            next(err)
        }
    },

    authorization: (req, res, next) => {
        const UserId = req.decoded;
        const TodoId = req.params.id;

        // TodoId.findOne({
        //     where: {id: TodoId}
        // })
    }
}