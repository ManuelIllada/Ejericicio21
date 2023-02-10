const express = require("express");
const router = express.Router();

const articleController = require("./controllers/articleController")

const { Sequelize, Model, DataTypes } = require("sequelize");

// Pagina Home
router.get("/", articleController.index);

// Pagina editar Articulo
router.get("/articles/edit/:id", articleController.editArticlePage);

// Pagina agregar Articulo
router.get("/articles/add/", articleController.addArticlePage);

// Pagina Articulo
router.get("/articles", (req, res) => {
    res.render("article");
});

// Pagina panel Administrador
router.get("/admin", articleController.admArticulosPAge);

// Función Agregar Articulo

// Función Editar Articulo

// Función Eliminar Articulo


module.exports = router;