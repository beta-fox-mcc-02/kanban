const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { Op } = require('sequelize')
const { OAuth2Client } = require('google-auth-library');

class UserController {
  static register(req, res, next) {
    let {username, email, password} = req.body
    User.create({username, email, password}) 
      .then(newUser => {
        res.status(201).json({
          msg: "Register successful. Please sign in"
        })
      })
      .catch(next)
  }

  static login(req, res, next) {
    let {user, password} = req.body
    User.findOne({
      where: {
        [Op.or]: [
          {username: user},
          {email: user}
        ] 
      }
    })
      .then(user => {
        if(!user) next({
          name: "LoginError",
          status: 404,
          msg: "Wrong username / email / password"
        })
        else {
          if(!checkPassword(password, user.password)) next({
            name: "LoginError",
            status: 201,
            msg: "Wrong username / email / password"
          })
          else {
            let token = generateToken(user.id)
            let response = {
              token,
              username: user.username
            }
            res.status(200).json(response)
          }
        }
      })
      .catch(next)
  }
  
  //google sign in
  static gsignin(req, res, next) {
    const CLIENT_ID = process.env.CLIENT_ID
    let userObj = {}
    let id_token = req.body.id_token
    const client = new OAuth2Client(CLIENT_ID);
    client.verifyIdToken({
          idToken: id_token,
          audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      })
        .then(ticket => {
          const payload = ticket.getPayload();
          userObj.username = payload.name
          userObj.email = payload.email
          return User.findOne({
            where: {
              [Op.or] : [
                {username: userObj.username},
                {email: userObj.email}
              ]
            }
          })
        })
        .then(user => {
          if (user) {
            return user
          }
          else {
            userObj.password = process.env.DEFAULT_PWD
            return User.create (userObj)
          } 
        })
        .then(user => {
          let token = generateToken({id: user.id}) 
          res.status(201).json(
            {
              username: user.username,
              token 
            })
        })
        .catch(next)
  }
}

module.exports = UserController