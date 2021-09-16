const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/sessions")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
