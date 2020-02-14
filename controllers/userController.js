const { User } = require('../models')
const jwt = require('../helpers/jwt')
const bcrypt = require('../helpers/bcrypt')
const {OAuth2Client} = require('google-auth-library');

class UserController {
  static register(req,res,next){
    const { email,password } = req.body
    User.create({email,password})
      .then(user=>{
        let payload = {
          id : user.id
        }
        const access_token = jwt.generateToken(payload)
        res.status(201).json({
          access_token
        })
      })
      .catch(err=>{
        next(err)
      }) 
  }

  static login(req,res,next){
    const { email,password } = req.body
    User.findOne({where:{email}})
    .then(user=>{
      if(user){
        let verified = bcrypt.verifyPassword(password, user.password)
        if (verified) {
          let payload = {
            id : user.id
          }
          const access_token = jwt.generateToken(payload)
          res.status(200).json({
            access_token
          })
        } else {
          next({
            status : 400,
            msg : "invalid email/password"
          })
        }
      } else {
        next({
          status : 400,
          msg : "invalid email/password"
        })
      }
    })
    .catch(err=>{
      next(err)
    })
  }

  static gLogin(req,res,next){
    let newEmail =''
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let token = req.headers.token
    client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    })
      .then(result=>{
        let payload = result.getPayload()
        newEmail = payload.email
        User.findOne({
          where : {
            email: newEmail
          }
        })
          .then(user => {
            if(!user){
              let payload = {
                email : newEmail,
                password : process.env.SECRET_PASSWORD
              }
              console.log(payload);
              
              return User.create(payload)
            } else {
              return user
            }
          })
          .then(user=>{
            let payload = {
              id : user.id
            }
            let access_token = jwt.generateToken(payload)
            res.status(200).json({
              access_token
            })
          })
      })
      .catch(err=>{
        console.log(err)
      })
  }
}

module.exports = UserController