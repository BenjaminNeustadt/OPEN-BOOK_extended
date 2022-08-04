describe("The bookshop information", () => {
  it("shows the names of two bookshops", () => {
    cy.visit("/openbook");
    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");
    cy.get(".bookshop-name").last().should("contain", "Round Table Books");
  });

  it("shows the bookshop address", () => {
    cy.visit("/openbook");
    cy.get(".bookshop-address")
      .first()
      .should("contain", "66 Marchmont Street");
    cy.get(".bookshop-address").first().should("contain", "London");
    cy.get(".bookshop-address").first().should("contain", "WC1N 1AB");

    cy.get(".bookshop-address").last().should("contain", "97 Granville Arcade");
    cy.get(".bookshop-address").last().should("contain", "Coldharbour Lane");
    cy.get(".bookshop-address").last().should("contain", "Brixton");
    cy.get(".bookshop-address").last().should("contain", "London");
    cy.get(".bookshop-address").last().should("contain", "SW9 8PS");

  });

  it("contains links to the bookshop websites", () => {
    cy.visit("/openbook");
    cy.get('.bookshop-container').find('a').first().should('have.attr', 'href').should('include','https://gaystheword.co.uk')

    cy.visit("/openbook");
    cy.get('.bookshop-container').find('a').last().should('have.attr', 'href').should('include','https://www.roundtablebooks.co.uk')
  });

  it("shows the bookshop opening times", () => {
    cy.visit("/openbook");
    cy.get(".times").first().should("contain", "Monday - Saturday: 11am - 6pm");
    cy.get(".times").first().should("contain", "Sunday: 1pm - 6pm");

    cy.get(".times").last().should("contain", "Sunday - Friday: 11am - 5:30pm");
    cy.get(".times").last().should("contain", "Saturday: 9:30am - 5:30pm");
  });
  
  it('contains tags for bookshops', () => {
    cy.visit('/openbook')
    cy.get('.tags').first().should('contain', '#LGBT')
    cy.get('.tags').last().should('contain', '#Children #Black')
  })

  it('has image of location', () => {
    cy.visit('/openbook')
    cy.get('.bookshop-container').find('img').first().should('have.attr', 'src').should('include','/images/gays_the_word_map.png')
    cy.get('.bookshop-container').find('img').last().should('have.attr', 'src').should('include','/images/round_table_books_map.png')
  })  
});

