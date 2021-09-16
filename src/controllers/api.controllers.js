const { model } = require("mongoose");
const models = require("../models");
const utils = require("../utils");

const signIn = async (req, res) => {
  const { username, password } = req.body;

  const user = await models.user.findOne({ username });

  if (!user) {
    //TODO devolver mensaje de error porque no existe user
    req.session.errorMessage = "El usuario no existe";
    return res.redirect("/pages/signIn");
  }

  const isValid = await utils.compare(password, user.password);
  if (!isValid) {
    //TODO devolver mensaje de error porque no coincide password
    req.session.errorMessage = "El password es incorrecto";
    return res.redirect("/pages/signIn");
  }

  req.session.user = user;
  return res.redirect("/pages/users");
};

const signUp = async (req, res) => {
  const { username, password1, password2 } = req.body;
  //TODO: mongo
  try {
    const existUser = await models.user.findOne({ username });
    if (existUser) {
      //TODO mandar mensaje de que usuario existe mediante sessions
      console.log(req.session);
      req.session.errorMessage = "El usuario ya existe";
      return res.redirect("/pages/signUp");
    }
    const password = await utils.encrypt(password1);
    const user = new models.user({ username, password });
    await user.save();
    return res.redirect("/pages/signIn");
  } catch (err) {
    console.log({ err });
    req.session.errorMessage = "El usuario no se creó correctamente";
    return res.redirect("/pages/signUp");
  }
};

module.exports = {
  signIn,
  signUp,
};
