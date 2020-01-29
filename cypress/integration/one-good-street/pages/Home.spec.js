//Home page - test all buttons and links exc. navbar

describe("testing that all links on navbar redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000");
        cy.contains("HOME").click();
        cy.contains("ABOUT ONE GOOD STREET").click();
        cy.contains("LIBRARY OF CARE THINGS").click();
        cy.contains("MEDIA & EVENTS").click();
        cy.contains("GET INVOLVED").click();
        cy.contains("ADMIN").click();
    });
});