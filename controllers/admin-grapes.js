const Grape = require("../models/grape")


module.exports = app => {

  // HTTP: Index
  app.get("/admin", (req, res) => {
    var currentUser = req.user
    Grape.find({})
      .then(grapes => {
        res.render("admin-grapes-index", { grapes, currentUser })
      })
      .catch(err => {
        console.log(err.message)
      })
  })


  // HTTP: New
  app.get("/admin/grapes/new", (req, res) => {
    res.render("admin-grapes-new", {})
  })

  // HTTP: Create
  app.post("/admin/grapes", (req, res) => {
    Grape.create(req.body)
      .then((grape) => {
        res.redirect("/admin")
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Show One
  app.get("/admin/grapes/:id", (req, res) => {
    Grape.findById(req.params.id)
      .then((grape) => {
        res.render("admin-grapes-show", { grape: grape })
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Edit
  app.get("/admin/grapes/:id/edit", (req, res) => {
    Grape.findById(req.params.id, function(err, grape) {
      res.render("admin-grapes-edit", { grape: grape})
    })
  })

  // HTTP: Update
  app.put("/admin/grapes/:id", (req, res) => {
    Grape.findByIdAndUpdate(req.params.id, req.body)
      .then(grape => {
        res.redirect(`/admin/grapes/${grape._id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Delete
  app.delete("/admin/grapes/:id", (req, res) => {
    console.log("DELETE grape")
    Grape.findByIdAndRemove(req.params.id)
      .then((review) => {
        res.redirection("/admin")
      })
      .catch((err) => {
        console.log(err.message)
      })
  })
}
