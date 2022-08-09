const Bookshop = require("../models/bookshop");
const Search = require("../models/search")

const search = new Search();

// @description: Get bookshops
// @route: GET /index

const BookShopsController = {
  Display: (req, res) => {
    Bookshop.find((err, bookshops) => {
      const bookshopIds = search.changeToIDS(bookshops);
      res.render('index', { bookshops: bookshops, bookshopIds: bookshopIds })
    });
  },
  
  Search: (req, res) => {
    res.render('search')
  },

  SearchResults: (req, res) => {
    Bookshop.find({ name: req.query.search }, (err, nameResults) => {
      if (err) {
        throw err
      }
      res.render('search_results', {bookshops: nameResults})
    })
  }
}

module.exports = BookShopsController;