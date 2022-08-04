const mongoose = require("mongoose");

require("../mongodb_helper");
const Bookshop = require("../../models/bookstores");

describe('bookstores collection', () => {
  it('returns the details of the two bookshops', (done) => {
    Bookshop.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts[0].name).toEqual("Gay's the Word")
      done();
    });
  });
})