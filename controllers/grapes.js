const Grape = require("../models/grape")

module.exports = app => {

  // HTTP: Index
  app.get("/", (req, res) => {
    Grape.find()
      .then(grapes => {
        res.render("grapes-index", { grapes: grapes })
      })
      .catch(err => {
        console.log(err.message)
      })
  })
  

  // HTTP: New
  app.get("/grapes/new", (req, res) => {
    res.render("grapes-new", {})
  })

  // HTTP: Create
  app.post("/grapes", (req, res) => {
    Grape.create(req.body)
      .then((grape) => {
        res.redirect("/")
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Show One
  app.get("/grapes/:id", (req, res) => {
    Grape.findById(req.params.id)
      .then((grape) => {
        res.render("grapes-show", { grape: grape })
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Edit
  app.get("/grapes/:id/edit", (req, res) => {
    Grape.findById(req.params.id, function(err, grape) {
      res.render("grapes-edit", { grape: grape})
    })
  })

  // HTTP: Update
  app.put("/grapes/:id", (req, res) => {
    Grape.findByIdAndUpdate(req.params.id, req.body)
      .then(grape => {
        res.redirect(`grapes/${grape._id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Delete
  app.delete("/grapes/:id", (req, res) => {
    console.log("DELETE grape")
    Grape.findByIdAndRemove(req.params.id)
      .then((review) => {
        res.redirection("/")
      })
      .catch((err) => {
        console.log(err.message)
      })
  })
}
