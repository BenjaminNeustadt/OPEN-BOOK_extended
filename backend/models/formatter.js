class Formatter {

  addIDS(bookshops) {
    bookshops.forEach((bookshop) => {
      let shop = this.formatName(bookshop.name);
      Object.assign(bookshop, {divId: shop});
    })
    return bookshops;
  }

  formatName(name) {
    if (name == 'lgbtq') {
      return 'LGBTQ';
    }
    let id = name.replace(/'/g, "").split(" ")
    id = id.join("").toLowerCase()
    return id;
  }

}

module.exports = Formatter;