'use strict'
module.exports = (sequelize, DataTypes) => {
    class Card extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    Card.init(
        {
            title: DataTypes.STRING,
            ListId: DataTypes.INTEGER,
            description: DataTypes.STRING
        },
        { sequelize }
    )

    return Card
}
