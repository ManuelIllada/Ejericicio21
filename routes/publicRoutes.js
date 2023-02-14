const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Página Home Articulos
router.get("/", articleController.index);

module.exports = router;
