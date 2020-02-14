'use strict'
module.exports = (sequelize, DataTypes) => {
    class Card extends sequelize.Sequelize.Model {
        static associate(models) {
            Card.belongsTo(models.List)
            Card.hasMany(models.Item)
        }
    }

    Card.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `Title can't be blank`
                    }
                }
            },
            ListId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `ListId can't be blank`
                    }
                }
            },
            description: {
                type: DataTypes.STRING
            }
        },
        { sequelize }
    )

    return Card
}
