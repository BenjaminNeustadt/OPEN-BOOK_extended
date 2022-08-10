class Formatter {

  addIDS(bookshops) {
    bookshops.forEach((bookshop) => {
      let shop = this.formatName(bookshop.name);
      Object.assign(bookshop, {divId: shop});
    })
    return bookshops;
  }

  formatName(name) {
    let id = name.replace(/'/g, "").split(" ")
    id = id.join("").toLowerCase()
    if (id == 'lgbtq') {
      return 'LGBTQ'
    };
    return id;
  }

}

module.exports = Formatter;