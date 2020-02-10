'use strict'
module.exports = (sequelize, DataTypes) => {
    class List extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    List.init(
        {
            title: DataTypes.STRING,
            BoardId: DataTypes.INTEGER
        },
        { sequelize }
    )

    return List
}
