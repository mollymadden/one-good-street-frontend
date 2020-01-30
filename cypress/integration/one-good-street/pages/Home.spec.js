//Home page - test all buttons and links excl. navbar

describe("testing that all links on Home page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000");
        cy.contains("HOME").click();
        cy.contains("One Good Street Accreditation").click({ force: true });
        cy.contains("HOME").click();
        cy.contains("library of care things").click({ force: true });
        cy.get(".mainlogo").find('img').click();
        cy.get(".icon-bar").find('a').click();
        cy.get(".icon-bar").find('button').click();
    });
});