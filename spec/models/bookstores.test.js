const mongoose = require("mongoose");

require("../mongodb_helper");
const Bookshop = require("../../models/bookstores");

describe('bookstores collection', () => {
  it('returns the names of the two bookshops', (done) => {
    Bookshop.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts[0].name).toEqual("Gay's the Word")
      expect(posts[1].name).toEqual("Round Table Books")
      done();
    });
  });
})