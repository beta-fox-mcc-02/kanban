const {
    User
} = require("../models")
const jwt = ("jsonwebtoken")
const private_key = "secret"

module.exports = {
    authentication: (req, res, next) => {
        try {
            const token = req.headers.token
            let decoded = jwt.verify(token, private_key)
            User.findOne({
                    where: {
                        id: decoded.data.id
                    }
                })
                .then(data => {
                    if (data) {
                        req.UserId = data.id
                        next()
                    } else {
                        let err = {
                            error: "Not Exist",
                            msg: "User does not exist"
                        }
                        res.status(500).json({
                            err
                        })
                    }
                })
                .catch(err => {
                    next(err)
                })
        } catch (err) {
            next(err)
        }
    }
}