const { User } = require('../models')
const { BcryptHelper } = require('../helpers')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')

class UserController {
  static register(req, res, next) {
    const parameters = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }

    User.create(parameters)
      .then(newUser => {
        const payload = {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          initial: newUser.first_name[0].toUpperCase() + newUser.last_name[0].toUpperCase()
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
              username: user.username,
              initial: user.first_name[0].toUpperCase() + user.last_name[0].toUpperCase()
            }
            const token = jwt.sign(payload, process.env.SECRET)
            res.status(200).json({
              token
            })
          } else {
            next({
              status: 400,
              name: 'LOGIN_FAILED',
              message: 'Email / password is incorrect'
            })
          }
        } else {
          next({
            status: 400,
            name: 'LOGIN_FAILED',
            message: 'Email / password is incorrect'
          })
        }
      })
      .catch(err => next(err))
  }

  static findUser(req, res, next) {
    const id = req.decoded
    User.findOne({
      where: {
        id
      }
    })
      .then(user => {
        if (user) {
          res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            initial: user.first_name[0].toUpperCase() + user.last_name[0].toUpperCase()
          })
        } else {
          next({
            status: 401,
            name: 'LOGIN_FAILED',
            message: 'Please login first'
          })
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static googleLogin(req, res, next) {
    const token = req.headers.token
    const CLIENT_ID = process.env.CLIENT_ID
    const client = new OAuth2Client(CLIENT_ID)
    let profile
    client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID
    })
      .then(response => {
        profile = response.payload
        return User.findOne({
          where: {
            email: profile.email
          }
        })
      })
      .then(user => {
        if (!user) {
          return User.create({
            email: profile.email,
            username: profile.name,
            password: process.env.GPASSWORD,
            first_name: profile.given_name,
            last_name: profile.family_name
          })
        } else {
          return user
        }
      })
      .then(user => {
        const payload = {
          id: user.id,
          email: user.email,
          username: user.username,
          initial: user.first_name[0].toUpperCase() + user.last_name[0].toUpperCase()
        }
        const token = jwt.sign(payload, process.env.SECRET)
        res.status(200).json({
          token
        })
      })
      .catch(next)
  }
}

module.exports = UserController