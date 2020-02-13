const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library')
const sendmail = require('../helpers/sendmail')
const verifNumGenerator = require('../helpers/verifNumGenerator')
const messageGenerator = require('../helpers/messageGenerator')

class UserController {
  static register (req, res, next) {
    const { name, email, password } = req.body
    if (!password) next({msg: `password is ${password}`, status: 'bad_request'})
    if (password.length < 7) next({msg: 'Minimum password length is 6', status: 'bad_request'})
    User.create({
      name,
      email,
      password,
      isVerified: false
    })
      .then(user => {
        const verifNum = verifNumGenerator()
        const verifToken = jwt.sign({ id: user.id, verifNum }, process.env.SECRET)
        const message = messageGenerator({ status: 'verif', token: verifToken })
        sendmail({
          email: user.email,
          subject: 'Register success, verify your email.', 
          message
        })
        UserController.addVerifToken(verifToken, user.id)
        const token = jwt.sign({ id: user.id }, process.env.SECRET)
        res.status(201).json({
          msg: 'Register success',
          name: user.name,
          email: user.email,
          isVerified: user.isVerified,
          token
        })
      })
      .catch(next)
  }

  static login (req, res, next) {
    const { email, password } = req.body
    User.findOne({ where: { email }})
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.SECRET);
            res.status(200).json({
              msg: 'Login success',
              name: user.name,
              email: user.email,
              isVerified: user.isVerified,
              token
            })
          } else {
            next({
              name: 'invalid email/password',
              msg: 'Email / Password is wrong'
            })
          }
          
        } else {
          next({
            name: 'invalid email/password',
            msg: 'Email / Password is wrong'
          })
        }
      })
      .catch(next)
  }

  static googleSign (req, res, next) {
    let payload
    let status = {}
    const client = new OAuth2Client(process.env.CLIENT_ID);
    client.verifyIdToken({
      idToken: req.body.id_token,
      audience: process.env.CLIENT_ID
    })
      .then(ticket=>{
        payload = ticket.getPayload();
        const {email} = payload
        return User.findOne({ where: { email } })
      })
      .then(user=>{
        const { name } = payload
        const { email } = payload
        if (!user) {
          status.ids = 201
          status.msg = "user not found. Create user"
          return User.create({
            name,
            email,
            password: process.env.PASS_GSIGN,
            isVerified: true
          })
        } else{
            status.msg = "user found"
            status.ids = 200
            return user
        }
      })
      .then(user=>{
        const idUser = user.id
        const token = jwt.sign({ id: idUser }, process.env.SECRET);
        res.status(status.ids).json({token, msg: status.msg})
      })
      .catch(err=>{
        next(err)
      })
  }

  static addVerifToken (tokenData, id) {
    console.log(id)
    User.update({
      verifToken: tokenData
    }, {
      where: { id }
    })
      .then(result => {
        if (result[0]) console.log('Add Token into db succes')
        else console.log('Something error')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = UserController
