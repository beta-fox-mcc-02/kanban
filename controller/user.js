const { User } = require('../models')
const { createToken, verifyToken } = require('../helper/jwt')

class Users {
    static register(req, res, next) {
        const { username, email, password } = req.body
        User.findOne({
            where: { email }
        })
            .then(data => {
                if (data) {
                    res.status(200).json({
                        msg: 'email has already taken'
                    })
                } else {
                    return User.create({ username, email, password })
                }
            })
            .then(data=>{
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(err, 'error register findOne')
                res.status(500).json({
                    msg: 'Internal Server Error'
                })
            })
    }
    static login(){}
}

module.exports = Users