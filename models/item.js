'use strict'
module.exports = (sequelize, DataTypes) => {
    class Item extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    Item.init(
        {
            title: DataTypes.STRING,
            CardId: DataTypes.INTEGER,
            status: DataTypes.BOOLEAN
        },
        { sequelize }
    )

    return Item
}
