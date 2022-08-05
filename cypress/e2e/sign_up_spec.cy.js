describe('The sign up page', () => {
	it('allows the user to sign up', () => {
		cy.visit('/users/new');
		cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
		cy.get('#sign-up-button').click();
		cy.url().should("include", "/sessions/new");
	})
})