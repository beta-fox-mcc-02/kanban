'use strict'
module.exports = (sequelize, DataTypes) => {
    class Card extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    Card.init(
        {
            title: {
                title: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `Title can't be blank`
                    }
                }
            },
            ListId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `ListId can't be blank`
                    }
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `Description can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return Card
}
