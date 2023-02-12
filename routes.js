const express = require("express");
const router = express.Router();

///////////////////////////////////////// Controladores
const articleController = require("./controllers/articleController");
const commentsController = require("./controllers/commentsController");

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

// Página Api Articulos
router.get("/api/articulos", articleController.apiArticlesPage)

///////////////////////////////////////  FUNCIONES ARTICULO

// Función Agregar Articulo
router.put("/articles/add", articleController.addArticleFunction);

// Función Editar Articulo
router.patch("/articles/edit/:id", articleController.editArticleFunction);

// Función Eliminar Articulo
router.delete("/articles/delete/:id", articleController.deleteArticle);

// Función Agregar Comentario
router.put("/comments/add/:id", commentsController.addCommentFunction);

module.exports = router;
