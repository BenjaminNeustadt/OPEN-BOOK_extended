require("../mongodb_helper");
const Bookshop = require("../../backend/models/bookshop");

describe('bookshops collection', () => {
  it('returns the names of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].name).toEqual("Lutyens & Rubinstein Bookshop")
      expect(bookshops[1].name).toEqual("Round Table Books")
      done();
    });
  });

  it('returns the addresses of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].address).toEqual(["21 Kensington Park Road,", "London,", "W11 2EU"])
      expect(bookshops[1].address).toEqual(["97 Granville Arcade", "Coldharbour Lane", "Brixton", "London", "SW9 8PS"])
      done();
    });
  })

  it('returns the websites of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].website).toEqual('https://www.lutyensrubinstein.co.uk')
      expect(bookshops[1].website).toEqual('https://www.roundtablebooks.co.uk')
      done();
    });
  })

  it('returns the tags for the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].tags).toEqual(["poetry", "children", "art"])
      expect(bookshops[1].tags).toEqual(["Children's Books", 'Black-owned Business', 'Inclusive'])
      done();
    });
  });
  
  it('returns the opening hours of the two bookshops', (done) => {
    Bookshop.find((err, bookshops) => {
      expect(err).toBeNull();
      expect(bookshops[0].openingHours).toEqual(["Monday-Saturday: 10am-6pm", "Sunday: 11am-5pm"])
      expect(bookshops[1].openingHours).toEqual(['Sunday - Friday: 11am - 5:30pm', 'Saturday: 9:30am - 5:30pm'])
      done();
    })
  })
});