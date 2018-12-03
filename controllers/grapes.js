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

//   // HTTP: Create
//   app.post("/grapes/new", (req, res) => {
//     const grape = new Grape(req.body);
//     grape
//       .save((err, grape) => {
//         return res.redirect(`/grapes`)
//       })
//     console.log(req.body)
//   })
//
//   // HTTP: Index grapes
//   app.get("/grapes", (req, res) => {
//     console.log("Hello World")
//     Grape.find({})
//       .then(grapes => {
//         res.render("grapes-index", { grapes });
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   })
//   //
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
