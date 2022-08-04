const mongoose = require("mongoose");

const BookshopSchema = new mongoose.Schema({
  name: String,
  address: String,
  postcode: String,
  longitude: String,
  latitude: String,
  cafe: Boolean,
  storeWebsite: String
});

const Bookshop = mongoose.model("Bookshop", BookshopSchema);

module.exports = Bookshop;
