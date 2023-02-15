const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Users } = require("./models");
const bcrypt = require("bcryptjs");

module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESSION,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await Users.findOne({ where: { email: username } });
        if (!user) {
          console.log("El usuario  no  existe");
          return done(null, false, { message: "Credenciales incorrectas" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          console.log("La pass es inválida");
          return done(null, false, { message: "Credenciales incorrectas" });
        }
        console.log("Credenciales verificadas");
        return done(null, user);
      } catch (error) {
        done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await Users.findByPk(id);

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
