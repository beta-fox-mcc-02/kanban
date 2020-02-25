const BcryptPassword = require('./bcryptPassword.js')

module.exports = {
    eachWordCaps: (user, options) => {
        let formatted
        for (let i = 0; i < user.title.length; i++) {
            
            if(i === 0) formatted = user.title[i].toUpperCase()
            else if(user.title[i-1] === ' ') formatted += user.title[i].toUpperCase()
            else formatted += user.title[i].toLowerCase()
        }
        user.title = formatted
        console.log(user.title)
    },
    userCreate: (user, options) => {
        if(!user.name || user.name.length > 15) {
          let indexOfAt = user.email.indexOf('@')
          user.name = user.email.substring(0, indexOfAt)
        }
        user.password = BcryptPassword.hashing(user.password)
    }
}