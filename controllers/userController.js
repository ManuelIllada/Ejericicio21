const db = require("../db");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");
//Pagina de Registro Usuario
//method get
const registerUser = async (req, res) => {
  res.render("registerUser");
};

const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});

module.exports = { registerUser, login };
