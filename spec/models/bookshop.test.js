require("../mongodb_helper");
const Bookshop = require("../../models/bookshop");

describe('bookshops collection', () => {
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

  it('returns the websites of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].website).toEqual('https://gaystheword.co.uk')
      expect(bookshops[1].website).toEqual('https://www.roundtablebooks.co.uk')
      done();
    });
  })

  it('returns the opening hours of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].openingHours).toEqual(['Monday - Saturday: 11am - 6pm', 'Sunday: 1pm - 6pm'])
      expect(bookshops[1].openingHours).toEqual(['Sunday - Friday: 11am - 5:30pm', 'Saturday: 9:30am - 5:30pm'])
      done();
    })
  })
})
