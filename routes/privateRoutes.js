const express = require("express");
const router = express.Router();
const admController = require("../controllers/admController");

// Pagina panel Administrador
router.get("/", admController.admPage);

module.exports = router;
