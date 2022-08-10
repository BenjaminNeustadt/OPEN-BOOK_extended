const Formatter = require("../../backend/models/formatter")

class Search {
  constructor(search, bookshops) {
    this.search = search;
    this.bookshops = bookshops;
    this.formatter = new Formatter;
    return this.findSearchResults()
  }

  findSearchResults() {
    const matchingNames = this.matchesName()
    const matchingTags = this.includesTag()
    const filteredBookshops = [].concat(matchingNames, matchingTags);
    return filteredBookshops;
  }

  matchesName() {
    const lengthOfSearch = this.search.length
    const result = this.bookshops.filter(bookshop => bookshop.divId.substr(0, lengthOfSearch) == this.search)
    this.bookshops = this.bookshops.filter(bookshop => bookshop.divId.substr(0, lengthOfSearch) !== this.search)
    return result
  }

  includesTag() {
    return this.bookshops.filter(bookshop => bookshop.tags.includes(this.search))
  }
}

module.exports = Search;