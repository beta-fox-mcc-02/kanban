'use strict'
module.exports = (sequelize, DataTypes) => {
    class Item extends sequelize.Sequelize.Model {
        static associate(models) {
            Item.belongsTo(models.Card)
        }
    }

    Item.init(
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
            CardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `CardId can't be blank`
                    }
                }
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `Status can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return Item
}
