const mongoose = require("mongoose");

const BookshopSchema = new mongoose.Schema({
  name: String,
  address: Array,
  website: String,
  openingHours: Array,
  tags: Array,
  postcode: String,
  longitude: String,
  latitude: String,
  cafe: Boolean,
  coordinates: Array,
});

const Bookshop = mongoose.model("Bookshop", BookshopSchema);

module.exports = Bookshop;
