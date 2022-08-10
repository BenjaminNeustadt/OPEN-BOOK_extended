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
    const filteredBookshops = matchingNames.concat(matchingTags);
    return filteredBookshops;
  }

  isSameName() {
    return this.bookshops.filter(bookshop => bookshop.divId == this.search)
  }

  includesTag() {
    return this.bookshops.filter(bookshop => bookshop.tags.includes(this.search))
  }
}

module.exports = Search;