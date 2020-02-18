const { User } = require('../models');
const { compare } = require('../helpers/bcrypt.js');
const { sign } = require('../helpers/jwt.js');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
// const axios = require('axios');
const { base64_encode } = require('../helpers/base64');

class UserController {
    static gSignIn(req, res, next) {
        console.log(1, req.body);
        console.log(2, req);
        
        
        let token = req.headers.token;

        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(data => {
                console.log(data);
                
                email = data.payload.email;
                console.log(email);
                
                return User.findOne({
                    where: { email }
                })
            })
            .then(data => {
                if(!data) {
                    return User.create({
                        email,
                        password: process.env.GOOGLE_PASS
                    })
                }
                else return data;
            })
            .then(data => {
                let token = jwt.sign(data.email, process.env.PRIVATE_KEY);
                let response = {
                    token,
                    id: data.id
                }
                res.status(200).json(response)
            })
            .catch(err => next(err));


            // const { email } = req.params;

            // User.findOne({ where: { email }})
            //     .then(user => {
            //         if(user) next();
            //         else {
            //             User.create({
            //                 email,
            //                 password: 
            //             })
            //                 .then(result => {
            //                     res.status(201).json({
            //                         data: result,
            //                         msg: 'Input Post success'
            //                     })
            //                 })
            //                 .catch(err => {
            //                     next({
            //                         name: err.name,
            //                         msg: err,
            //                         process: 'Create User'
            //                     })
            //                 })
            //         }
            //     })
            //     .catch(err => { next(err) })
    }

    static updateUser(req, res, next) {
        const { id } = req.params;
        
        const user = {
            password: req.body.password,
            newPassword: req.body.newPassword,
            imageUrl: req.body.imageUrl
        }

        if(user.password !== user.newPassword) {
            next({
                name: 400,
                msg: 'Password and confirm password does not match',
                process: 'Edit User'
            })
        } else {
            User.update(user, { where: { id }, returning: true})
                .then(result => {
                    if(result[0] > 0) {
                        res.status(200).json({
                            data: result[0][1],
                            msg: 'Update user data success'
                        })
                    } else {
                        next({
                            name: 404,
                            msg: 'No rows updated user data',
                            process: 'Updating user data'
                        })
                    }
                })
                .catch(next);
        }
    }

    static login(req, res, next) {
        const { email, password } = req.body;

        User.findOne({ where: { email }})
            .then(user => {
                let isValid = compare(password, user.password);

                if(isValid) {
                    const token = sign({ id: user.id })
                    res.status(200).json({token})
                } else {
                    next({
                        name: 400,
                        msg: 'invalid username / password',
                        process: 'login'
                    })
                }
            })
            .catch(err => { next(err) })
    }

    static create(req, res, next) {
        const { email, password } = req.body;
        const data = { email, password }

        User.create(data)
            .then(result => {
                res.status(201).json({
                    data: result,
                    msg: 'Input Post success'
                })
            })
            .catch(err => {
                next({
                    name: err.name,
                    msg: err,
                    process: 'Create User'
                })
            })
    }

    static update(req, res, next) {
        const { id } = req.params;

        const data = {
            imageUrl: result.data.data.link
        }

        User.update(data, { where: { id }, returning: true })
            .then(result => {
                if (result[0] > 0) {
                    res.status(200).json({
                        data: result[0][1],
                        msg: 'Change image success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No updated image',
                        process: 'Updating image user'
                    })
                }
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params

        Post.destroy({ where: { id } })
            .then(data => {
                if (data) {
                    res.status(200).json({
                        data,
                        msg: 'Delete Data Post success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No deleted data Post rows',
                        process: 'Deleting Data Post'
                    })
                }
            })
            .catch(next)
    }

    static findById(req, res, next) {
        const { id } = req.params

        User.findByPk(id)
            .then(data => {
                if (data) {
                    res.status(200).json({
                        data,
                        msg: 'Find Data By PK user success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No result user founded',
                        process: 'Find One Row User'
                    })
                }
            })
            .catch(next)
    }
}

module.exports = UserController;