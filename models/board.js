'use strict'
module.exports = (sequelize, DataTypes) => {
    class Board extends sequelize.Sequelize.Model {
        static associate(models) {
            Board.belongsTo(models.User)
            Board.hasMany(models.List)
        }
    }

    Board.init(
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
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `UserId can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return Board
}
