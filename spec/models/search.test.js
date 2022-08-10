const Search = require("../../backend/models/search")

const Formatter = require("../../backend/models/formatter")

describe('Search',() => {
  beforeEach(() => {
    this.formatter = new Formatter()
  })

  it('filters for a name',() => {
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], divId: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['happy', 'sad'], divId: 'sarahsbooks'}
    ]
    const result = new Search('sarahsbooks', bookshops);
    expect(result).toEqual([
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['happy', 'sad'], divId: 'sarahsbooks'}
    ]);
  })

  it('filters for a tag',() => {
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], divId: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['miserable', 'sad'], divId: 'sarahsbooks'}
    ]
    const search = 'happy'
    expect(new Search(search, bookshops)).toEqual([
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], divId: 'artofyours'}
    ]);
  })

  it('filters for an incomplete name',() => {
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], divId: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['miserable', 'sad'], divId: 'sarahsbooks'}
    ]
    const search = 'art';
    expect(new Search(search, bookshops)).toEqual([
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], divId: 'artofyours'}
    ]);
  })
})
