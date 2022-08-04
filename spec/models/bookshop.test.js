const mongoose = require("mongoose");

require("../mongodb_helper");
const Bookshop = require("../../models/bookshop");

describe('bookstores collection', () => {
  it('returns the names of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].name).toEqual("Gay's the Word")
      expect(bookshops[1].name).toEqual("Round Table Books")
      done();
    });
  });

  it('returns the addresses of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].address).toEqual(["66 Marchmont Street", "London", "WC1N 1AB"])
      expect(bookshops[1].address).toEqual(["97 Granville Arcade", "Coldharbour Lane", "Brixton", "London", "SW9 8PS"])
      done();
    });
  })

  // it('returns the full details of the two bookshops', (done) => {
  //   Bookshop.find((err, bookshops) => {
  //     expect(err).toBeNull();
  //     console.log(bookshops[0])
  //     expect(bookshops[0]).toMatchObject({ name: "Gay's the Word", address: ["66 Marchmont Street", "London", "WC1N 1AB"]})
  //     expect(bookshops[1]).toMatchObject({ name: "Round Table Books", address: ["97 Granville Arcade", "Coldharbour Lane", "Brixton", "London", "SW9 8PS"] })
  //   })
  // })
})