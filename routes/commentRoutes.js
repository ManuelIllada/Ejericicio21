const express = require("express");
const router = express.Router();

router.put("/comments/add/:id", commentsController.addCommentFunction);

module.exports = router;
