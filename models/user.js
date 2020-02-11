'use strict'

const { hashPassword } = require('../helpers/auth')
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    User.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        args: true,
                        msg: `Name can't be blank`
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        args: true,
                        msg: `Email can't be blank`
                    },
                    isEmail: {
                        args: true,
                        msg: 'Email incorrect'
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        args: true,
                        msg: `Password can't be blank`
                    }
                }
            }
        },
        {
            sequelize,
            hooks: {
                beforeCreate(user, options) {
                    user.password = hashPassword(user.password)
                }
            }
        }
    )

    return User
}
