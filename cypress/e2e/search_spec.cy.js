describe("The search function", () => {
  it("navigates to the search page", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();

    cy.get('.title').should('contain', "Search")
  })

})