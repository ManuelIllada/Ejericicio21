const { Articles, Users } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

//Página admin de Articulos
const admPage = async (req, res) => {
  const articles = await Articles.findAll({ include: Users });
  res.render("panel-admin", { articles, format, es });
};

//Pagina de Registro Usuario
//method get
const regUser = async (req, res) => {
  res.render("registro");
};

//Pagina de Login Usuario
//method get
const logUser = async (req, res) => {
  res.render("login");
};

//Pagina de Login Out Usuario
//method get
const logOut = async (req, res) => {
  res.render("login");
};
module.exports = { admPage };
