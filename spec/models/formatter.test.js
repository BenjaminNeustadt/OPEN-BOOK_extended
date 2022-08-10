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

  xit('returns ids from an array of objects by formatting only the names',() => {
    const formatter = new Formatter();
    const bookshops = [
      {name: "Art Of Your's", address: ["53 The Street", "SE6 23S"]},
      {name: "Sarah's Books", address: ["Sarah's Home", "SE4 3SD"]}
    ]
    expect(formatter.changeToIDS(bookshops)).toEqual(['artofyours', 'sarahsbooks']);
  })
})