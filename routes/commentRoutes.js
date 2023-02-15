const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.use(isAuthenticated);
router.put("/add/:id", commentsController.addCommentFunction);

module.exports = router;
