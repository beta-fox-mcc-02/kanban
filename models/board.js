'use strict'
module.exports = (sequelize, DataTypes) => {
    class Board extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    Board.init(
        {
            title: DataTypes.STRING,
            UserId: DataTypes.INTEGER
        },
        { sequelize }
    )

    return Board
}
