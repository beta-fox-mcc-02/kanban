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
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = Controller;