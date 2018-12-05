// Connect Mongo DB
require("./data/wine-db")
require("dotenv").config()

// Middleware
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator")
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const checkAuth = require("./middleware/checkAuth.js")


// Initalizing Express
const app = express()

// // Integrating custom middleware into Express
// const checkAuth = (req, res, next) => {
//   console.log("Checking authencation");
//   if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
//     req.user = null
//   } else {
//     const token = req.cookies.nToken
//     const decodedToken = jwt.decode(token, { complete: true}) || {};
//     req.user = decodedToken.payload;
//   }
//   next();
// }

// Integrating npm middleware into Express
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride("_method"));
app.use(cookieParser())

// Integrating custom middleware into Express
app.use(checkAuth)

// // Connecting Controllers
const grapes = require("./controllers/grapes.js")(app)
const auth = require("./controllers/auth.js")(app)

// Listen at port 3000
app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Listening at port 3000!")
})

module.exports = app;
