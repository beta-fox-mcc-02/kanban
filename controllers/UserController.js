const {User} = require('../models');
const bcrypt = require('../helpers/bcrypt');

class Controller {
    static register(req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(token => {
                console.log(token)
                res.status(201).json(token)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = Controller;