const db = require("../db");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const { Articles, Comments, Users } = require("../models");

//Página Todos los Articulos
const index = async (req, res) => {
  const articulos = await Articles.findAll({ include: Users });
  res.render("home", { articulos, format, es });
};

//Página Crear Articulos
const addArticlePage = (req, res) => {
  res.render("articleAdd");
};

//Página editar un Articulo
const editArticlePage = async (req, res) => {
  const article = await Articles.findByPk(req.params.id);
  res.render("articleEdit", { article });
};

//Página datos de un Articulo
const articlePage = async (req, res) => {
  const article = await Articles.findByPk(req.params.id, { include: Users });
  const comments = await Comments.findAll({ where: { articleId: req.params.id } })
  res.render("article", { article, comments, format, es });
};

//Página admin de Articulos
const admArticulosPAge = async (req, res) => {
  const articles = await Articles.findAll({ include: Users });
  res.render("panel-admin", { articles, format, es });
};

//Insertar un Articulo
const addArticleFunction = async (req, res) => {
  await Articles.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image
  });
  res.redirect("/admin");
};

//Editar un Articulo
const editArticleFunction = async (req, res) => {
  await Articles.update(
    {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.redirect("/admin");
};

//Eliminar un Articulo
const deleteArticle = async (req, res) => {
  await Articles.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/admin");
};

module.exports = {
  index,
  articlePage,
  addArticlePage,
  addArticleFunction,
  editArticlePage,
  editArticleFunction,
  deleteArticle,
  admArticulosPAge,
};
