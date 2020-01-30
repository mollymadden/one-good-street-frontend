//About page - test all buttons and links excl. navbar

describe("testing that all links on About page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000/about");
        cy.contains("Register Your Street").click();
        cy.contains("ABOUT ONE GOOD STREET").click();
        cy.contains("Search the Library of Care Things").click({ force: true });
        cy.contains("ABOUT ONE GOOD STREET").click();
        cy.contains("Register Your Interest").click();
        cy.contains("ABOUT ONE GOOD STREET").click();
        cy.get(".mainlogo").find('img').click();
        cy.get(".icon-bar").find('a').click();
        cy.get(".icon-bar").find('button').click();
    });
});