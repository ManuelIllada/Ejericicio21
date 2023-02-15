////////////////////////////////////////////  Requires
// DOT ENV - Require
require("dotenv").config();
const APP_PORT = process.env.APP_PORT || 3000;

// EXPRESS - Require
const express = require("express");
const app = express();

// Rutas - Require
const routes = require("./routes");
const { Sequelize, Model, DataTypes } = require("sequelize");
//PassPort - Require
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Users } = require("./models");
const bcrypt = require("bcryptjs");
// METHODOVERRIDE - Require
const methodOverride = require("method-override");

//Faker - Require
const fakerArticulos = require("./seeders/articleSeeder");
const fakerComments = require("./seeders/commentSeeder");
const fakerUsers = require("./seeders/userSeeder");

////////////////////////////////////////////  Poblando la DB
// fakerUsers();
// fakerArticulos();
// fakerComments();

// Configuración y activación de Ejs y motor de vistas
app.set("view engine", "ejs");

// Configuración archivos estáticos
app.use(express.static("css"));
app.use(express.static("public"));

// Configuración MethodOverride
app.use(methodOverride("_method"));

// - URLEncoded - Permite recibir la información enviada mediate el metodo POST, (sustituimos req.query por req.body)
app.use(express.urlencoded({ extended: true }));

//////////////////////////////////////////// Passport y configuración
app.use(
  session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    //Buscamos el usuario en la db
    try {
      const user = await Users.findOne({ where: { email: username } });
      if (!user) {
        console.log("El usuario  no  existe");
        return done(null, false, { message: "Credenciales incorrectas" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log("La pass es inválida");
        return done(null, false, { message: "Credenciales incorrectas" });
      }
      console.log("Credenciales verificadas");
      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findByPk(id);

    (user) => {
      done(null, user);
    };
  } catch (error) {
    done(error, null);
  }
});

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );

//////////////////////////////////////////// Activación de Rutas
/* app.use(routes); */
routes(app);

////////////////////////////////////////////  Inicio de Server
app.listen(APP_PORT, function () {
  console.log(`Server funciona en el puerto: ${APP_PORT}`);
});
