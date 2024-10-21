const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  price: Number,
  reviews: String,
  totalPurchases: String,
  priceHistory: [{
    price: Number,
    checkedAt: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('Product', productSchema);
