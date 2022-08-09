describe("The search function", () => {
  it("navigates to the search page", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();

    cy.get('.title').should('contain', "Search")
  })
  it("returns a bookshop based on searching name", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('.search-by-name').should("contain", "Search by Name")
    cy.get('#search').type("Gay's the Word");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");
  })
})