const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  static initModel(sequelize) {
    Users.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.BIGINT,
        },
        nombre: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        apellido: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      { sequelize, modelName: "user", timestamps: false, createdAt: true }
    );
    return Users;
  }
}
module.exports = Users;
