const mongoose = require("mongoose");

const BookshopSchema = new mongoose.Schema({
  name: String,
  address: {
    type: Array,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  website: String,
  openingHours: Array,
  tags: Array,
  cafe: Boolean,
});

const Bookshop = mongoose.model("Bookshop", BookshopSchema);

module.exports = Bookshop;
