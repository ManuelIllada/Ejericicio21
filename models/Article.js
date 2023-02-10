const { Model, DataTypes } = require("sequelize");

class Articles extends Model {
    static initModel(sequelize) {

        Articles.init(
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.BIGINT,
                },
                title: {
                    allowNull: false,
                    type: DataTypes.STRING,
                },
                content: {
                    allowNull: false,
                    type: DataTypes.STRING(1000),
                },
                image: {
                    type: DataTypes.BLOB,
                },
                create_at: {
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.literal("(CURRENT_DATE())"),
                }
            },
            { sequelize, modelName: "article", timestamps: false }
        );
        return Articles;
    }
}

module.exports = Articles