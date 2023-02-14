////////////////////////////////////////////  Requires
// DOT ENV - Require
require("dotenv").config();
const APP_PORT = process.env.APP_PORT || 3000;

// EXPRESS - Require
const express = require("express");
const app = express();

// Rutas - Require
const routes = require("./routes");

//PassPort - Require
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local")

// METHODOVERRIDE - Require
const methodOverride = require('method-override')

//Faker - Require
const fakerArticulos = require("./seeders/articleSeeder")
const fakerComments = require("./seeders/commentSeeder")
const fakerUsers = require("./seeders/userSeeder")

////////////////////////////////////////////  Poblando la DB
/* fakerUsers()
fakerArticulos() */
/* fakerComments() */

// Configuración y activación de Ejs y motor de vistas
app.set("view engine", "ejs");

// Configuración archivos estáticos
app.use(express.static("css"));
app.use(express.static("public"))

// Configuración MethodOverride
app.use(methodOverride('_method'))

// - URLEncoded - Permite recibir la información enviada mediate el metodo POST, (sustituimos req.query por req.body)
app.use(express.urlencoded({ extended: true }))

//////////////////////////////////////////// Passport y configuración
/* app.use(
  session({
    secret: "",
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.session())

passport.use(
  new LocalStrategy(async (username, password, done) => {
    //Buscamos el usuario en la db
    try {
      User.findOne({ where: { email: username } })
      await ((user) => {
        // Condiciones para corroborar que las credenciales del usuario son correctas
      })
    }
    catch (error) {
      return done(error);
    }
  })
)

passport.serializeUser((user, done) => {
  done(null, req.session.passport.user)
})

passport.deserializeUser(async (id, done) => {
  User.findByPk(req.session.passport.user)
  try {
    await ((user) => {
      done(null, user);
    })
  }
  catch (error) {
    done(error, null)
  }
})

app.post("/login",
passport.authenticate("local",{
  successRedirect: "/",
  failureRedirect: "/login"
})) */

//////////////////////////////////////////// Activación de Rutas
/* app.use(routes); */
routes(app);

////////////////////////////////////////////  Inicio de Server 
app.listen(APP_PORT, function () {
  console.log(`Server funciona en el puerto: ${APP_PORT}`);
});
