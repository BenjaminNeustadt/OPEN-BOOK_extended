const Bookshop = require("../models/bookshop");
const Formatter = require("../models/formatter")
const Search = require("../models/search")

const formatter = new Formatter();
const searcher = new Search();
// @description: Get bookshops
// @route: GET /index

const BookShopsController = {
  Display: (req, res) => {
    Bookshop.find((err, bookshops) => {
      const bookshopsWithIds = formatter.addIDS(bookshops);
      res.render('index', { bookshops: bookshopsWithIds })
    });
  },
  SearchResults: (req, res) => {
    if (req.query.search) {
      Bookshop.find((err, bookshops) => {
        let searchQuery = formatter.formatName(req.query.search);
        let bookshopsWithIds = formatter.addIDS(bookshops);
        searchResults = searcher.findSearchResults(searchQuery, bookshopsWithIds);

        res.render('index', {bookshops: searchResults})
      })
    } 
  }
}


module.exports = BookShopsController;