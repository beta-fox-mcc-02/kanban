const router = require("express").Router();
const userController = require("../controllers/userController");
const authenticated = require("../middlewares/authenticated");

router.post("/regis", userController.register);
router.post("/login", userController.login);
router.post("/gSignin", userController.gSignin);
router.get("/project", authenticated, userController.project);

module.exports = router;
