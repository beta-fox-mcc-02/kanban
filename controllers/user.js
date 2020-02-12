const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next){
        let {first_name, last_name, necessary, email, password} = req.body
        let newUser =  {first_name, last_name, necessary, email, password}

        User
            .create(newUser)
            .then(user => {
                res.status(201).json({
                    msg: "Data registered!"
                })
            })
            .catch(next)
    }

    static login(req, res, next){
        let {email, password} = req.body
        let loginUser = {email, password}

        User
            .findOne({
                where: {
                    email : loginUser.email
                }
            })
            .then(user => {
                if(checkPassword(loginUser.password, user.password) === true) {
                    let token = generateToken(loginUser)
                    req.currentUserId = user.Id
                    console.log(req.currentUserId)
                    res.status(200).json({
                        access_token: token
                    })
                } else {
                    next({
                        name : "email / password might be wrong"
                    })
                }
            })
            .catch(next)
    }
}

module.exports = UserController