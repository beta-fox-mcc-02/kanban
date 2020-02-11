const { User } = require('../models')
const { ErrorHandler } = require('../middlewares/errorHandler')

class UserController {
    static register(req, res, next) {
        console.log(req.body)
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }
        console.log(user)
        User.create(user)
            .then(result => {
                let data = {
                    id: result.id,
                    name: result.name,
                    email: result.email
                }
                res.status(201).json({ data })
                next()
            })
            .catch(next)
    }
    static login(req, res, next) {
        const { email, password } = req.body

        User.findOne({ where: { email } })
            .then(result => {
                if (result) {
                    const isLogin = comparePassword(password, result.password)

                    if (isLogin) {
                        const payload = {
                            id: result.id,
                            email: result.email
                        }
                        const message = 'Successfully logged in.'
                        const token = createToken(payload)
                        res.status(200).json({ token, message })
                    } else {
                        next({
                            name: 'wrongauth',
                            error: 'email / password not correct'
                        })
                    }
                } else {
                    next({
                        name: 'wrongauth',
                        error: 'email / password not correct'
                    })
                }
            })
            .catch(next)
    }
}

module.exports = UserController
