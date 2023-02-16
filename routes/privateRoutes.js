const express = require("express");
const router = express.Router();
const admController = require("../controllers/admController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

router.use(makeUserAvailableInViews);
// Pagina panel Administrador
router.use(isAuthenticated);
router.get("/admin", admController.admPage);

module.exports = router;
