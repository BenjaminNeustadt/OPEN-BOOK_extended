describe('The homepage', () => {
  it('checks that there is a title', () => {
      cy.visit('/openbook')
      cy.get('h1').should('contain', 'OpenBook')
  })

  xit("should redirect to homepage when url is '/' ", () => {
      cy.visit('/');
      cy.url().should('eq', 'http://localhost:3030/openbook')
  })


  it("should have url '/' equal url '/openbook' by checking status 200", () => {
      cy.request({
          url: 'http://localhost:3030/',
          failOnStatusCode:false,
      }).then((resp) => {
          expect(resp.status).to.eq(200)
      })
  })

  it("can toggle between map and list", () => {
      cy.visit('/openbook');
      cy.get('#toggle').click()
      cy.get('#toggle').should('contain', 'List')
      cy.get('#map').should('be.visible')
      cy.get('.row').should('not.be.visible')
  })
})
