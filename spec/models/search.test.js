const Search = require("../../backend/models/search")

describe('Search',() => {

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

  it('filters using just one letter',() => {
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['happy', 'not sad'], divId: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['miserable', 'sad'], divId: 'sarahsbooks'},
      {name: "Spoon's Books", address: ["Spoon's Shed", "SE4 3SJ"], tags: ['loving', 'sweet'], divId: 'spoonsbooks'}
    ]
    const search = 's';
    expect(new Search(search, bookshops)).toEqual([
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['miserable', 'sad'], divId: 'sarahsbooks'},
      {name: "Spoon's Books", address: ["Spoon's Shed", "SE4 3SJ"], tags: ['loving', 'sweet'], divId: 'spoonsbooks'}
    ]);
  })

  it('removes duplicates',() => {
    const bookshops = [
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['sarah', 'sad'], divId: 'sarahsbooks'}
    ]
    const search = 'sarah';
    expect(new Search(search, bookshops)).toEqual([
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['sarah', 'sad'], divId: 'sarahsbooks'}
    ]);
  })

  it('allows you to search for just the beginning of a tag',() => {
    const bookshops = [
      {name: "Piggy Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['happy', 'sad'], divId: 'piggybooks'},
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], tags: ['unbelieveable', 'breakfast'], divId: 'artofyours'}
    ]
    const search = 'sa';
    expect(new Search(search, bookshops)).toEqual([
      {name: "Piggy Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['happy', 'sad'], divId: 'piggybooks'},
    ]);
  })

  it('removes duplicates when two tags match',() => {
    const bookshops = [
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['sarah', 'sarah is sad'], divId: 'sarahsbooks'}
    ]
    const search = 'sarah';
    expect(new Search(search, bookshops)).toEqual([
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], tags: ['sarah', 'sarah is sad'], divId: 'sarahsbooks'}
    ]);
  })
})
