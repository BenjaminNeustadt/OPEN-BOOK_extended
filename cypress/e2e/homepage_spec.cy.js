describe('The homepage', () => {
    it('checks that there is a title', () => {
        cy.visit('/openbook')
        cy.get('h1').should('contain', 'OpenBook')
    })

    it('should use bootstrap grid', () => {
        cy.visit('/openbook');
        cy.get('div').first().should('have.class', 'container');
        cy.get('.container').children().should('have.class', 'row')
        cy.get('.row').children().should('have.length', 2);
    })


  })
  