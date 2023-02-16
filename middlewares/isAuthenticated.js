function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    next();
  } else {
    res.redirect("/usuarios/login");
  }
}
module.exports = isAuthenticated;
