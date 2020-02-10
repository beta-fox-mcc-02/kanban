'use strict'
module.exports = (sequelize, DataTypes) => {
    class Item extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    Item.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `Title can't be blank`
                    }
                }
            },
            CardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNull: {
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
                    isNull: {
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
