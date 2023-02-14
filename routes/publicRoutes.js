const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Página Home Articulos
router.get("/", mainController.index);

module.exports = router;
