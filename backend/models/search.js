class Search {
  constructor(search, bookshops) {
    this.search = search;
    this.bookshops = bookshops;
    return this.findSearchResults()
  }

  findSearchResults() {
    const filteredBookshops = this.bookshops.filter(bookshop => bookshop.divId == this.search || bookshop.tags.includes(this.search))
    return filteredBookshops;
  }
}

module.exports = Search;