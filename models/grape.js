const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrapeSchema = new Schema ({
  name: { type: String }
  type: { type: String},
  pairings: [{ type: String }],
})

module.exports = mongoose.model("Grape", GrapeSchema)
