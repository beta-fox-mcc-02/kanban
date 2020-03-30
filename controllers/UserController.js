const { User } = require('../models')
const { generateToken }= require('../helpers/jwt')
const { decryptPass } = require('../helpers/bcrypt')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {
   static register (req, res) {
      // console.log('masuk register controller')
      let { name, email, password } = req.body
      let input = { name, email, password }
      // console.log(input)
      User.create(input, {
         returning: true
      })
         .then(user => {
            // console.log(user)
            const token = generateToken({ id: user.id, email : user.email })
            res.status(201).json({
               token,
               msg : "register success"
            })
         })
         .catch(err => {
            // console.log(err)
            res.status(400).json({
               status : 400,
               msg : "register failed, wrong format"
            })
         })
   }

   static login (req, res) {
      // console.log('masuk login')
      let { email, password } = req.body
      let input = { email, password}
      User.findOne({
         where : {
            email : input.email
         },
      })
         .then(user => {
            // console.log('masuk then login')
            if(user) {
               // console.log('user ada')
               let validate = decryptPass(input.password, user.password)
               if(validate) {
                  // console.log(user)
                  // console.log('validasi berhasil')
                  const token = generateToken({ id: user.id, email:input.email })
                  res.status(200).json({
                     token,
                     msg : "login success"
                  })
               } else {
                  res.status(400).json({
                     status : 400,
                     msg : "email/password wrong"
                  })
               }
            } else {
               res.status(400).json({
                  status : 400,
                  msg : "email/password wrong"
               })
            }
         })
         .catch(err => {
            res.status(400).json({
               status : 400,
               msg : "email/password wrong"
            })
         })
   }
   static signInGoogle (req, res) {
      console.log('masuukkkkkkkk')
      console.log(req.headers)
      let email
      let name
      client.verifyIdToken({
         idToken: req.headers.idtoken,
         audience: process.env.CLIENT_ID
      })
         .then(data => {
            console.log(data)
            console.log('masuk signIn Controller')
            email = data.payload.email
            name = data.payload.name
            return User.findOne({
               where : {
                  email
               }
            })
         })
         .then(user => {
            console.log(user, 'masuk signIn Controller 2')
            if(!user) {
               let newUser = {
                  name, email, password: process.env.SECRET_PASSWORD
               }
                  return User.create(newUser)
            } else {
               return user
            }
         })
         .then(userLogin => {
            console.log(userLogin)
            console.log('masuk signIn COntroller 3')
            let token = generateToken({ id: userLogin.id, email })
            console.log(token)
            res.status(200).json({
               token
            })
         })
         .catch(err => {
            res.status(400).json({
               status: 400,
               msg: 'fail sign in via Google'
            })
         })
   }
}

module.exports = UserController