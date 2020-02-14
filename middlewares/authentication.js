const {
    User
} = require("../models")
const jwt = require("jsonwebtoken")
const private_key = "secret"

module.exports = {
    authentication: (req, res, next) => {
        try {
            console.log("MASUK  AUTH")
            const token = req.headers.access_token
            // console.log(token)
            let decoded = jwt.verify(token, private_key)
            console.log(decoded, "ini decoded authentication")
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
                    console.log(err, 'error catch')
                    next(err)
                })
        } catch (err) {
            console.log(err, "error catch 2")
            next(err)
        }
    }
}