const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/signIn", controllers.pages.signIn);
router.get("/signUp", controllers.pages.signUp);
router.get("/users", controllers.pages.users);

module.exports = router;
