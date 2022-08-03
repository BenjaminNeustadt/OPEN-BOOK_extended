describe('The bookshop information', () => {
  it('shows the names of two bookshops', () => {
    cy.visit('/openbook')
    cy.get('.bookshop-name').first().should('contain', "Gay's the Word")
    cy.get('.bookshop-name').last().should('contain', "Round Table Books")
  })

  it('shows the bookshop address',() => {
    cy.visit('/openbook')
    cy.get('.bookshop-address').first().should('contain', '66 Marchmont Street')
    cy.get('.bookshop-address').first().should('contain', 'London')
    cy.get('.bookshop-address').first().should('contain', 'WC1N 1AB')

    cy.get('.bookshop-address').last().should('contain', '97 Granville Arcade')
    cy.get('.bookshop-address').last().should('contain', 'Coldharbour Lane')
    cy.get('.bookshop-address').last().should('contain', 'Brixton')
    cy.get('.bookshop-address').last().should('contain', 'London')
    cy.get('.bookshop-address').last().should('contain', 'SW9 8PS')
  })
})