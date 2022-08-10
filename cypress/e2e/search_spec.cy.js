describe("The search function", () => {
  it("navigates to the search page", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();

    cy.get('.title').should('contain', "Search")
  })
  it("returns a bookshop based on searching name", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("Gay's the Word");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");
  })

  it("returns a bookshop when entered in all lower case", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("round table books");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Round Table Books");
  })

  it("returns a bookshop name when entered without punctuation", () => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("gays the word");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");
  })

  it("returns a bookshop when entered without spaces",() => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("gaystheword");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Gay's the Word");

    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("artwordsbookshop");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should("contain", "Artwords Bookshop");
  })

  it("searches by tags",() => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("children");
    cy.get('#submit-search').click();

    cy.get("#ribabookshop").should("exist")
    cy.get("#chenerbooks").should("exist")
  })

  it("searches by tags for LGBTQ",() => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("LGBTQ");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should('exist');

    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("lgbtq");
    cy.get('#submit-search').click();

    cy.get(".bookshop-name").first().should('exist');
  })

  it("searches by tags regardless of capitalisation",() => {
    cy.visit('/openbook');
    cy.get('.search-link').click();
    cy.get('#search').type("CHILDREN");
    cy.get('#submit-search').click();

    cy.get("#ribabookshop").should("exist")
    cy.get("#chenerbooks").should("exist")
    cy.get('#housmansbookshop').should("not.exist")
  })
})