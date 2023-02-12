const db = require("../db");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const { Comments } = require("../models");
const { Users } = require("../models");

//Insertar un Comentario
const addCommentFunction = async (req, res) => {
  await Comments.create({
    content: req.body.content,
    articleId: req.params.id,
  }, ({ include: Users }));
  res.redirect(`/articles/${req.params.id}`);
};

module.exports = {
  addCommentFunction,
};
