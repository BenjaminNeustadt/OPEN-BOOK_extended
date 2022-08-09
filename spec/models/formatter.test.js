const Formatter = require("../../backend/models/formatter")

describe(Formatter,() => {
  it('removes spaces and capitals from a string',() => {
    const formatter = new Formatter();
    expect(formatter.formatName('Perry Handwell')).toEqual('perryhandwell')
  })
})