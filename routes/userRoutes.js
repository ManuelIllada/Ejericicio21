const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

router.use(makeUserAvailableInViews);

//PAGINAS DE REGISTRAR USUARIO//

router.get("/registro", userController.registerUser);
router.post("/registro", userController.create);
router.get("/login", userController.index);
router.post("/login", userController.login);
router.get("/logout", userController.logOut);
// router.get("/crear", userController.create);
// router.get("/", userController.store);
// router.get("/:id", userController.show);
// router.get("/:id/editar", userController.edit);
// router.get("/:id", userController.update);
// router.get("/:id", userController.destroy);

module.exports = router;
