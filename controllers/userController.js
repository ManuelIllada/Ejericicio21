const db = require("../db");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const { Users } = require("../models");

//Pagina de Registro Usuario
//method get
const registerUser = async (req, res) => {
  res.render("registerUser");
};

module.exports = { registerUser };
