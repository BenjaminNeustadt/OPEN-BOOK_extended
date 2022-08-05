const mongoose = require("mongoose");

const BookshopSchema = new mongoose.Schema({
  name: String,
  address: Array,
  website: String,
  openingHours: Array,
  longitude: String,
  latitude: String,
  cafe: Boolean
});

const Bookshop = mongoose.model("Bookshop", BookshopSchema);

module.exports = Bookshop;
