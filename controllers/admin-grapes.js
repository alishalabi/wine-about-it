const Grape = require("../models/grape")
const requiresLogin = require("./requires-login")


module.exports = app => {

  // HTTP: Index
  app.get("/admin", requiresLogin, (req, res) => {
    var currentUser = req.user
    console.log(currentUser)
    Grape.find({})
      .then(grapes => {
        res.render("admin-grapes-index", { grapes, currentUser })
      })
      .catch(err => {
        console.log(err.message)
      })
  })


  // HTTP: New
  app.get("/admin/grapes/new", requiresLogin, (req, res) => {
    res.render("admin-grapes-new", {})
  })

  // HTTP: Create
  app.post("/admin/grapes", requiresLogin, (req, res) => {
    Grape.create(req.body)
      .then((grape) => {
        res.redirect("/admin")
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Show One
  app.get("/admin/grapes/:id", requiresLogin, (req, res) => {
    Grape.findById(req.params.id)
      .then((grape) => {
        res.render("admin-grapes-show", { grape: grape })
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Edit
  app.get("/admin/grapes/:id/edit", requiresLogin, (req, res) => {
    Grape.findById(req.params.id, function(err, grape) {
      res.render("admin-grapes-edit", { grape: grape})
    })
  })

  // HTTP: Update
  app.put("/admin/grapes/:id", requiresLogin, (req, res) => {
    Grape.findByIdAndUpdate(req.params.id, req.body)
      .then(grape => {
        res.redirect(`/admin/grapes/${grape._id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  // HTTP: Delete
  app.delete("/admin/grapes/:id", requiresLogin, (req, res) => {
    console.log("DELETE grape")
    Grape.findByIdAndRemove(req.params.id)
      .then((review) => {
        res.redirect("/admin")
      })
      .catch((err) => {
        console.log(err.message)
      })
  })
}
