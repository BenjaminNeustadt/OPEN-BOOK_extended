const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  bookstoreOwner: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
