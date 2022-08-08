const mongoose = require("mongoose");
const geocoder = require('../utils/geocoder')

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
  coordinates: Array,
});

// Geocode & create location
BookshopSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address.join());
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  }

  // Do not save address
  this.address = undefined;
  next();
});

// Export the Schema module
const Bookshop = mongoose.model("Bookshop", BookshopSchema);
module.exports = Bookshop;
