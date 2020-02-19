const { verify } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = (req, res, next) => {
    try {
        let decoded = verify(req.headers.token)
        console.log(decoded)
        User.findByPk(decoded.id)
            .then(user => {
                if (user) {
                    req.currentUserId = decoded.id
                    req.name = decoded.name
                    req.email = decoded.email
                    console.log('MASUK')
                    next()
                } else {
                    next({
                        name : "NotFound"
                    })
                }
            })
            .catch(err => {
                console.log('MASUK CATCH FIND BY PK')
                next(err)
            })
        
    } catch (err) {
        console.log('MASUK CATCH TRY')
        console.log(err)
        next(err)
    }
}