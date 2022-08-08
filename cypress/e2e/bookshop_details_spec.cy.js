describe("The bookshop information", () => {
  it("shows the names of two bookshops", () => {
    cy.visit("/openbook");
    cy.get("#gaystheword").should("contain", "Gay's the Word");
    cy.get("#roundtablebooks").should("contain", "Round Table Books");
  });

  it("shows the bookshop address", () => {
    cy.visit("/openbook");
    cy.get("#gaystheword").find(".bookshop-address").should("contain", "66 Marchmont Street");
    cy.get("#gaystheword").find(".bookshop-address").should("contain", "London");
    cy.get("#gaystheword").find(".bookshop-address").should("contain", "WC1N 1AB");

    cy.get("#roundtablebooks").find(".bookshop-address").should("contain", "97 Granville Arcade");
    cy.get("#roundtablebooks").find(".bookshop-address").should("contain", "Coldharbour Lane");
    cy.get("#roundtablebooks").find(".bookshop-address").should("contain", "Brixton");
    cy.get("#roundtablebooks").find(".bookshop-address").should("contain", "London");
    cy.get("#roundtablebooks").find(".bookshop-address").should("contain", "SW9 8PS");

  });

  it("contains links to the bookshop websites", () => {
    cy.visit("/openbook");
    cy.get("#gaystheword").find('a').should('have.attr', 'href').should('include','https://gaystheword.co.uk')

    cy.visit("/openbook");
    cy.get('#roundtablebooks').find('a').should('have.attr', 'href').should('include','https://www.roundtablebooks.co.uk')
  });

  it("shows the bookshop opening times", () => {
    cy.visit("/openbook");
    cy.get("#gaystheword").find(".times").should("contain", "Monday - Saturday: 11am - 6pm");
    cy.get("#gaystheword").find(".times").should("contain", "Sunday: 1pm - 6pm");

    cy.get("#roundtablebooks").find(".times").should("contain", "Sunday - Friday: 11am - 5:30pm");
    cy.get("#roundtablebooks").find(".times").should("contain", "Saturday: 9:30am - 5:30pm");
  });
  
  it('contains tags for bookshops', () => {
    cy.visit('/openbook')
    cy.get("#gaystheword").find(".tags").should('contain', '#LGBT')
    cy.get("#gaystheword").find(".tags").should('contain', '#Queer-Owned')
    cy.get("#roundtablebooks").find(".tags").should('contain', "#Children's Books")
    cy.get("#roundtablebooks").find(".tags").should('contain', "#Black-owned Business")
    cy.get("#roundtablebooks").find(".tags").should('contain', "#Inclusive")
  })

});

