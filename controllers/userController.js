const { User } = require('../models')

class UserController {
  static signup (req, res, next) {
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User
      .create(data)
      .then(user => {
        console.log(user)
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}

module.exports = UserController
