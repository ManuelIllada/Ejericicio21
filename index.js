const methodOverride = require('method-override')

const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("css"));

app.use(methodOverride('_method'))

// - URLEncoded - Permite recibir la información enviada mediate el metodo POST, (sustituimos req.query por req.body)
app.use(express.urlencoded({ extended: true }))


//Activación de Rutas
app.use(routes);

app.listen(port, function () {
  console.log(`Server funciona en el puerto: ${port}`);
});
