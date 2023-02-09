const express = require("express");
const router = express.Router();
const db = require("./db")

/* 
const mainController = require("./controllers/mainController")
const articleController = require("./controllers/articleController") */

router.get("/", async (req, res) => {
    const [articulos] = await db("SELECT * FROM articles")
    res.render("home", { articulos })
})

router.get("/articulos", (req, res) => {
    res.render("article")
})

router.get("/admin", async (req, res) => {
    const [articulos] = await db("SELECT * FROM articles")
    const [autores] = await db("SELECT * FROM authors")
    res.render("panel-admin", { articulos, autores })
})

module.exports = router