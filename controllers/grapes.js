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
        console.log(grape)
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

//   // // HTTP: New grape
//   // app.get("/grapes/new", (req, res) => {
//   //   res.render("grapes-new", {});
//   // })
//   //
//   // // HTTP: Create grape
//   // app.post("/grapes", (req, res) => {
//   //   Grape.create(req.body)
//   //     .then(grape => {
//   //       res.redirect(`/grapes/${phrase._id}`);
//   //     })
//   //     .catch((err) => {
//   //       console.lof(err.message)
//   //     })
//   // })
//   //
//   // HTTP: Show one grape
//   app.get("/grapes/:id", (req, res) => {
//     Grape.findById(req.params.id)
//       .then(grape => {
//         res.render("grapes-show", { grape })
//       })
//       .catch(err => {
//         console.log(err.message)
//       })
//   })
}
