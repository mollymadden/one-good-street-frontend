//Home page - test all buttons and links excl. navbar

describe("testing that all links on Home page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000/library");
        cy.contains("Waiver").click();
        cy.contains("Electrical").click();
        cy.contains("Cleaning").click();
        cy.contains("Upload an Item").click();
        cy.contains("LIBRARY OF CARE THINGS").click();
        cy.get("input[.search]").type("bed table");
        // cy.contains("library of care things").click({ force: true });
        // cy.get(".mainlogo").find('img').click();
        // cy.get(".icon-bar").find('a').click();
        // cy.get(".icon-bar").find('button').click();
    });
});