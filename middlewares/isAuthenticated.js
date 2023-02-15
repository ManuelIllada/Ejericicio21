function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/usuarios/login");
  }
}
module.exports = isAuthenticated;
