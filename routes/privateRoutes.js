const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Pagina panel Administrador
router.get("/", mainController.admPage);

module.exports = router;
