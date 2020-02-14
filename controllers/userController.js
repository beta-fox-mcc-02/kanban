const { User, Project } = require('../models')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const bcrypt = require('bcryptjs')
class UserController {

  static findAll (req, res, next) {
    User
      .findAll({
        include:[
          {
            model: Project
          }
        ],
        attributes: {
          exclude: ['password']
        }
      })
      .then(user => {
        res.status(200).json(user)
      })
      .catch(next)
  }

  static signUp (req, res, next) {
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User
      .create(data)
      .then(user => {
        let data = {
          id: user.id,
          name: user.name,
          email: user.email
        }
        res.status(201).json(data)
      })
      .catch(next)
  }

  static signIn (req, res, next) {
    User
      .findOne({
        where : {
          email: req.body.email
        }
      })
      .then( user => {
        if(user) {
          const isValid = bcrypt.compareSync(req.body.password, user.password)
          if(isValid){
            let payload = {
              id: user.id,
              name: user.name,
              email: user.email
            }
            const token = jwt.sign(payload, JWT_SECRET)
            res.status(200).json({
              token,
              name: payload.name
            })
          } else {
            next({
              name: 'SignInError',
              msg: 'Email/Password Wrong !'
            })
          }
        } else {
          next({
            name: 'SignInError',
            msg: 'Email/Password Wrong !'
          })
        }
      })
      .catch(next)
  }
}

module.exports = UserController
