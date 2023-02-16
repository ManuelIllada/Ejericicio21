const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

router.use(makeUserAvailableInViews);

router.use(isAuthenticated);
router.put("/add/:id", commentsController.addCommentFunction);

module.exports = router;
