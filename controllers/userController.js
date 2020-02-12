const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class Controller {
    static fetchAll(req, res, next) {
        User.findAll()
            .then(response => {
                res.status(200).json({
                    msg: 'success fetch users',
                    data: response
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static register(req, res, next) {
        const { email, password } = req.body
        User.create({
            email: email,
            password: password
        })
            .then(response => {
                const payload = {
                    id: response.id,
                    email: response.email
                }

                const token = generateToken(payload)

                res.status(200).json({
                    msg: 'sign up success',
                    token
                })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }
}

module.exports = Controller