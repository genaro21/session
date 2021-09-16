//Bcrypt: encriptar y comparar
const bcrypt = require("bcrypt");

const encrypt = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, 10);
  //este await podría quitarse porque está el return.
};

const compare = async (plainPassword, password) => {
  return await bcrypt.compare(plainPassword, password);
};

module.exports = {
  encrypt,
  compare,
};
