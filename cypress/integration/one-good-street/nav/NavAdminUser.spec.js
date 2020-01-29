//nav links as an admin user

//test all nav links for broken links
describe("testing that all links on navbar redirect correctly as an administrator", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000");
        cy.contains("HOME").click();
        cy.contains("ABOUT ONE GOOD STREET").click();
        cy.contains("LIBRARY OF CARE THINGS").click();
        cy.contains("MEDIA & EVENTS").click();
        cy.contains("GET INVOLVED").click();
        cy.contains("ADMIN").click();
        cy.get("input[name=email]").type("admin@com.com");
        cy.get("input[name=password]").type("admin");
        cy.contains("Submit").click();
        cy.wait;
        cy.contains("DASHBOARD").click();
        cy.contains("MANAGE USERS").click();
        cy.contains("SIGN OUT").click();
    });
});