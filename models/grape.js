const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Grape = mongoose.model("Grape", {
  name: String,
  type: String,
  pairings: [String],
  image: String,
})

module.exports = Grape;
