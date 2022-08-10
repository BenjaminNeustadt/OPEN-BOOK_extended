const Formatter = require("../../backend/models/formatter")

describe(Formatter,() => {
  it('removes spaces and capitals from a string',() => {
    const formatter = new Formatter();
    expect(formatter.formatName('Perry Handwell')).toEqual('perryhandwell')
  })

  it('removes spaces, capital and punctuation from a string',() => {
    const formatter = new Formatter();
    expect(formatter.formatName("It's ME")).toEqual('itsme')
  })

  it('returns the array of objects with IDs',() => {
    const formatter = new Formatter();
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"]},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"]}
    ]
    expect(formatter.addIDS(bookshops)).toEqual([
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"], divId: 'artofyours'},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"], divId: 'sarahsbooks'}
    ]);
  })
})