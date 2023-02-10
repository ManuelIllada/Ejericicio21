const db = require("../db");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const { Comments } = require("../models");

//Insertar un Articulo
const addCommentFunction = async (req, res) => {
  await Comments.create({
    content: req.body.content,
    articleId: req.params.id,
  });
  res.redirect(`/articles/${req.params.id}`);
};

module.exports = {
  addCommentFunction,
};
