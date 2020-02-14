'use strict'
module.exports = (sequelize, DataTypes) => {
    class BoardAssignment extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    BoardAssignment.init(
        {
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `UserId can't be blank`
                    }
                }
            },
            BoardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        args: false,
                        msg: `BoardId can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return BoardAssignment
}
