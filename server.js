require("dotenv").config();
const APP_PORT = process.env.APP_PORT || 3000;
const express = require("express");
const app = express();
const passportConfig = require("./passportConfig");
const routes = require("./routes");
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

//////////////////////////////////////////// Activación de Rutas
/* app.use(routes); */
passportConfig(app);
routes(app);

////////////////////////////////////////////  Inicio de Server
app.listen(APP_PORT, function () {
  console.log(`Server funciona en el puerto: ${APP_PORT}`);
});
