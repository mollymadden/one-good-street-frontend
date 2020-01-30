//Admin dashboard page - test all buttons and links excl. navbar

describe("testing that all links on admin dashboard page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000");
        cy.contains("ADMIN").click();
        cy.get("input[name=email]").type("admin@com.com");
        cy.get("input[name=password]").type("admin");
        cy.contains("Submit").click();
        cy.wait;
        cy.get("td").find('a').click({ multiple: true });
    });
});