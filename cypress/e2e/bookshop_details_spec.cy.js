describe('The bookshop information', () => {
  it('shows the name of a bookshop', () => {
    cy.visit('/openbook')
    cy.get('.bookshop-name').first().should('contain', "Gay's the Word")
  })
})