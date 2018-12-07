const Grape = require("../models/grape")


module.exports = app => {

  // HTTP: Index
  app.get("/", (req, res) => {
    res.redirect("homepage.html")
    // .catch(err => {
    //     console.log(err.message)
    })
  // HTTP: Index
  app.get("/grapes", (req, res) => {
    Grape.find({})
      .then(grapes => {
        res.render("display-grapes-index", { grapes })
      })
      .catch(err => {
        console.log(err.message)
      })
  })

  // HTTP: Show One
  app.get("/grapes/:id", (req, res) => {
    Grape.findById(req.params.id)
      .then((grape) => {
        res.render("display-grapes-show", { grape })
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

}
