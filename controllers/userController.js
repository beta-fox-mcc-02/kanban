const { User } = require('../models')

class Controller {
    static fetchAll(req, res, nex) {
        User.findAll()
            .then(response => {
                res.status(200).json({
                    msg: 'success fetch users',
                    data: response
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = Controller