const {
    User
} = require("../models")
const bcrypt = require("../helpers/brcypt")
const jwt = require("jsonwebtoken")
const private_key = "secret"

class UserController {
    static register(req, res, next) {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        User.create({
                name: name,
                email: email,
                password: password
            })
            .then(data => {
                // console.log(data)
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                // console.log(err)
                res.send(err)
            })
    }

    static login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({
                where: {
                    email: email
                }
            })
            .then(data => {
                if (data) {
                    let passwordCheck = bcrypt.check(password, data.password)
                    if (passwordCheck) {
                        let token = jwt.sign({
                                data
                            },
                            private_key
                        );
                        res.status(200).json({
                            email: data.email,
                            token
                        })
                    } else {
                        let err = {
                            err: "WRONG LOGIN DATA",
                            msg: "EMAIL OR PASSWORD IS WRONG"
                        };
                        next(err);
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = UserController