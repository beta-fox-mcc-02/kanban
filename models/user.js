'use strict'
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
                    isNull: {
                        args: false,
                        msg: `Name can't be blank`
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
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
                    isNull: {
                        args: false,
                        msg: `Password can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return User
}
