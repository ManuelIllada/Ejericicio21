const express = require("express");
const router = express.Router();
const admController = require("../controllers/admController");
const isAuthenticated = require("../middlewares/isAuthenticated");
// Pagina panel Administrador
router.get("/", isAuthenticated, admController.admPage);

module.exports = router;
