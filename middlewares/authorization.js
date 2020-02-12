const {User, Organization, Task, Category} = require('../models')

module.exports = (req, res, next) => {
    User.findOne({
        where: {
            id: req.decoded.id
        },
        include: [{
            model: Organization,
            include: [{
                model: Task,
                include: [Category]
            }]
        }]
    })
        .then(user => {
            let filter = user.Organizations.filter(el => el.id == req.params.orgId)
            if(filter.length) {
                next()
            } else {
                next({
                    name: 'AuthorizationError',
                    message: 'authorized member only'
                })
            }
        })
        .catch(err => {
            next(err)
        })
}