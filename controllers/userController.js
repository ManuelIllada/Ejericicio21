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

const create = async (req, res) => {
  const user = req.body;
  await Users.create({
    nombre: user.firstname,
    apellido: user.lastname,
    email: user.email,
    password: await bcrypt.hash(`${user.password}`, 8),
  });
  console.log(req.body);
  res.redirect("/");
};

const index = async (req, res) => {
  res.render("login");
};

const login = passport.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/login",
});

function logOut(req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}
module.exports = { registerUser, index, login, logOut, create };
