const express = require("express");
const router = express.Router();
const db = require("./db")

/* 
const mainController = require("./controllers/mainController")
const articleController = require("./controllers/articleController") */

router.get("/", async (req, res) => {
    const [articulos] = await db("SELECT * FROM articulos")
    res.render("home", { articulos })
})

router.get("/articulos", (req, res) => {
    res.render("article")
})

router.get("/admin", async (req, res) => {
    const [articulos] = await db("SELECT * FROM articulos")
    res.render("panel-admin", { articulos })
})

module.exports = router