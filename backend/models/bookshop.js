const mongoose = require("mongoose");

const BookshopSchema = new mongoose.Schema({
  name: String,
  address: Array,
  website: String,
  openingHours: Array,
  tags: Array,
  coordinates: Array,
});

// Export the Schema module
const Bookshop = mongoose.model("Bookshop", BookshopSchema);
module.exports = Bookshop;
