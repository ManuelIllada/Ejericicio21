const express = require("express");
const app = express();
const routes = require("./routes")
const { Sequelize, Model, Datatypes } = require("sequelize");

app.set("view engine", "ejs")

// - URLEncoded - Permite recibir la información enviada mediate el metodo POST, (sustituimos req.query por req.body)
app.use(express.urlencoded({ extended: true }))


/* const sequelize = new Sequelize("ha_ejercicio_20", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

class User extends Model { }

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
); */

//Activación de Rutas
app.use(routes)

app.listen(3000, function () {
  console.log("server funciona");
});
