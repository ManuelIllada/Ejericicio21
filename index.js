const express = require("express");
const app = express();
const routes = require("./routes");

app.set("view engine", "ejs");

//Activación de Rutas
app.use(routes);

app.listen(3000, function () {
  console.log("server funciona");
});
