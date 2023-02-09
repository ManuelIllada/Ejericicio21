const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("css"));

//Activación de Rutas
app.use(routes);

app.listen(port, function () {
  console.log(`Server funciona en el puerto: ${port}`);
});
