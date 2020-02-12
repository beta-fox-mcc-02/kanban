const { User } = require('../models')
const { BcryptHelper } = require('../helpers')
const jwt = require('jsonwebtoken')

class UserController {
  static register(req, res, next) {
    const parameters = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }

    User.create(parameters)
      .then(newUser => {
        const payload = {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email
        }
        const token = jwt.sign(payload, process.env.SECRET)
        res.status(201).json({
          token
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    const parameters = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({
      where: {
        email: parameters.email
      }
    })
      .then(user => {
        if (user) {
          const password = parameters.password
          const isValid = BcryptHelper.validatePassword(password, user.password)
          if (isValid) {
            const payload = {
              id: user.id,
              email: user.email,
              username: user.username
            }
            const token = jwt.sign(payload, process.env.SECRET)
            res.status(200).json({
              token
            })
          } else {
            next({
              status: 400,
              name: 'LOGIN_FAILED',
              message: 'Username / password is incorrect'
            })
          }
        } else {
          next({
            status: 400,
            name: 'LOGIN_FAILED',
            message: 'Username / password is incorrect'
          })
        }
      })
      .catch(err => next(err))
  }
}

module.exports = UserController