//Media & Events page - test all buttons and links excl. navbar

describe("testing that all links on Library page redirect correctly", function () {
    it("goes to each link ensuring integrity", function () {
        cy.visit("http://localhost:3000/media-events");
        cy.get(".media-card").find('a').click({ multiple: true });
        cy.get(".icon-bar").find('a').click();
        cy.get(".icon-bar").find('button').click();
        cy.get(".mainlogo").find('img').click({ force: true });
    });
});