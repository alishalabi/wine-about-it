// Connect Mongo DB
require("./data/wine-db")

// Middleware
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator")
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");

// Instantiating Express
const app = express()

// Integrating middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride("_method"));

// // Connecting Controllers
const grapes = require("./controllers/grapes.js")(app)
const auth = require("./controllers/auth.js")(app)

// Listen at port 3000
app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Listening at port 3000!")
})

module.exports = app;
