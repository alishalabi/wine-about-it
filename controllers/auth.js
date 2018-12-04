const User = require("../models/user")
const jwt = require("jsonwebtoken")

module.exports = (app) => {

  // HTTP: New User
  app.get("/sign-up", (req, res) => {
    res.render("sign-up", {})
  })

  // HTTP: Create User
  app.post("/sign-up", (req, res) => {
    const user = new User(req.body);

    user
      .save()
      .then(user => {
        var token = jwt.sign({ _id: user._id}, process.env.SECRET, { expiresIn: "60 days"})
        res.cookie("nToken2", token, { maxAge: 900000, httpOnly: true })
        res.redirect("/")
      })
      .catch(err => {
        console.log(err.message)
        return res.status(400).send({ err: err })
      })
  })
    // User.create(req.body)
    //   .then((user) => {
    //     console.log(user)
    //     res.redirect("/")
    //   })
    //   .catch(err => {
    //     console.log(err.message)
    //   })
    // })


}
