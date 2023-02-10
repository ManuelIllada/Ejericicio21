const db = require("../db");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

//Página Todos los Articulos
const index = async (req, res) => {
  const [articulos] = await db("SELECT * FROM articles");
  res.render("home", { articulos, format, es });
};

//Página Crear Articulos
const addArticlePage = (req, res) => {
  res.render("articleAdd");
};

//Página editar un Articulo
const editArticlePage = async (req, res) => {
  const [article] = await db(
    `SELECT * FROM articles WHERE id = ${req.params.id} `
  );
  console.log(article);
  res.render("articleEdit", { article: article[0] });
};

//Página admin de Articulos
const admArticulosPAge = async (req, res) => {
  const [articles] = await db("SELECT * FROM articles");
  const [users] = await db("SELECT * FROM users");
  res.render("panel-admin", { articles, users });
};

//Insertar un Articulo
const addArticleFunction = "";

//Editar un Articulo
const editArticleFunction = async (req, res) => {
  /* const { firstname, lastname, age } = req.body
    await db(`UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = "${req.params.id}"`, [firstname, lastname, age]) */
  return res.redirect("/articulos");
};

//Eliminar un Articulo
const deleteArticle = "";

module.exports = {
  index,
  addArticlePage,
  addArticleFunction,
  editArticlePage,
  editArticleFunction,
  deleteArticle,
  admArticulosPAge,
};
