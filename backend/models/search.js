class Search {
  constructor(search, bookshops) {
    this.search = search;
    this.bookshops = bookshops;
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
    this.removePossibleDuplicates();
    return result
  }

  filterByTag() {
    return this.bookshops.filter(bookshop => this.checkForMatchingTag(bookshop.tags))
  }

  matchesName(bookshop) {
    return bookshop.divId.substr(0, this.search.length) == this.search
  }

  removePossibleDuplicates() {
    this.bookshops = this.bookshops.filter(bookshop => !this.matchesName(bookshop))
  }

  checkForMatchingTag(tags) {
    let result = false
    tags.map((tag) => {
      if (tag.substr(0, this.search.length) == this.search) {
        result = true
      }
    })
    return result
  }
}

module.exports = Search;