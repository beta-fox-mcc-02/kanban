const {User} = require('../models');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwtoken')

class Controller {
    static register(req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(newUser => {
                const payload = {
                    id: newUser.id,
                    email: newUser.email
                }
                
                const token = jwt.generateToken(payload);

                res.status(201).json(token)
            })
            .catch(err => {
                next(err);
            })
    }

    static login(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(data => {
                if (data) {
                    const passwordCheck = bcrypt.verifyPassword(req.body.password, data.password);

                    if (passwordCheck) {
                        const payload = {
                            id: data.id,
                            email: req.body.email 
                        }

                        const token = jwt.generateToken(payload);
                        res.status(201).json(token);
                    } else {
                        const error = {
                            name: 'Not found',
                            message: 'Email or Password is invalid'
                        }
                        next(error);
                    }
                } else {
                    const error = {
                        name: 'Not found',
                        message: 'Email or Password is invalid'
                    }
                    next(error);
                }
            })
    }
}

module.exports = Controller;