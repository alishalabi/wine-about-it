const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  username: { type: String, required: true},
  password: { type: String, select: false }
})

UserSchema.pre("save", function(next) {
  // Set createdAt and updatedAt values when user is initalized
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
})

module.exports = mongoose.model("User", UserSchema)
