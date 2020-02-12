const BcryptPassword = require('./bcryptPassword.js')

module.exports = {
    eachWordCaps: (user, options) => {
        for (let i = 0; i < user.title.length; i++) {
            if(i === 0) user.title[i] = user.title[i].toUpperCase()
            else if(user.title[i-1] === ' ') user.title[i] = user.title[i].toUpperCase()
        }
    },
    userCreate: (user, options) => {
        if(!user.name) {
          let indexOfAt = user.email.indexOf('@')
          user.name = user.email.substring(0, indexOfAt)
        }
        user.password = BcryptPassword.hashing(user.password)
    }
}