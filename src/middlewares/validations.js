const signUp = (req, res, next) => {
  const { username, password1, password2 } = req.body;

  console.log({ body: req.body });

  if (!username && !password1 && !password2) {
    //TODO: Session para mandar mensaje de que algo no existe
    return res.redirect("/pages/signUp");
  }

  if (password1 !== password2) {
    //TODO: Sessions para mandar mensaje de que los passwords no son iguales
    return res.redirect("/pages/signUp");
  }
  next();
};

module.exports = {
  signUp,
};
