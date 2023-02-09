const express = require("express");
const router = express.Router();
const db = require("./db");

const { Sequelize, Model, DataTypes } = require("sequelize");

/* 
const mainController = require("./controllers/mainController")
const articleController = require("./controllers/articleController") */

// Pagina Home
router.get("/", async (req, res) => {
    const [articulos] = await db(
        "SELECT * FROM articles ORDER BY create_at DESC"
    );
    res.render("home", { articulos });
});

// Pagina editar Articulo
router.get("/articles/edit/:id", async (req, res) => {
    const [article] = await db(
        `SELECT * FROM articles WHERE id = ${req.params.id} `
    );
    console.log(article);
    res.render("articleEdit", { article: article[0] });
});

// Pagina agregar Articulo
router.get("/articles/add/", async (req, res) => {
    res.render("articleAdd");
});

// Pagina Articulo
router.get("/articles", (req, res) => {
    res.render("article");
});

// Pagina panel Administrador
router.get("/admin", async (req, res) => {
    const [articles] = await db("SELECT * FROM articles");
    const [authors] = await db("SELECT * FROM authors");
    res.render("panel-admin", { articles, authors });
});

module.exports = router;