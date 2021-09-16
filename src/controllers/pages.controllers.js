const models = require("../models");

const signIn = (req, res) => {
  //TODO
  let errorMessage;

  if (req.session.errorMessage) {
    errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;
  }
  return res.render("signIn.pug", { errorMessage });
};
const signUp = (req, res) => {
  console.log(req.session);
  let errorMessage;

  if (req.session.errorMessage) {
    errorMessage = req.session.errorMessage;
    delete req.session.errorMessage;
  }
  return res.render("signUp.pug", { errorMessage });
};

const users = async (req, res) => {
  //mediante session le indico si es admin o no
  const user = req.session.user;

  console.log({ user });

  let userList;

  if (user && user.admin === true) {
    userList = await models.user.find({ admin: false });
  }
  console.log({ userList });
  return res.render("users.pug", { user, userList });
};

module.exports = {
  signIn,
  signUp,
  users,
};
