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

  // Salt encrypt password
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    })
  })
})

// Enabling this.password to work
UserSchema.methods.comparePasswords = function(pass, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch)
  })
}



module.exports = mongoose.model("User", UserSchema)
