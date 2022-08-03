const mongoose = require("mongoose");

const BookstoreSchema = new mongoose.Schema({
  storename: String,
  address: String,
  postcode: String,
  longitude: String,
  latitude: String,
  cafe: Boolean,
  storeWebsite: Hyperlink,
});

const Bookstore = mongoose.model("Bookstore", BookstoreSchema);

module.exports = Bookstore;
