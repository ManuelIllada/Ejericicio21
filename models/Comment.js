const { Model, DataTypes } = require("sequelize");

class Comments extends Model {
    static initModel(sequelize) {
        Comments.init(
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.BIGINT,
                },
                content: {
                    allowNull: false,
                    type: DataTypes.STRING(1000),
                },
            },
            { sequelize, modelName: "comment", timestamps: false, createdAt: true }
        );
        return Comments
    }
}


module.exports = Comments