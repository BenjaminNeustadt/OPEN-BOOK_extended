class Search {
  findSearchResults(search, bookshops) {
    const filteredBookshops = bookshops.filter(bookshop => bookshop.id == search || bookshop.tags.includes(search))
    return filteredBookshops;
  }
}

module.exports = Search;