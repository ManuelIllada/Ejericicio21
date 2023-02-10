// DOT ENV
require("dotenv").config();
const APP_PORT = process.env.APP_PORT || 3000;

// EXPRESS
const express = require("express");
const app = express();
const routes = require("./routes");

// METHODOVERRIDE
const methodOverride = require('method-override')

app.set("view engine", "ejs");
app.use(express.static("css"));

app.use(methodOverride('_method'))

// - URLEncoded - Permite recibir la información enviada mediate el metodo POST, (sustituimos req.query por req.body)
app.use(express.urlencoded({ extended: true }))

//Activación de Rutas
app.use(routes);

app.listen(APP_PORT, function () {
  console.log(`Server funciona en el puerto: ${APP_PORT}`);
});
