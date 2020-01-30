//Library page - test all buttons and links excl. navbar

describe("testing that all links on Library page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000/library");
        cy.contains("Waiver").click();
        cy.contains("Electrical").click();
        cy.contains("Cleaning").click();
        cy.contains("Upload an Item").click();
        cy.contains("info@onegoodstreet.com.au").click();
        cy.contains("LIBRARY OF CARE THINGS").click();
        cy.get('form').find(".search").type("bed table");
        cy.get(".image").find('a').click();
        cy.contains("LIBRARY OF CARE THINGS").click();
        cy.get(".icon-bar").find('a').click();
        cy.get(".icon-bar").find('button').click();
        cy.get(".mainlogo").find('img').click();

    });
});

//Library show item page - test all buttons and links excl. navbar

describe("testing that all links on Library show item page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000/items/5e2a3d4420965a7591448d9c");
    });
});





