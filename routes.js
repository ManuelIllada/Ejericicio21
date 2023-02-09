const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController")
const articleController = require("./controllers/articleController")


router.get("/", (req, res) => {
    res.render("home")
})

router.get("/articulos", (req, res) => {
    res.render("articles")
})

router.get("/admin", (req, res) => {
    res.render("panel-admin")
})

module.exports = router