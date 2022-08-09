const Bookshop = require("../models/bookshop");
// @description: get all stores
// @route GET /api/v1/stores
// @access Public
exports.getShops = async (req, res, next) => {
  try {
    const shops = await Bookshop.find();

    return res.status(200).json({
      success: true,
      count: shops.length,
      data: shops
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' })
  }
};