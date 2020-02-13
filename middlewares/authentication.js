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
               req.currentUserId = payload.id
               res.status(200).json({
                  token,
                  msg : "success authentication"
               })
            } else {
               next(err)
            }
         })
         .catch(err => {
            next(err)
         })
   }
}