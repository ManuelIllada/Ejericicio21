const { format } = require("date-fns");
const formidable = require("formidable")
const { es } = require("date-fns/locale");
const { Articles, Comments, Users } = require("../models");

//Página Todos los Articulos
const index = async (req, res) => {
  const articulos = await Articles.findAll({
    include: Users, order: [
      ['createdAt', 'DESC']
    ]
  });
  res.render("home", { articulos, format, es });
};

//Página Crear Articulos
const addArticlePage = async (req, res) => {
  const users = await Users.findAll();
  res.render("articleAdd", { users });
};

//Página editar un Articulo
const editArticlePage = async (req, res) => {
  const article = await Articles.findByPk(req.params.id, { include: Users });
  res.render("articleEdit", { article });
};

//Página datos de un Articulo
const articlePage = async (req, res) => {
  const article = await Articles.findByPk(req.params.id, { include: Users });
  const comments = await Comments.findAll({
    where: { articleId: req.params.id },
  });
  res.render("article", { article, comments, format, es });
};


//Página Api Articulos
const apiArticlesPage = async (req, res) => {
  const articulos = await Articles.findAll({ include: Users });
  res.json({ articulos });
};

//Insertar un Articulo
const addArticleFunction = (req, res) => {
  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Articles.create({
      title: fields.title,
      content: fields.content,
      image: files.image.newFilename,
      userId: fields.author
    })
    res.redirect("/admin");
  })
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
  apiArticlesPage,
  editArticleFunction,
  deleteArticle,
};
