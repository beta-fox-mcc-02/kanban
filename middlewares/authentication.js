const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
   const token = req.headers.token
   // console.log(token, "token di authentication")
   if(token) {
      const payload = verifyToken(token)
      User.findOne({
         where : {
            email : payload.email
         }
      })
         .then(user => {
            if(user) {
              console.log('masuk auth')
               req.currentUserId = payload.id
               next()
            } else {
               next(err)
            }
         })
         .catch(err => {
            next(err)
         })
   }
}