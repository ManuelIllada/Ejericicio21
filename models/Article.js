const { Sequelize, Model, DataTypes } = require("sequelize");

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
            },
            { sequelize, modelName: "article" }
        );
        return Articles;
    }
}

module.exports = Articles