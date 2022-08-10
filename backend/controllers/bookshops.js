const Bookshop = require("../models/bookshop");
const Formatter = require("../models/formatter")

const formatter = new Formatter();

// @description: Get bookshops
// @route: GET /index

const BookShopsController = {
  Display: (req, res) => {
    Bookshop.find((err, bookshops) => {
      const bookshopsWithIds = formatter.addIDS(bookshops);
      res.render('index', { bookshops: bookshopsWithIds })
    });
  },
  
  Search: (req, res) => {
    res.render('search')
  },

  SearchResults: (req, res) => {
    if (req.query.search) {
      Bookshop.find((err, bookshops) => {
        let searchResult = formatter.formatName(req.query.search);
        let bookshopsWithIds = formatter.addIDS(bookshops);

        res.render('index', {bookshops: bookshopsWithIds, searchResult: searchResult})
      })
    } 
  }
}


module.exports = BookShopsController;