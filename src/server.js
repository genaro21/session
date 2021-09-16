const express = require("express");
const routes = require("./routes");
const path = require("path");
const session = require("express-session");

const server = express();

//Settings
server.set("port", 4100);
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "pug");

//Midlewares
server.use(express.urlencoded({ extended: false }));
server.use(
  session({
    secret: "loquesea",
    resave: false,
    saveUninitialized: false,
  })
);

//Routes
server.use("/pages", routes.pages);
server.use("/api", routes.api);

//Public folder

server.use(express.static(path.join(__dirname, "public")));

module.exports = server;
