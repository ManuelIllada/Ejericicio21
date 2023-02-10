const express = require("express");
const router = express.Router();

///////////////////////////////////////// Controladores
const articleController = require("./controllers/articleController");

/////////////////////////////////////// PÁGINAS ARTICULO

// Página Home Articulos
router.get("/", articleController.index);

// Pagina agregar Articulo
router.get("/articles/add", articleController.addArticlePage);

// Pagina editar Articulo
router.get("/articles/edit/:id", articleController.editArticlePage);

// Pagina un Articulo
router.get("/articles/:id", articleController.articlePage);

// Pagina panel Administrador
router.get("/admin", articleController.admArticulosPAge);

///////////////////////////////////////  FUNCIONES ARTICULO

// Función Agregar Articulo
router.put("/articles/add", articleController.addArticleFunction);

// Función Editar Articulo
router.patch("/articles/edit/:id", articleController.editArticleFunction);

// Función Eliminar Articulo
router.delete("/articles/delete/:id", articleController.deleteArticle);

module.exports = router;
