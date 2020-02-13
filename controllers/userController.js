const { User, Task } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class Controller {
    static fetchAll(req, res, next) {
        User.findAll({
            include: [ Task ],
            order: [['id', 'ASC']]
        })
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

    static signUp(req, res, next) {
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
                console.log(err.name)
                next(err)
            })
    }

    static signIn(req, res, next) {
        const { email, password } = req.body
        
        User.findOne({
            where: {
                email
            }
        })
            .then(response => {
                if (response) {
                    const comparePw = comparePassword(password, response.password)
                    if (comparePw) {
                        const payload = {
                            id: response.id,
                            email: response.email
                        }

                        const token = generateToken(payload)
                        
                        res.status(200).json({
                            msg: 'sign in success',
                            token
                        })
                    } else {
                        res.status(400).json({
                            msg: 'invalid email or password'
                        })
                    }
                } else {
                    res.status(400).json({
                        msg: 'invalid email or password'
                    })
                }
            })
            .catch(err => {
              next(err)  
            })
    }
}

module.exports = Controller