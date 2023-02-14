const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");


router.put("/add/:id", commentsController.addCommentFunction);

module.exports = router;
