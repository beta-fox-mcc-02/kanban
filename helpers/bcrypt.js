const bcrypt = require('bcryptjs');

module.exports = {
    hashPassword: (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    },

    verifyPassword: (password, hashedPassword) => {
        return bcrypt.compareSync(password, hashedPassword);
    }
}