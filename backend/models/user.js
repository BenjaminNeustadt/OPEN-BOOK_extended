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

// remove the boolean value for now
// include only the favourited shops
// favouritestores: Array
// should start as an empty array, when user goes through list and clicks on favourite icon,
// it does array push the favourite shop to it.
//
