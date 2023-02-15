const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

router.use(makeUserAvailableInViews);

// Página Home Articulos
router.get("/", mainController.index);

module.exports = router;
