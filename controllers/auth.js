const User = require("../models/user")

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
        console.log(user)
        res.redirect("/")
      })

    User.create(req.body)
      .then((user) => {
        console.log(user)
        res.redirect("/")
      })
      .catch(err => {
        console.log(err.message)
      })
  })


}
