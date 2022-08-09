const Bookshop = require("../models/bookshop");
const Formatter = require("../models/formatter")

const formatter = new Formatter();

// @description: Get bookshops
// @route: GET /index

const BookShopsController = {
  Display: (req, res) => {
    Bookshop.find((err, bookshops) => {
      const bookshopIds = formatter.changeToIDS(bookshops);
      res.render('index', { bookshops: bookshops, bookshopIds: bookshopIds })
    });
  },
  
  Search: (req, res) => {
    res.render('search')
  },

  SearchResults: (req, res) => {
    Bookshop.find((err, bookshops) => {
      const searchResult = formatter.formatName(req.query.search);
      const bookshopIds = formatter.changeToIDS(bookshops);
      res.render('search_results', {bookshops: bookshops, bookshopIds: bookshopIds, searchResult: searchResult})
    })
  }
}

module.exports = BookShopsController;