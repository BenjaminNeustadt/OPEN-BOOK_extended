const Formatter = require("../../backend/models/formatter")

class Search {
  constructor(search, bookshops) {
    this.search = search;
    this.bookshops = bookshops;
    this.formatter = new Formatter;
    return this.findSearchResults()
  }

  findSearchResults() {
    const matchingNames = this.isSameName()
    const matchingTags = this.includesTag()
    const matchesStart = this.startsWith()
    const filteredBookshops = [].concat(matchingNames, matchingTags, matchesStart);
    return filteredBookshops;
  }

  isSameName() {
    const result = this.bookshops.filter(bookshop => bookshop.divId == this.search)
    this.bookshops = this.bookshops.filter(bookshop => bookshop.divId !== this.search)
    return result
  }

  includesTag() {
    return this.bookshops.filter(bookshop => bookshop.tags.includes(this.search))
  }

  startsWith() {
    const lengthOfSearch = this.search.length;
    return this.bookshops.filter(bookshop => bookshop.divId.substr(0, lengthOfSearch) == this.search)
  }
}

module.exports = Search;