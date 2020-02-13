const { User } = require('../models')
const { generateToken }= require('../helpers/jwt')
const { decryptPass } = require('../helpers/bcrypt')

class UserController {
   static register (req, res) {
      console.log('masuk register controller')
      let { name, email, password } = req.body
      let input = { name, email, password}
      User.create(input, {
         returning: true
      })
         .then(user => {
            const token = generateToken({ id, email : user.email })
            res.status(201).json({
               token,
               msg : "register success"
            })
         })
         .catch(err => {
            res.status(400).json({
               status : 400,
               msg : "register failed, wrong format"
            })
         })
   }

   static login (req, res) {
      let { email, password } = req.body
      let input = { email, password}
      User.findOne({
         where : {
            email : input.email
         },
      })
         .then(user => {
            if(user) {
               let validate = decryptPass(input.password, user.password)
               if(validate) {
                  const token = generateToken({ id, email:input.email })
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
}

module.exports = UserController