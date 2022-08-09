const Bookshop = require("../models/bookshop");

// @description: Get bookshops
// @route: GET /index

const BookShopsController = {
  Display: (req, res) => {
    const bookshopIds = []
    Bookshop.find((err, bookshops) => {
      bookshops.forEach((bookshop) => {
        let shop = bookshop.name.replace(/'/g, "").split(" ")
        shop = shop.join("").toLowerCase()
        bookshopIds.push(shop)
      })
      res.render('index', { bookshops: bookshops, bookshopIds: bookshopIds })
    });
  }
}

module.exports = BookShopsController;