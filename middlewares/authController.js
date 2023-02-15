function login(req, res) {
  passport.authenticate("local", {
    successRedirect: req.session.redirectTo ? req.session.redirectTo : "/home",
    failureRedirect: "/login",
  })(req, res);
}
