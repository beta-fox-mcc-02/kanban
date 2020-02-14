const { User } = require('../models')

module.exports = (req, res, next) => {
    const { id, email } = req.decoded
    
    User.findOne({ where: { id } })
        .then(data => {
            if (data.dataValues.email === email) {
                next()
            } else {
                res.status(500).json({
                    msg: 'data not found in authorized'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                err,
                msg: 'error authorized'
            })
        })
}