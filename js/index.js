const express = require("express");
const app = express();
const { Sequelize, Model, Datatypes } = require("sequelize");

const sequelize = new Sequelize("ha_ejercicio_20", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Datatypes.INTEGER,
    },
    firstname: {
      allowNull: false,
      type: Datatypes.STRING(100),
    },
    lastname: {
      allowNull: false,
      type: Datatypes.STRING(100),
    },
    age: {
      type: Datatypes.INTEGER,
    },
  },
  { sequelize, modelName: "user", timestamps: false }
);

app.get("/", async function (req, res) {
  const usuarios = await User.findAll();
  return res.send("OK");
});

app.listen(3000, function () {
  console.log("server funciona");
});
