const Search = require("../../backend/models/search")

describe('Search',() => {
  it('filters for a name',() => {
    const searchObject = new Search;
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], id: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['happy', 'sad'], id: 'sarahsbooks'}
    ]
    const search = 'sarahsbooks'
    expect(searchObject.searchFilter(search, bookshops)).toEqual([
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['happy', 'sad'], id: 'sarahsbooks'}
    ]);
  })

  it('filters for a tag',() => {
    const searchObject = new Search;
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], id: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['miserable', 'sad'], id: 'sarahsbooks'}
    ]
    const search = 'happy'
    expect(searchObject.searchFilter(search, bookshops)).toEqual([
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'sad'], id: 'artofyours'}
    ]);
  })
})
