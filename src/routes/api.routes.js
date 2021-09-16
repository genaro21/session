const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");
const models = require("../models");

const router = Router();

router.post("/signIn", controllers.api.signIn);
router.post("/signUp", middlewares.validations.signUp, controllers.api.signUp);

router.post("/eliminar/:id", async (req, res) => {
  const id = req.params.id;
  // con las líneas de arriba lo elimino por parámetros, y con las de abajo lo hago por el body

  // router.post("/eliminar", async (req, res) => {
  //   const id = req.body.id;

  await models.user.findByIdAndRemove(id);
  return res.redirect("/pages/users");
});

module.exports = router;
