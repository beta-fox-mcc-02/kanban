const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
    try{
        console.log(req.body)
    } catch {
        
    }
}