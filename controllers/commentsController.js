const db = require("../db");

const { Comments } = require("../models");
const { Users } = require("../models");

//Insertar un Comentario
const addCommentFunction = async (req, res) => {
  await Comments.create({
    content: req.body.content,
    articleId: req.params.id,
  }, ({ include: Users }));
  res.redirect(`/articulos/${req.params.id}`);
};

module.exports = {
  addCommentFunction,
};
