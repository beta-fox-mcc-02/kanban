const jwt = require('jsonwebtoken')
const { User } = require("jsonwebtoken")

class JwtHelper {
    static generate (token){
        const generate_token = jwt.sign({token},'secret')
        return generate_token  
    }
    static vertify(token){
        const vertify = jwt.verify(token,'secret')
        return vertify
    }
}

module.exports = JwtHelper