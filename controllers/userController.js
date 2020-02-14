const {
    User
} = require("../models")
const bcrypt = require("../helpers/bcrypt")
const jwt = require("jsonwebtoken")
const private_key = "secret"
const {
    OAuth2Client
} = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

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
        // console.log("masuk ke controller login")
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
                        // let payload = {
                        //     email: data.email,
                        //     id: data.id
                        // }
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

    static googleSignin(req, res, next) {
        console.log("masuk ke google controller")
        // console.log(req.headers.id_token)
        // console.log(process.env.CLIENT_ID)
        let payload = "";
        client.verifyIdToken({
                idToken: req.headers.access_token,
                audience: process.env.CLIENT_ID
            })
            .then(result => {
                // console.log(result)
                payload = result.payload;
                return User.findOne({
                    where: {
                        email: payload.email
                    }
                });
            })
            .then(data => {
                if (!data) {
                    return User.create({
                        email: payload.email,
                        password: "google"
                    });
                } else return data;
            })
            .then(data => {
                // let payload = {
                //     id: data.id,
                //     email: data.email
                // };
                let token = jwt.sign({
                    data
                }, private_key);
                res.status(200).json({
                    token
                });
            })
            .catch(err => {
                console.log(err, "dari error google sign in")
                next(err);
            });
    }

}

module.exports = UserController