const Formatter = require("../../backend/models/formatter")

class Search {
  constructor(search, bookshops) {
    this.search = search;
    this.bookshops = bookshops;
    this.formatter = new Formatter;
    return this.findSearchResults()
  }

  findSearchResults() {
    const matchingNames = this.filterByName()
    const matchingTags = this.filterByTag()
    const filteredBookshops = [].concat(matchingNames, matchingTags);
    return filteredBookshops;
  }

  filterByName() {
    const result = this.bookshops.filter(bookshop => this.matchesName(bookshop))
    this.bookshops = this.bookshops.filter(bookshop => !this.matchesName(bookshop))
    return result
  }

  filterByTag() {
    return this.bookshops.filter(bookshop => bookshop.tags.includes(this.search))
  }

  matchesName(bookshop) {
    return bookshop.divId.substr(0, this.search.length) == this.search
  }
}

module.exports = Search;