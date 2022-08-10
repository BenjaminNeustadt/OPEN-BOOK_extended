class Search {
  searchFilter(search, bookshops) {
    console.log(search)
    console.log(bookshops)
    const filteredBookshops = bookshops.filter(bookshop => bookshop.id == search)
    console.log(filteredBookshops)
    return filteredBookshops;
  }
}

module.exports = Search;