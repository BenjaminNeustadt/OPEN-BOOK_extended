class Search {
  constructor() {

  }

  changeToIDS(bookshops) {
    let bookshopIds = []
    bookshops.forEach((bookshop) => {
      let shop = bookshop.name.replace(/'/g, "").split(" ")
      shop = shop.join("").toLowerCase()
      bookshopIds.push(shop)
    })
    return bookshopIds;
  }

}

module.exports = Search;