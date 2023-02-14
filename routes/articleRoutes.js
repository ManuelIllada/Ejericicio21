const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

///////////////////////////////////////  PAGINAS ARTICULO

// Pagina agregar Articulo
router.get("/add", articleController.addArticlePage);

// Pagina editar Articulo
router.get("/edit/:id", articleController.editArticlePage);

// Pagina un Articulo
router.get("/:id", articleController.articlePage);

///////////////////////////////////////  FUNCIONES ARTICULO

// Función Agregar Articulo 
router.put("/add", articleController.addArticleFunction);

// Función Editar Articulo
router.patch("/edit/:id", articleController.editArticleFunction);

// Función Eliminar Articulo
router.delete("/delete/:id", articleController.deleteArticle);

module.exports = router;
