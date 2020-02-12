const { User } = require('../models')

class UserController {
  static register (req, res, next) {
    const { name, email, password } = req.body
    User.create({
      name,
      email,
      password,
      isVerified: false
    })
      .then(user => {
        console.log('Return data from User.create', user)
        res.status(201).json(user)
      })
      .catch(next)
  }
}

module.exports = UserController