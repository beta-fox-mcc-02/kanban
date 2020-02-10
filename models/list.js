'use strict'
module.exports = (sequelize, DataTypes) => {
    class List extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    List.init(
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
            BoardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `Title can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return List
}
