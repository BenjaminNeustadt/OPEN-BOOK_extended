describe('The homepage', () => {
    it('checks that there is a title', () => {
        cy.visit('/openbook')
        cy.get('h1').should('contain', 'OpenBook')
    })

    it('should use bootstrap grid', () => {
        cy.visit('/openbook');
        cy.get('.container').children().should('have.class', 'row')
        
    })

    it('should have a navbar', () => {
        cy.visit('/openbook');
        cy.get('nav').should('be.visible');
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
})
