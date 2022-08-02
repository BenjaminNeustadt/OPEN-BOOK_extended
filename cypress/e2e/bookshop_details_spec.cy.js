describe('The bookshop information', () => {
  it('shows the names of two bookshops', () => {
    cy.visit('/openbook')
    cy.get('.bookshop-name').first().should('contain', "Gay's the Word")
    cy.get('.bookshop-name').last().should('contain', "Round Table Books")
  })
})