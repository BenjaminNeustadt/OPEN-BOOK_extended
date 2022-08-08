describe('The homepage', () => {
    it('checks that there is a title', () => {
        cy.visit('/openbook')
        cy.get('h1').should('contain', 'OpenBook')
    })

    it('should use bootstrap grid', () => {
        cy.visit('/openbook');
        cy.get('.container').children().should('have.class', 'row')
        cy.get('.row').children().should('have.length', 2);
    })

    it('should have a navbar', () => {
        cy.visit('/openbook');
        cy.get('nav').should('be.visible');
    })
  })
  