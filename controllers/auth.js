const User = require("../models/user")
const jwt = require("jsonwebtoken")

module.exports = (app) => {

  // HTTP GET: New User
  app.get("/sign-up", (req, res) => {
    res.render("sign-up", {})
  })

  // HTTP POST: Create User
  app.post("/sign-up", (req, res) => {
    const user = new User(req.body);

    user
      .save()
      .then(user => {
        var token = jwt.sign({ _id: user._id}, process.env.SECRET, { expiresIn: "60 days"})
        res.cookie("nToken2", token, { maxAge: 900000, httpOnly: true })
        res.redirect("/admin")
      })
      .catch(err => {
        console.log(err.message)
        return res.status(400).send({ err: err })
      })
  })

    // HTTP GET: Logout Page
    app.get("/logout", (req, res) => {
      res.clearCookie("nToken2")
      res.redirect("/")
    })

    // HTTP GET: Login Page
    app.get("/login", (req, res) => {
      res.render("login")
    })

    // HTTP POST: Login Page
    app.post("/login", (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      // Find this username
      User.findOne({ username }, "username password")
        .then(user => {
          // Case: User not found
          if (!user) {
            return res.status(401).send({ message: "Wrong Username or Password"})
          }
          // User found - check password
          user.comparePassword(password, (err, isMatch) => {
            if (!isMatch) {
              // Case: User found - password does not match
              return res.status(401).send({ message: "Wrong Password"})
            }
            // Case: User found - password match
            const token = jwt.sign({ _id: user._id, username: user.username}, process.env.SECRET, {
              expiresIn: "60 days"
            })

            // Set cookie, redirect to root
            res.cookie("nToken2", token, { maxAge: 900000, httpOnly: true })
            res.redirect("/admin")
          })
        })
        .catch(err => {
          console.log(err)
        })
    })


}
