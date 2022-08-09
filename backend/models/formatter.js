class Formatter {

  changeToIDS(bookshops) {
    let bookshopIds = []
    bookshops.forEach((bookshop) => {
      let shop = this.formatName(bookshop.name);
      bookshopIds.push(shop)
    })
    return bookshopIds;
  }

  formatName(name) {
    let id = name.replace(/'/g, "").split(" ")
    id = id.join("").toLowerCase()
    return id;
  }

}

module.exports = Formatter;